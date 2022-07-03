"ui";

var storage = storages.create("78ec1d38-059a-4887-94f0-109a9af12b6c"); //创建本地储存
var floatyPermission = storage.get('floatyPermission', false);
var 识别率 = storage.get("识别率",0.7);
device.keepScreenOn(5* 3600 * 1000);//长亮
setInterval(()=>{}, 1000);//保持脚本运行
ui.statusBarColor("#FFBEBEBE");//最上方颜色
$settings.setEnabled('foreground_service', true);
android.settings.IGNORE_BATTERY_OPTIMIZATION_SETTINGS;
$power_manager.requestIgnoreBatteryOptimizations();

/*@start-----卡密管理------------ */
if(!files.exists("///sdcard/kami.dat")){
    files.create("///sdcard/kami.dat");
}
var store_kami=files.read("///sdcard/kami.dat");
toastLog("存储的卡密："+store_kami);
var zwk_kami="";
//--------------------作者/软件信息------------------------
//开发者ID  (后台 左上角头像下方的ID)
var DeveloperID = "14";
DeveloperID=DeveloperID+"273";
storage.put("DeveloperID",DeveloperID);
//API 密码 (后台 设置中的 接口安全密码)
var ApiPassword = "854";
ApiPassword=ApiPassword+"855";
storage.put("ApiPassword",ApiPassword);
//软件名称
var SoftwareName = "zwkt";
SoftwareName=SoftwareName+"yjb";
storage.put("SoftwareName",SoftwareName);
//卡密
var CDK = "";
//--------------------------------------------
/**
 * CDK登陆
 */
 function CDKLogin() {
    //退出上一次的Needle
    var logoutResult = LogoutNeedle();
    console.log(logoutResult[1]);
    var loginResult = SendQLRequest(
      "apiv3/card_login",
      "card=" + CDK + "&software=" + SoftwareName
    );
   
    if (loginResult[0]) {
      var successData = loginResult[1];
      var endTime = successData["endtime"];
      var lessTime = successData["less_time"];
      var needle = successData["needle"];
   
      PutSt("oldNeedle", needle); //存储本次 的Needle
      toastLog("登录成功！");
      console.log(needle + "登陆成功");
      zhuye();
      threads.start(function() {
        SendHeartbeat(needle);
      });
    } else {
      var failResult = loginResult[1];
      console.warn("CDKLogin FailMsg:" + failResult);
      console.warn("所有线程已经停止!");
      toastLog("卡密错误，请联系 QQ：286911338获取卡密.");
      threads.shutDownAll(); //停止所有线程
      exit();
    }
  }
   
  /**
   * 退出上一次的Needle
   */
  function LogoutNeedle() {
    var oldNeedle = GetSt("oldNeedle", "");
   
    if (oldNeedle != "") {
      var logoutResult = SendQLRequest(
        "apiv3/card_logout",
        "card=" + CDK + "&needle=" + oldNeedle
      );
      if (logoutResult[0]) {
        return [true, oldNeedle + " 退出成功!"];
      } else {
        return [false, oldNeedle & " 退出失败!"];
      }
    } else {
      return [true, "上次无存储的Needle"];
    }
  }
   
  /**
   * 卡密心跳
   * @param {string} cdkNeedle
   */
  function SendHeartbeat(cdkNeedle) {
    do {
      var heartbeatResult = SendQLRequest(
        "apiv3/card_ping",
        "card=" + CDK + "&software=" + SoftwareName + "&needle=" + cdkNeedle
      );
   
      if (heartbeatResult[0]) {
        var successData = heartbeatResult[1];
   
        var endTime = successData["endtime"];
   
        var lessTime = successData["less_time"];
        console.warn("心跳正常. 剩余时间:" + lessTime);
      
        sleep(5 * 60 * 1000); //休息5分钟
      } else {
        var failResult = heartbeatResult[1];
   
        console.warn("Heartbeat FailMsg:" + failResult);
        console.warn("所有线程已经停止!");
        threads.shutDownAll(); //停止所有线程
      }
    } while (true);
  }
   
  /**
   * 访问权朗api
   * @param {string}} api
   * @param {string} apiParams
   */
  function SendQLRequest(api, apiParams) {
    var qlHostArray = [
      "https://napi.2cccc.cc/",
      "https://api2.2cccc.cc/",
      "https://api3.2cccc.cc/"
    ];
    var connectTimes = 0;
    var taoBaoTimeStamp = "";
   
    do {
      connectTimes = connectTimes + 1;
   
      taoBaoTimeStamp = http
        .get("http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp")
        .body.string();
   
      if (connectTimes > 10) {
        console.log("淘宝时间戳超时");
        return [false, "连接淘宝时间戳服务器失败"];
      }
    } while (taoBaoTimeStamp.substring(2, 5) != "api");
   
    taoBaoTimeStamp = JSON.parse(taoBaoTimeStamp);
    var timeStamp = taoBaoTimeStamp["data"]["t"].substring(0, 10);
    var sign = HexMd5(ApiPassword + "" + timeStamp);
    var common_params =
      "center_id=" + DeveloperID + "&timestamp=" + timeStamp + "&sign=" + sign;
    connectTimes = 0;
    var qlResult = "";
   
    do {
      connectTimes = connectTimes + 1;
   
      qlResult = http
        .get(
          qlHostArray[Math.floor(Math.random() * (3 - 0) + 0)] +
            api +
            "?" +
            common_params +
            "&" +
            apiParams
        )
        .body.string();
   
      if (connectTimes > 10) {
        return [false, "权朗回执超时"];
      }
    } while (qlResult.substring(2, 6) != "code");
   
    qlResult = JSON.parse(qlResult);
   
    if (qlResult["code"] == "1") {
      if (
        HexMd5(qlResult["timestamp"] + ApiPassword).toUpperCase() ==
          qlResult["sign"].toUpperCase() &&
        Math.abs(timeStamp - qlResult["timestamp"]) < 700
      ) {
        return [true, qlResult["data"]];
      } else {
        return [false, "请检查API密码是否填写正确"];
      }
    } else {
      return [false, qlResult["msg"]];
    }
  }
   
  //--------Helper---------
   
  /**
   * 判断是否 不是 空
   * @param {any}} content 内容
   */
  function IsNotNullOrEmpty(content) {
    return (
      content != null &&
      content != undefined &&
      content != "" &&
      content != " " &&
      content != "  "
    );
  }
   
  /**
   * 存储空间 存入 键值数据
   * @param {string} key 键名
   * @param {any} value 值
   */
  function PutSt(key, value) {
    //   cw(key + " : " + value);
    if (IsNotNullOrEmpty(value)) {
      storage.put(key, value);
    } else {
      //cw("key:" + key + "----> value为空,跳过保存");
    }
  }
   
  /**
   * 获取 存储控件中的 数据
   * @param {string} key 键名
   * @param {any} defaultValue 默认值
   */
  function GetSt(key, defaultValue) {
    var data = storage.get(key);
    // cw(key + " : " + data);
    if (IsNotNullOrEmpty(data)) {
      return data;
    } else {
      if (defaultValue == undefined) {
        defaultValue = "";
      }
      //cw(key + " : 返回默认值->>" + defaultValue);
      return defaultValue;
    }
  }
  //-------------------------------------
   
  //-------MD5---------------------
  //(autojs 调用java 的MD5方法有bug, 生成出来的是错误的结果.所以用 下面的js md5)
  /**
   * 16进制MD5(常用)
   * @param {any} s
   */
  function HexMd5(s) {
    return binl2hex(core_md5(str2binl(s), s.length * chrsz));
  }
  function B64Md5(s) {
    return binl2str(core_md5(str2binl(s), s.length * chrsz));
  }
  function StrMd5(key, data) {
    return binl2hex(core_hmac_md5(key, data));
  }
  function HexHmacMd5(key, data) {
    return binl2hex(core_hmac_md5(key, data));
  }
  function B64HmacMd5(key, data) {
    return binl2b64(core_hmac_md5(key, data));
  }
  function StrHmacMd5(key, data) {
    return binl2str(core_hmac_md5(key, data));
  }
   
  var hexcase = 0;
  var b64pad = "";
  var chrsz = 8;
  function md5_vm_test() {
    return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
  }
  function core_md5(x, len) {
    x[len >> 5] |= 0x80 << len % 32;
    x[(((len + 64) >>> 9) << 4) + 14] = len;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;
      a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
      d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
      a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
      c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
      d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safe_add(a, olda);
      b = safe_add(b, oldb);
      c = safe_add(c, oldc);
      d = safe_add(d, oldd);
    }
    return Array(a, b, c, d);
  }
  function md5_cmn(q, a, b, x, s, t) {
    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
  }
  function md5_ff(a, b, c, d, x, s, t) {
    return md5_cmn((b & c) | (~b & d), a, b, x, s, t);
  }
  function md5_gg(a, b, c, d, x, s, t) {
    return md5_cmn((b & d) | (c & ~d), a, b, x, s, t);
  }
  function md5_hh(a, b, c, d, x, s, t) {
    return md5_cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function md5_ii(a, b, c, d, x, s, t) {
    return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
  }
  function core_hmac_md5(key, data) {
    var bkey = str2binl(key);
    if (bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);
    var ipad = Array(16),
      opad = Array(16);
    for (var i = 0; i < 16; i++) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5c5c5c5c;
    }
    var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
    return core_md5(opad.concat(hash), 512 + 128);
  }
  function safe_add(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xffff);
  }
  function bit_rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
  }
  function str2binl(str) {
    var bin = Array();
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < str.length * chrsz; i += chrsz)
      bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;
    return bin;
  }
  function binl2str(bin) {
    var str = "";
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < bin.length * 32; i += chrsz)
      str += String.fromCharCode((bin[i >> 5] >>> i % 32) & mask);
    return str;
  }
  function binl2hex(binarray) {
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i++) {
      str +=
        hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xf) +
        hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xf);
    }
    return str;
  }
  function binl2b64(binarray) {
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i += 3) {
      var triplet =
        (((binarray[i >> 2] >> (8 * (i % 4))) & 0xff) << 16) |
        (((binarray[(i + 1) >> 2] >> (8 * ((i + 1) % 4))) & 0xff) << 8) |
        ((binarray[(i + 2) >> 2] >> (8 * ((i + 2) % 4))) & 0xff);
      for (var j = 0; j < 4; j++) {
        if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;
        else str += tab.charAt((triplet >> (6 * (3 - j))) & 0x3f);
      }
    }
    return str;
  }

function zwk_login() {
    CDK = zwk_kami;
    if(CDK.length<=0){
        toast("请先输入卡密!!");
        exit();
        return;
    }
    CDKLogin();
}

function zhuye(){
    let kami=zwk_kami;
    files.write("///sdcard/kami.dat",kami);
    toastLog("存储卡密："+files.read("///sdcard/kami.dat"));
}

dialogs.build({
    title: "请输入卡密：",
    titleColor: "black",
    content:"免费卡密，请加入vip:zwk234.com",
    contentColor:"black",
    contentLineSpacing:0.5,
    inputPrefill: store_kami,
    positive: "确认",
    positiveColor: "#3ADD57",
    negative: "取消",
    negativeColor: "#FF0000",
    cancelable:false,
    canceledOnTouchOutside:false
}).on("input", (text, dialog)=>{
    console.log("你输入的是" + text);
    zwk_kami=text;
}).on("positive", () => {
    console.log("确认");
    zwk_login();
}).on("negative", () => {
    console.log("取消");
    threads.stopAll();
    exit();
}).show();
/*@end-----卡密管理------------ */

var 软件名;
var 包名;
var 运行时间;
var 广告线程;
var 启动线程;
var 平台=[];
var 版本 = "12";

function updateCheck(){
    http.__okhttp__.setTimeout(5000);//超时时间，5秒
    http.get("https://zwk365.lanzoul.com/ieml007a8cyh", {}, function(res, err){
        if(err){
            console.error(err);
            return;
        }
        if(res.statusCode != 200){
            toast("请求失败: " + res.statusCode + " " + res.statusMessage);
        }else{
            log("code = " + res.statusCode);
            var fileInfoArr=res.body.string().split("###");
            var fileInfo=fileInfoArr[1];
            var versionInfoArr=fileInfo.split(";");
            var nowVersion=versionInfoArr[0];
            var nowVersionCodeArr=nowVersion.split("：");
            var nowVersionCodeTxt=nowVersionCodeArr[1];//当前版本号
            log("nowVersionCodeTxt="+nowVersionCodeTxt);
            var nowUpdateInfo=versionInfoArr[1];
            var nowUpdateInfoArr=nowUpdateInfo.split("：");
            var nowUpdateInfoTxt=nowUpdateInfoArr[1];//当前更新内容
            log("nowUpdateInfoTxt="+nowUpdateInfoTxt);
            var nowUpdateUrl=versionInfoArr[2];
            var nowUpdateUrlArr=nowUpdateUrl.split("：");
            var nowUpdateUrlTxt=nowUpdateUrlArr[1];//当前更新url
            log("nowUpdateUrlTxt="+nowUpdateUrlTxt);
            //检查是否需要提示更新
            var iNowVersionCodeTxt=Number(nowVersionCodeTxt);
            var iLastVersionCodeTxt=Number(版本);
            if(iNowVersionCodeTxt>iLastVersionCodeTxt){
                dialogs.build({
                    title: "检测到有更新：",
                    titleSize:10,
                    titleColor: "black",
                    content:nowUpdateInfoTxt,
                    contentColor:"black",
                    contentLineSpacing:0.5,
                    positive: "确认",
                    positiveColor: "#3ADD57",
                    negative: "取消",
                    negativeColor: "#FF0000",
                    cancelable:false,
                    canceledOnTouchOutside:false
                }).on("positive", () => {
                    console.log("确认");
                    app.openUrl(nowUpdateUrlTxt);
                }).on("negative", () => {
                    console.log("取消");
                    threads.stopAll();
                    exit();
                }).show();
            }else{
                log("无需更新。");
            }
        }
    });
}

updateCheck();

ui.layout(
    <vertical bg="#FFBEBEBE">
        <card w="*" h="*" margin="5 5 5 5">
        <img scaleType="fitXY" src="https://s1.328888.xyz/2022/07/03/N6fS.md.jpg" />
        <vertical alpha="0.8">
            <toolbar w="*" h="40" marginTop="5" >
                    <img id="tb" w="40" h="40" margin="10 0" scaleType="fitXY" circle="true" layout_gravity="left" src="https://s1.328888.xyz/2022/07/03/NKnX.png" />
                    <text id="toolbar" text="大懒猪辅助V{{版本}}" textColor="black"layout_gravity="center" textSize="20sp"  typeface="monospace" />
                    <text id="display"  margin="5 5 5 5"  textStyle="bold|italic" textColor="black" textSize="20sp"/>
                    <img id="qqq" w="40" h="40" margin="14 0" scaleType="fitXY" circle="true" layout_gravity="right" src="https://s1.328888.xyz/2022/07/03/NayB.jpg" />
            </toolbar>

            <card w="0" h="0" margin="5 5 5 5" cardCornerRadius="5dp" cardBackgroundColor="#B2FFFFFF" gravity="center">
                <horizontal id="gg" margin="5 0 5 0" >
                    <TextView id="ggnr" singleLine="true" ellipsize="marquee" focusable="true"textColor="red"textSize="15sp" text="1.欢迎使用此脚本，此脚本仅用于技术交流，请不要用作违法用途,本人不承担任何法律责任。2.本脚本为免费脚本！严禁贩卖！如果你从别的地方购买证明你已上当！3.点击左上角可以加入免费脚本群！" />
                </horizontal>
            </card>
            
            <card alpha="0.9" margin="5 5 5 5" cardCornerRadius="10dp" cardBackgroundColor="#B2FFFFFF" gravity="center_horizontal">
                <horizontal w="auto" h="auto" layout_gravity="center">
                    <Switch id="autoService" textColor="black" h="35" text="无障碍服务" checked="{{auto.service != null}}" textSize="18sp" />
                    <Switch id="floaty_button" marginLeft="40"  textColor="black" h="35" text="悬浮窗权限" checked="{{floatyPermission}}"  textSize="18sp" />
                </horizontal>
            </card>
            
            <card alpha="0.9" margin="5 5 5 5" cardCornerRadius="10dp" cardBackgroundColor="#B2FFFFFF" gravity="center">
                <horizontal w="*" h="35" gravity="center">
                    <checkbox id="sf" text="缩放" marginLeft="20" textColor="black" w="auto" h="39" checked="true" textSize="18sp"/>
                    <text text="--识别度 " textColor="black" textSize="18sp" />
                    <text id="sb" text="1" textColor="#FFFF0000" w="40" textSize="18sp" />
                    <text marginLeft="1" text="％" textColor="black" textSize="18sp" />
                    <seekbar w="*" id="识别" progress="-10" marginTop="3" max="9" textSize="18sp" />
                    
                </horizontal>
            </card>
            
        <scroll alpha="0.9">//滑动
            <vertical w="*" h="*">
                <card alpha="0.9" margin="5 5 5 5" cardCornerRadius="10dp" cardBackgroundColor="#CCFFFFFF" gravity="center">
                    <vertical>
                        <horizontal gravity="center">
                            <checkbox id="p2" text="奖券世界" textSize="18sp" textColor="black"/>
                            <text id="x2" text="去下载" marginLeft="20" textSize="18sp"textColor="#00CD00"/>
                            <input id="y2"  inputType="textLongMessage"  marginLeft="25" w="60" text="60" textSize="18sp" />
                            <text id="s2" text="分钟" marginLeft="5" textSize="18sp"textColor="blue"/>
                        </horizontal>
                    </vertical>
                </card>
                <button id="go" alpha="0.8" h="auto" margin="0 20" layout_gravity="center_horizontal" text="开始运行" w="*" textColor="#FFFF00" bg="#FF000000" textSize="18sp"/>
                <card alpha="0.9" margin="5 5 5 5" cardCornerRadius="10dp" cardBackgroundColor="#CCFFFFFF" gravity="center">
                    <vertical margin="20 0">
                        <text text=" 脚本说明:" textSize="18sp"textColor="black"/>
                        <text text=" 1.运行前开启无障碍、悬浮窗。"textColor="black"textSize="16sp"/>
                        <text text=" 2.安卓7.0以下用不了，请卸载。"textColor="black"textSize="16sp"/>
                        <text text=" 3.游戏不点击的，调整识别和缩放。"textColor="black"textSize="16sp"/>
                    </vertical>
                </card>
            </vertical>
        </scroll>//滑动
        </vertical>
        </card>
    </vertical>
)

var y2 = storage.get("y2");
if (y2 != null) {ui.y2.setText(y2);}

//下载
ui.x2.click(function(){let url = "http://mtw.so/5KkhgM" ;
setClip(url);putlog("已复制链接","i");toast("已复制链接");app.openUrl(url)});

//判断安装
var 安装 = threads.start(function(){安装检测();安装.interrupt();})
function 安装检测(){
    for (let r = 0; r < 4; r++) {
    try{
        if(app.getAppName("com.caike.ticket")!=null){ui.x2.setText("已安装");}else{ui.x2.setTextColor(colors.rgb(255,0,0))}
    }catch(e){
        continue;}
    }
}

//点击运行
ui.go.click(()=>{
    //判断无障碍
    if(auto.service == null) {toastLog("请先开启无障碍服务！")
    app.startActivity({action: "android.settings.ACCESSIBILITY_SETTINGS"})
    return}else{
    if(ui.go.text() == "开始运行"){
        ui.go.setText("停止运行");
        ui.go.setTextColor(colors.rgb(238,44,44));
        threads.start(function(){
        events.observeKey();
        events.onKeyDown("volume_down",function(event){
        engines.stopAllAndToast();}); })
        cumtomUI();
        storage.put("y2", ui.y2.text());
        多平台()
        putlog(时间()+"脚本启动:音量下键关闭脚本");
    }else{
        ui.go.setTextColor(colors.rgb(0,255,0))
        ui.go.setText("开始运行");
        putlog(时间()+"线程结束","v");
        threads.shutDownAll();
        }
    }
})

function 多平台(){
    if(ui.p2.checked == true){平台[2]=true;}else{平台[2]=false;}
    threads.start(function(){
        申请截图权限();
        开始多任务();
    })
}

function 开始多任务(){
if(平台[2]==true){奖券世界();平台[2]=false}
toastLog("任务全部完成，脚本结束");
threads.shutDownAll();
exit();
}

function 快乐糖果(){
    软件名 = "快乐糖果"
    包名 = "com.og.klxtg"
    putlog(时间()+"当前平台:"+软件名,"i");
    运行时间 = new Date().getTime()
    广告线程 = threads.start(function(){launch(包名);
    sleep(1000)
        while(true){
            try{
                关闭广告();
            }catch(err){
                //log(err);
                continue}}
    })
    sleep(800);
    if(text("允许").find().length > 0){text("允许").find().click()}
    sleep(2000)
    while(new Date().getTime() < 运行时间 + (ui.y10.text() * 60000)){
        try{
            if(id("tt_video_progress").exists() || textStartsWith("倒计时").exists() || textStartsWith("后可领取").exists() || textStartsWith("奖励于").exists() || textStartsWith("奖励将于").exists() || textStartsWith("即可获得奖").exists() || text("免费获取").exists()){}else{
            /*
            找图封装("翻天@发现作弊器", 识别率,10000)
            找图封装("翻天@我要作弊", 识别率,1000)
            */
            找图封装("快乐@开始游戏", 识别率,1000)
            找图封装("快乐@开始游戏 ", 识别率,1000)
            找图封装("快乐@点击红包", 识别率,1500)
            找图封装("快乐@点击红包 ", 识别率,1500)
            //找图封装("快乐@观看广告", 识别率,2000)
            找图封装("快乐@观看广告 ", 识别率,2000)
            找图封装("快乐@确定", 识别率,1500)
            找图封装("快乐@关闭", 识别率,1500)
            
            }
            //sleep(1000)
            跳出检测();
        }catch(e){
            //log(e);
            continue}
    }
    结束应用(包名)
    广告线程.interrupt();
}

function 直播抢单(){
    let 开启 = false
    软件名 = "白金熊"
    包名 = "com.hdguanjia.bjx"
    putlog(时间()+"当前平台:"+软件名,"i");
    运行时间 = new Date().getTime()
    广告线程 = threads.start(function(){launch(包名);
    sleep(1000)
        while(true){
            try{
                关闭广告();
            }catch(err){
                //log(err);
                continue}}
    })
    sleep(800);
    if(text("允许").find().length > 0){text("允许").find().click()}
    sleep(2000)
    while(new Date().getTime() < 运行时间 + (ui.y9.text() * 60000)){
        try{
            if(id("tv_disagree").text("已读").exists()){back();sleep(500)}
            if(id("teachingDialogCloseBtn").exists()){back();sleep(500)}
           
            if(开启==false){
                if(text("自动挂机").exists()){}else{
                    if(id("tv_tab_title").text("挂机").exists()){
                        let tr = id("tv_tab_title").text("挂机").find()[0].bounds()  
                        click(tr.centerX(), tr.centerY());
                        putlog(时间()+"点击挂机","i");sleep(500)
                    }
                }
                if(text("自动挂机").exists()){
                    if(text("已开启").find().length==3){
                        if(textStartsWith("已安装").find().length==3){
                            putlog(时间()+"权限全部开启","i");开启=true;sleep(1000)
                        }else{putlog(时间()+"请开启全部权限","i");sleep(1000)}
                    }else{putlog(时间()+"请开启全部权限","i");sleep(1000)}
                }
            }else{
                if(text("客服咨询").exists()){}else{
                    if(id("tv_tab_title").text("首页").exists()){
                        let tr = id("tv_tab_title").text("首页").find()[0].bounds()  
                        click(tr.centerX(), tr.centerY());
                        putlog(时间()+"点击首页","i");sleep(500)
                    }
                }
                if(text("客服咨询").exists()){
                    if(id("tv_status").text("去抢单").exists()){
                        putlog(时间()+"发现任务单，争抢中","i");
                        let t = text("去抢单").find().length
                        for(var i = 0;i < t;i++){
                        id("tv_status").text("去抢单").find()[i].click();sleep(1500)}
                        if(id("tv_status").text("去抢单").exists()){
                        曲线滑动(device.width / 2,  device.height*0.1, device.width / 2, device.height*0.8, 300);
                        //sleep(1000)
                        }
                        //if(text("允许").find().length > 0){text("允许").find().click()}
                    }else{
                        putlog(时间()+"没有任务，刷新中","i");
                        曲线滑动(device.width / 2,  device.height*0.1, device.width / 2, device.height*0.8, 300);
                        //sleep(1000)
                    }
                }
            }
            
            //sleep(1000)
            //跳出检测();
        }catch(e){
            log(e);
            continue}
    }
    结束应用(包名)
    广告线程.interrupt();
}

function 轻抖(){
    var 时间1 = ""
    if(平台[7]==true==true){
        时间1 = ui.y7.text()
        软件名 = "轻抖"
        包名 = "com.qingdou.android"
    }else{
        时间1 = ui.y8.text()
        软件名 = "轻草"
        包名 = "com.qingcao.android.zygote"
    }
    putlog(时间()+"当前平台:"+软件名,"i");
    运行时间 = new Date().getTime()
    广告线程 = threads.start(function(){launch(包名);
    sleep(1000)
        while(true){
            try{
               // 游戏内部广告，右上角凸出一个关闭按钮
    if(id("tt_insert_dislike_icon_img").exists()){id("tt_insert_dislike_icon_img").findOnce().click();putlog(时间()+"关闭内广告3")}
    
    //游戏内部广告(右上大个关闭)
    if(id("klevin_iv_interstitial").exists()){
        if(id("klevin_iv_close").exists()){
            id("klevin_iv_close").findOnce().click()
            putlog(时间()+"关闭内广告4")
        }
    }
    //游戏内部广告/有x
    if(id("ksad_video_container").exists()){
        if(className("android.view.View").clickable(true).depth(5).indexInParent(0).exists()){
            className("android.view.View").clickable(true).depth(5).indexInParent(0).findOnce().click()
            putlog(时间()+"关闭内广告5")
        }
        if(className("android.view.View").clickable(true).depth(9).drawingOrder(0).exists()){
            className("android.view.View").clickable(true).depth(9).drawingOrder(0).findOnce().click()
            putlog(时间()+"关闭内广告6")
        }
    }
    
    //右上角有x
    if(id("ksad_auto_close_btn").exists()){
        id("ksad_auto_close_btn").findOnce().click()
        putlog(时间()+"关闭内广告7")
    }
    
    if(id("tt_root_view").exists() || id("tt_top_dislike").exists()){}else{
    if(text("反馈").exists()){
        let i = text("反馈").find()[0].depth()
        if(text("广告").depth(Number(i)+2).exists()){
            if(className("android.widget.Image").depth(Number(i)).exists()){
                let tr = className("android.widget.Image").depth(Number(i)).find()[0].bounds()  
                click(tr.centerX(), tr.centerY());
                putlog(时间()+"关闭内广告8");sleep(500)
            }
        }
    }
    if(text("反馈").exists()){
        let i = text("反馈").find()[0].depth()
        if(text("广告").depth(Number(i)+2).exists()){
            if(className("android.widget.Image").depth(Number(i) + 1).exists()){
                let tr = className("android.widget.Image").depth(Number(i) + 1).find()[0].bounds()  
                click(tr.centerX(), tr.centerY());
                putlog(时间()+"关闭内广告9");sleep(500)
            }
        }
    }}
    
    //返回集合////////////////////////////////////////////////////////////////
    if(text("腾讯优量汇 - 模版2.0广告").exists() || id("mbridge_iv_close").exists()  ||  id("m-playable-close").exists() || id("btnFeedback").exists() ||id("tt_close_iv").exists() || id("banner_top").exists() || id("mimo_reward_close_img").exists() || textStartsWith("百度网盟推广").exists() || textStartsWith("恭喜获得奖励").exists() || textStartsWith("http").exists()){back()}
    if(text("无法关闭").exists() && text("不感兴趣").exists()){back()}
    
    //启动圆形跳过
    if(id("tt_splash_skip_btn").exists()){
        id("tt_splash_skip_btn").findOnce().click();putlog(时间()+"跳过启动广告1")}
    //椭圆跳过1
    if(id("ksad_splash_skip_view").exists()){
        id("ksad_splash_skip_view").findOnce().click();putlog(时间()+"跳过启动广告2")}
    
    //椭圆跳过2
    if(text("跳过").exists()){
        if(className("android.widget.FrameLayout").clickable(true).depth(9).drawingOrder(3).indexInParent(0).exists()){
            className("android.widget.FrameLayout").clickable(true).depth(9).drawingOrder(3).indexInParent(0).findOnce().click();
        }
    }
            }catch(err){
                //log(err);
                continue}}
    })
    sleep(800);
    if(text("允许").find().length > 0){text("允许").find().click()}
    sleep(2000)
    while(new Date().getTime() < 运行时间 + (时间1 * 60000)){
        try{
            if(text("文案提取").exists()){
                putlog(时间()+"部分手机要手动进入引流任务","i");sleep(500)
                找图封装("引流任务", 识别率,1000)
                找图封装("引流任务 ", 识别率,1000)
            }
            
            if(text("任务大厅").exists()){
                if(text("暖场").exists()){
                    let tr = text("暖场").find()[0].bounds()  
                    click(tr.centerX(), tr.centerY());
                    putlog(时间()+"点击引流","i");sleep(1000)
                }
                if(text("去赚钱").exists()){
                    let tr = text("去赚钱").find()[0].bounds()  
                    click(tr.centerX(), tr.centerY());
                    putlog(时间()+"点击去赚钱","i");sleep(1000)
                }else{
                    if(text("已完成").exists()){
                        let tr = text("已完成").find()[0].bounds()  
                        click(tr.centerX(), tr.centerY());
                        putlog(时间()+"点击已完成","i");sleep(1000)
                    }
                }
            }
                
            
            if(textStartsWith("任务详情").exists()){sleep(500)
                if(text("任务已结束").exists()){putlog(时间()+"没有引流任务，等待10秒","i");back();sleep(10000)}
                if(text("报名赚钱").exists()){putlog(时间()+"没有引流任务，等待10秒","i");back();sleep(10000)}
                if(text("我要涨粉").exists()){putlog(时间()+"没有引流任务，等待10秒","i");back();sleep(10000)}
                if(text("是否去看看订阅任务？").exists()){putlog(时间()+"没有引流任务，等待10秒","i");back();sleep(10000)}
                
                if(text("去赚钱").clickable(true).exists()){
                    text("去赚钱").clickable(true).findOnce().click()
                    putlog(时间()+"点击去赚钱，等待15秒","i");
                    for(var i = 0;i < 16;i++){putlog(时间()+"  "+i,"i");sleep(1000)}
                    putlog(时间()+"正在返回，等待3秒","i")
                    threads.start(function(){app.launch(包名);launchPackage(包名)})
                    app.launchPackage(包名);launch(包名);
                    sleep(3000)
                    
                }else{
                    if(text("接新单").clickable(true).exists()){
                        text("接新单").clickable(true).findOnce().click();
                        putlog(时间()+"点击去赚钱，等待15秒","i");
                        for(var i = 0;i < 16;i++){putlog(时间()+"  "+i,"i");sleep(1000)}
                        putlog(时间()+"正在返回，等待3秒","i")
                        threads.start(function(){app.launch(包名);launchPackage(包名)})
                        app.launchPackage(包名);launch(包名);
                        sleep(3000)
                    }
                }
            }
            
            if(text("重要通知").exists()){
                if(text("报名其他任务").exists()){
                    text("报名其他任务").findOnce().click();
                    putlog(时间()+"报名其他任务，等待3秒","i")
                    sleep(3000)
                }
                if(text("接新单").clickable(true).exists()){
                    text("接新单").clickable(true).findOnce().click();
                    putlog(时间()+"报名其他任务，等待3秒","i")
                    sleep(3000)
                }
            }
            sleep(1000)
        }catch(e){
            log(e);
            continue}
    }
    结束应用(包名)
    广告线程.interrupt();
}

function 开心翻天(){
    软件名 = "开心翻天"
    包名 = "com.kxzft.cn"
    putlog(时间()+"当前平台:"+软件名,"i");
    运行时间 = new Date().getTime()
    广告线程 = threads.start(function(){launch(包名);
    sleep(1000)
        while(true){
            try{
                关闭广告();
            }catch(err){
                //log(err);
                continue}}
    })
    sleep(800);
    if(text("允许").find().length > 0){text("允许").find().click()}
    sleep(2000)
    while(new Date().getTime() < 运行时间 + (ui.y6.text() * 60000)){
        try{
            if(id("tt_video_progress").exists() || textStartsWith("倒计时").exists() || textStartsWith("后可领取").exists() || textStartsWith("奖励于").exists() || textStartsWith("奖励将于").exists() || textStartsWith("即可获得奖").exists() || text("免费获取").exists()){}else{
            
            找图封装("翻天@发现作弊器", 识别率,10000);
            找图封装("翻天@我要作弊", 识别率,1000);
            }
            sleep(1000)
            跳出检测();
        }catch(e){
            log(e);
            continue}
    }
    结束应用(包名)
    广告线程.interrupt();
}

function 爱微影(){
    软件名 = "爱微影"
    包名 = "com.zhw.ivy"
    putlog(时间()+"当前平台:"+软件名,"i");
    运行时间 = new Date().getTime()
    广告线程 = threads.start(function(){launch(包名);
    sleep(1000)
        while(true){
            try{
                关闭广告();
            }catch(err){
                //log(err);
                continue}}
    })
    sleep(800);
    if(text("允许").find().length > 0){text("允许").find().click()}
    sleep(2000)
    while(new Date().getTime() < 运行时间 + (ui.y5.text() * 60000)){
        try{
            
            if(id("iVRedpacket").exists()){
                id("iVRedpacket").findOnce().click()
                putlog(时间()+"点击看视频任务","i");sleep(1500)
            }
            if(id("mimo_banner_view_close").exists()){
                id("mimo_banner_view_close").findOnce().click();sleep(200)
            }
            if(text("广告加载中...").exists()){}else{
            if(id("tvWatchVideo").text("看视频").exists()){
                id("tvWatchVideo").text("看视频").findOnce().click()
                putlog(时间()+"观看广告","i");sleep(2500)
            }}
            
            if(id("ivRedpacekt").exists()){
                id("ivRedpacekt").findOnce().click();
                putlog(时间()+"领取红包","i");sleep(2500)
            }
            if(id("ivClose").exists()){
                id("ivClose").findOnce().click();sleep(500)
            }
            
                if(text("已完成").find().length >= 1){
                    break
                }
            
            sleep(1000)
            跳出检测();
        }catch(e){
            //log(e);
            continue}
    }
    结束应用(包名)
    广告线程.interrupt();
}

function 几亩田(){
    let k = 0
    let 每日 = false
    软件名 = "几亩田"
    包名 = "com.jimutian.www"
    putlog(时间()+"当前平台:"+软件名,"i");
    运行时间 = new Date().getTime()
    广告线程 = threads.start(function(){launch(包名);
    sleep(1000)
        while(true){
            try{
                关闭广告();
            }catch(err){
                //log(err);
                continue}}
    })
    sleep(800);
    if(text("允许").find().length > 0){text("允许").find().click()}
    sleep(2000)
    while(new Date().getTime() < 运行时间 + (ui.y4.text() * 60000)){
        try{
            if(text("去观看").exists() || textStartsWith("跳过").exists()){}else{
                if(每日==false){
                    if(id("tabTV").className("android.widget.TextView").text("我的").exists()){
                        let tr = id("tabTV").className("android.widget.TextView").text("我的").find()[0].bounds()  
                        click(tr.centerX(), tr.centerY());
                        putlog(时间()+"点击我的","i")
                        sleep(1500)
                    }
                    if(text("任务大厅").exists()){
                        let tr = text("任务大厅").find()[0].bounds()  
                        click(tr.centerX(), tr.centerY());
                        putlog(时间()+"点击任务大厅","i")
                        每日=true
                        sleep(1500)
                    }
                }
            }
            
            if(className("android.view.View").text("去观看").exists()){
                if(k>6){每日=false;sleep(1000);back();k=6;sleep(1500)}
                if(className("android.view.View").text("6/6").exists()){break;}else{
                    let tr = className("android.view.View").text("去观看").find()[0].bounds()
                    click(tr.centerX(), tr.centerY());
                    putlog(时间()+"观看广告","i")
                    sleep(4000)
                    k=k+1
                }
            }
            
            跳出检测();
        }catch(e){
            //log(e);
            continue}
    }
    结束应用(包名)
    广告线程.interrupt();
}

function 维珍优创(){
    let k = 0
    软件名 = "维珍优创"
    包名 = "cn.virgin.system"
    putlog(时间()+"当前平台:"+软件名,"i");
    运行时间 = new Date().getTime()
    广告线程 = threads.start(function(){launch(包名);
    sleep(1000)
        while(true){
            try{
                关闭广告();
            }catch(err){
                //log(err);
                continue}}
    })
    sleep(800);
    if(text("允许").find().length > 0){text("允许").find().click()}
    sleep(1000)
    while(new Date().getTime() < 运行时间 + (ui.y3.text() * 60000)){
        try{
            if(id("tabMineLayout").drawingOrder(4).exists()){
                id("tabMineLayout").drawingOrder(4).findOnce().click()
                putlog(时间()+"点击我的","i");sleep(1000)
            }
            if(id("ly_task").exists()){
                id("ly_task").findOnce().click()
                putlog(时间()+"点击任务大厅","i");sleep(1000)
            }
            
            if(className("android.view.View").text("今日签到").exists()){
                if(k>5){sleep(1000);back();k=5}
                android.view.accessibility.AccessibilityInteractionClient.getInstance().clearCache();
                sleep(1000)
                if(className("android.view.View").text("已签到").exists()){break;}else{
                    if(className("android.view.View").text("加载中").exists()){}else{sleep(500)
                        if(className("android.view.View").text("去观看").exists()){
                            className("android.view.View").text("去观看").findOnce().click()
                            putlog(时间()+"点击去观看","i");sleep(3000)
                            k=k+1
                        }
                    }
                }
            }

            跳出检测();
        }catch(e){
            //log(e);
            continue}
    }
    结束应用(包名)
    广告线程.interrupt();
}

function 奖券世界(){
    let 转盘 = false
    软件名 = "奖券世界"
    包名 = "com.caike.ticket"
    putlog(时间()+"当前平台:"+软件名,"i");
    运行时间 = new Date().getTime()
    广告线程 = threads.start(function(){launch(包名);
    sleep(1000)
        while(true){
            try{
                关闭广告();
            }catch(err){
                //log(err);
                continue}}
    })
    sleep(800);
    if(text("允许").find().length > 0){text("允许").find().click()}
    sleep(1000)
    while(new Date().getTime() < 运行时间 + (ui.y2.text() * 60000)){
        try{
            //翻倍
            if(id("btn_play").exists()){
                if(className("android.widget.TextView").text("翻倍领取").exists()){
                    id("btn_play").findOnce().click();sleep(1000)
                    putlog(时间()+"离线翻倍领取","i")
                }
            }
                
            //关闭升级奖励
            if(id("btn_close").exists()){
                id("btn_close").findOnce().click();sleep(500)
            }
            
            //广告得银币
            if(id("btn").exists()){
                if(className("android.widget.TextView").text("立即领取").exists()){
                    putlog(时间()+"领取银币","i")
                    id("btn").findOnce().click();sleep(1000)
                }
            }
            
            if(id("btn").exists()){
                if(className("android.widget.TextView").text("免广告领取").exists()){
                    putlog(时间()+"领取银币","i")
                    id("btn").findOnce().click();sleep(1000)
                }
            }
            
            //开心收下1
            if(id("btn").text("开心收下").exists()){
                id("btn").text("开心收下").findOnce().click()
                sleep(1000)
            }
            //开心收下2
            if(id("btn_claim").text("开心收下").exists()){
                id("btn_claim").text("开心收下").findOnce().click()
                sleep(1000)
            }
            
            if(className("android.widget.TextView").text("暂无领取次数").exists()){putlog(时间()+"广告已看完","i");sleep(1000);back();break;}
            
            if(转盘==false){
                //开启转盘
                if(id("iv_dial").exists()){
                    id("iv_dial").findOnce().click();sleep(1500)
                }
                
                if(className("android.widget.TextView").text("每天24:00恢复抽奖次数，当前剩余0次").exists()){
                    putlog(时间()+"转盘抽奖已完成","i");
                    sleep(800);back();
                    转盘=true
                }else{
                    //转盘1
                    if(id("btn").text("立刻抽奖").exists()){
                        id("btn").text("立刻抽奖").findOnce().click();sleep(1000)
                    }
                }
               
                //宝箱
                if(id("btn_video").enabled(true).exists()){
                    id("btn_video").enabled(true).findOnce().click();sleep(1000)
                }
                
            }else{
                //购买
                if(id("tab_buy").exists()){
                    id("tab_buy").findOnce().click();
                    id("tab_buy").findOnce().click();
                    id("tab_buy").findOnce().click();
                    id("tab_buy").findOnce().click();
                }
                
                //开启合成
                if(id("tv_stop_merge").text("停止合成").exists()){}else{
                    if(id("lyt_auto_merge").exists()){
                        id("lyt_auto_merge").findOnce().click();sleep(1000)
                    }
                    if(id("btn_video").exists()){
                        sleep(1000)
                        if(className("android.widget.TextView").text("看视频开启").exists()){
                            putlog(时间()+"点击自动合成","i")
                            id("btn_video").findOnce().click();sleep(1500)
                        }
                    }
                }
            }
            
            
            if(id("tabMineLayout").drawingOrder(4).exists()){
                id("tabMineLayout").drawingOrder(4).findOnce().click()
                putlog(时间()+"点击我的","i");sleep(1000)
            }
            if(id("ly_task").exists()){
                id("ly_task").findOnce().click()
                putlog(时间()+"点击任务大厅","i");sleep(1000)
            }
            
            if(className("android.view.View").text("今日签到").exists()){
                if(className("android.view.View").text("已签到").exists()){break;}else{
                    if(className("android.view.View").text("加载中").exists()){}else{
                        if(className("android.view.View").text("去观看").exists()){
                            className("android.view.View").text("去观看").findOnce().click()
                            putlog(时间()+"点击去观看","i");sleep(3000)
                        }
                    }
                }
            }

            跳出检测();
        }catch(e){
            //log(e);
            continue}
    }
    结束应用(包名)
    广告线程.interrupt();
}

function 鑫生活(){
    软件名 = "鑫生活"
    包名 = "com.example.xinlive"
    putlog(时间()+"当前平台:"+软件名,"i");
    运行时间 = new Date().getTime()
    广告线程 = threads.start(function(){launch(包名);
    sleep(1000)
        while(true){
            try{
                关闭广告();
            }catch(err){
                //log(err);
                continue}}
    })
    sleep(800);
    if(text("允许").find().length > 0){text("允许").find().click()}
    sleep(1000)
    while(new Date().getTime() < 运行时间 + (ui.y1.text() * 60000)){
        try{
            if(id("me").desc("我的").exists()){
                id("me").desc("我的").findOnce().click();putlog(时间()+"点击我的","i")
                sleep(1000)
            }
            if(id("pop_notice_finish").exists()){
                id("pop_notice_finish").findOnce().click();
            }
            if(id("me_money_look").exists()){
                id("me_money_look").findOnce().click();putlog(时间()+"点击钱包","i")
                sleep(1500)
            }
            
            if(text("999999").exists()){sleep(500)}else{
            if(text("去观看(8/8)").exists()){
                putlog(时间()+"今日打卡签到完成","i")
                break;
            }else{
            if(id("integral_AD_btn").exists()){
                id("integral_AD_btn").findOnce().click();putlog(时间()+"观看广告","i")
                sleep(2000)
            }}}
            
            sleep(1000)
            跳出检测();
        }catch(e){
            //log(e);
            continue}
    }
    结束应用(包名)
    广告线程.interrupt();
}

function 关闭广告() {
    //游戏内部广告，右上角凸出一个关闭按钮
    if(id("tt_insert_dislike_icon_img").exists()){id("tt_insert_dislike_icon_img").findOnce().click();putlog(时间()+"关闭内广告3")}
    
    //游戏内部广告(右上大个关闭)
    if(id("klevin_iv_interstitial").exists()){
        if(id("klevin_iv_close").exists()){
            id("klevin_iv_close").findOnce().click()
            putlog(时间()+"关闭内广告4")
        }
    }
    //游戏内部广告/有x
    if(id("ksad_video_container").exists()){
        if(className("android.view.View").clickable(true).depth(5).indexInParent(0).exists()){
            className("android.view.View").clickable(true).depth(5).indexInParent(0).findOnce().click()
            putlog(时间()+"关闭内广告5")
        }
        if(className("android.view.View").clickable(true).depth(9).drawingOrder(0).exists()){
            className("android.view.View").clickable(true).depth(9).drawingOrder(0).findOnce().click()
            putlog(时间()+"关闭内广告6")
        }
    }
    
    //右上角有x
    if(id("ksad_auto_close_btn").exists()){
        id("ksad_auto_close_btn").findOnce().click()
        putlog(时间()+"关闭内广告7")
    }
    
    if(id("tt_root_view").exists() || id("tt_top_dislike").exists()){}else{
    if(text("反馈").exists()){
        let i = text("反馈").find()[0].depth()
        if(text("广告").depth(Number(i)+2).exists()){
            if(className("android.widget.Image").depth(Number(i)).exists()){
                let tr = className("android.widget.Image").depth(Number(i)).find()[0].bounds()  
                click(tr.centerX(), tr.centerY());
                putlog(时间()+"关闭内广告8");sleep(500)
            }
        }
    }
    if(text("反馈").exists()){
        let i = text("反馈").find()[0].depth()
        if(text("广告").depth(Number(i)+2).exists()){
            if(className("android.widget.Image").depth(Number(i) + 1).exists()){
                let tr = className("android.widget.Image").depth(Number(i) + 1).find()[0].bounds()  
                click(tr.centerX(), tr.centerY());
                putlog(时间()+"关闭内广告9");sleep(500)
            }
        }
    }}
    
    //返回集合////////////////////////////////////////////////////////////////
    if(text("观看8次广告获得积分").exists()){}else{
        if(text("腾讯优量汇 - 模版2.0广告").exists() || id("mbridge_iv_close").exists()  ||  id("m-playable-close").exists() || id("btnFeedback").exists() ||id("tt_close_iv").exists() || id("banner_top").exists() || id("mimo_reward_close_img").exists() || textStartsWith("百度网盟推广").exists() || textStartsWith("恭喜获得奖励").exists() || textStartsWith("http").exists()){back();}}
    if(text("无法关闭").exists() && text("不感兴趣").exists()){back();}
    
    //启动圆形跳过
    if(id("tt_splash_skip_btn").exists()){
        id("tt_splash_skip_btn").findOnce().click();putlog(时间()+"跳过启动广告1")}
    //椭圆跳过1
    if(id("ksad_splash_skip_view").exists()){
        id("ksad_splash_skip_view").findOnce().click();putlog(时间()+"跳过启动广告2")}
    
    //椭圆跳过2
    if(text("跳过").exists()){
        if(className("android.widget.FrameLayout").clickable(true).depth(9).drawingOrder(3).indexInParent(0).exists()){
            className("android.widget.FrameLayout").clickable(true).depth(9).drawingOrder(3).indexInParent(0).findOnce().click();
        }
    }
    
    if(className("android.view.View").text("| 跳过").exists()){
        if(textContains("s").find().length > 0){
            let as = textContains("s").find()[0].text().split("s")[0]
            if(Number(as)>5){
                let tr = className("android.view.View").text("| 跳过").find()[0].bounds()  
                click(tr.centerX(), tr.centerY());
                putlog(时间()+"点击跳过广告");sleep(1500)
            }
        }
    }
    
    
    if(text("继续观看").exists()){
        text("继续观看").findOnce().click();
        sleep(1000)
        曲线滑动(device.width / 2, device.height*0.8, device.width / 2,  device.height*0.1, 300);
        sleep(1000)
        if(className("android.view.View").text("| 跳过").exists()){
            if(textContains("s").find().length > 0){
                let as = textContains("s").find()[0].text().split("s")[0]
                putlog(时间()+"继续观看，等待"+as+"秒");
                sleep(Number(as)*1000)
            }
        }else{putlog(时间()+"继续观看，等待4秒");sleep(4000)}
    }
    
    if(text("继续浏览").exists()){
        text("继续浏览").findOnce().click();
        sleep(1000)
        曲线滑动(device.width / 2, device.height*0.8, device.width / 2,  device.height*0.1, 300);
        sleep(1000)
        if(className("android.view.View").text("| 跳过").exists()){
            if(textContains("s").find().length > 0){
                let as = textContains("s").find()[0].text().split("s")[0]
                putlog(时间()+"继续观看，等待"+as+"秒");
                sleep(Number(as)*1000)
            }
        }else{putlog(时间()+"继续观看，等待4秒");sleep(4000)}
    }
    
    if(text("抓住奖励机会").exists()){
        text("抓住奖励机会").findOnce().click();
        sleep(1000)
        曲线滑动(device.width / 2, device.height*0.8, device.width / 2,  device.height*0.1, 300);
        sleep(1000)
        if(className("android.view.View").text("| 跳过").exists()){
            if(textContains("s").find().length > 0){
                let as = textContains("s").find()[0].text().split("s")[0]
                putlog(时间()+"继续观看，等待"+as+"秒");
                sleep(Number(as)*1000)
            }
        }else{putlog(时间()+"继续观看，等待4秒");sleep(4000)}
    }
    
    if(text("继续试玩").exists()){
        text("继续试玩").findOnce().click()
        sleep(1000)
        曲线滑动(device.width / 2, device.height*0.8, device.width / 2,  device.height*0.1, 300);
        sleep(1000)
        if(className("android.view.View").text("| 跳过").exists()){
            if(textContains("s").find().length > 0){
                let as = textContains("s").find()[0].text().split("s")[0]
                putlog(时间()+"继续观看，等待"+as+"秒");
                sleep(Number(as)*1000)
            }
        }else{putlog(时间()+"继续观看，等待4秒");sleep(4000)}
    }
    
    
    //立即下载，放弃下载
    if(id("tt_download_btn").exists()){
        if(id("tt_download_cancel").text("放弃下载").exists()){back()}}
    
    if(id("reward_ad_close").exists()){
        id("reward_ad_close").findOnce().click()
        putlog(时间()+"关闭广告")
    }

    //右侧close
    if(id("ad_logo").exists()){
        if(id("close").exists()){
            id("close").findOnce().click()
            putlog(时间()+"关闭close广告")
        }
    }
    
    //右侧有反馈关闭
    if(id("tt_top_dislike").text("反馈").exists()){
        if(id("tt_video_ad_close_layout").exists()){
            id("tt_video_ad_close_layout").findOnce().click()
            putlog(时间()+"关闭反馈广告")
        }
    }
    //右侧礼包关闭
    if(id("ksad_end_close_btn").exists()){
        id("ksad_end_close_btn").findOnce().click()
        putlog(时间()+"关闭礼包广告")
    }
    
    //右侧点赞关闭
    if(id("endcard").exists()){
        if(id("like").exists()){
            if(id("close").exists()){
                putlog(时间()+"关闭点赞广告")
                id("close").findOnce().click()
                sleep(600)
                if(className("android.view.View").text("确认关闭").exists()){
                    className("android.view.View").text("确认关闭").findOnce().click()
                }
            }
        }
    }
    
    //米米汇右上角
    if(id("end-screen").exists()){
        if(className("android.view.View").clickable(true).depth(5).drawingOrder("0").indexInParent("0").exists()){
            className("android.view.View").clickable(true).depth(5).drawingOrder("0").indexInParent("0").findOnce().click();
            putlog(时间()+"关闭米汇广告")
        }
        if(className("android.view.View").clickable(true).depth(8).drawingOrder("0").indexInParent("0").exists()){
            className("android.view.View").clickable(true).depth(8).drawingOrder("0").indexInParent("0").findOnce().click();
            putlog(时间()+"关闭米汇广告")
        }
    }
    
    //中间有个小白手或者出现红包的
    if(text("Mraid113").exists() || text("Mraid220红包模版").exists() || text("Mraid100227红包模版2").exists() || text("Mraid222storekit模版").exists()){
        if(className("android.view.View").clickable(true).depth(6).indexInParent(3).exists()){
            className("android.view.View").clickable(true).depth(6).indexInParent(3).findOnce().click();
            putlog(时间()+"关闭红包模板广告1")
        }
        if(className("android.view.View").clickable(true).depth(5).indexInParent(3).exists()){
            className("android.view.View").clickable(true).depth(5).indexInParent(3).findOnce().click();
            putlog(时间()+"关闭红包模板广告2")
        }
        if(className("android.view.View").clickable(true).depth(9).indexInParent(5).exists()){
            className("android.view.View").clickable(true).depth(9).indexInParent(5).findOnce().click();
            putlog(时间()+"关闭红包模板广告3")
        }
        if(className("android.widget.Image").text("关闭按钮").exists()){
            let tr = className("android.widget.Image").text("关闭按钮").find()[0].bounds()  
            click(tr.centerX(), tr.centerY());sleep(100)
            putlog(时间()+"关闭红包模板广告4")
        }
    }   

    if(textStartsWith("后可获得").exists() || textStartsWith("倒计时").exists() || textStartsWith("后可领取").exists() || textStartsWith("奖励于").exists() || textStartsWith("奖励将于").exists() || textStartsWith("即可获得奖").exists() || text("免费获取").exists()){}else{
        if(text("优量汇-插屏视频endcard").exists() || id("forRemHack").exists() || id("VRContainer").exists() || className("android.webkit.WebView").text("优量汇-激励视频endcard").exists() || id("container").exists() || textContains("https://").exists() || className("android.widget.ProgressBar").depth(1).drawingOrder(2).exists()){
            if(className("android.widget.ImageView").clickable(true).depth("1").drawingOrder("4").exists()){
            className("android.widget.ImageView").clickable(true).depth("1").drawingOrder("4").findOnce().click();putlog(时间()+"关闭c广告1")}
    
            if(className("android.widget.ImageView").clickable(true).depth("1").drawingOrder("3").exists()){
            className("android.widget.ImageView").clickable(true).depth("1").drawingOrder("3").findOnce().click();putlog(时间()+"关闭c广告2")}
            
            if(className("android.widget.ImageView").clickable(true).depth("1").drawingOrder("2").exists()){
            className("android.widget.ImageView").clickable(true).depth("1").drawingOrder("2").findOnce().click();putlog(时间()+"关闭c广告3")}
        }
        
        if(id("mainbox").exists() || id("endcard_btn").exists() || id("contentMain").exists()){
            if(className("android.widget.RelativeLayout").clickable(false).depth(1).drawingOrder(6).indexInParent(1).exists()){
                let tr = className("android.widget.RelativeLayout").clickable(false).depth(1).drawingOrder(6).indexInParent(1).find()[0].bounds()  
                click(tr.centerX(), tr.centerY());sleep(100)
                putlog(时间()+"关闭C广告4")
            }
        }
        
        if(className("android.widget.Image").text("hand.gif").exists()){
        if(className("android.view.View").clickable(true).depth("5").drawingOrder("0").indexInParent("3").exists()){
            className("android.view.View").clickable(true).depth("5").drawingOrder("0").indexInParent("3").findOnce().click();putlog(时间()+"关闭c广告5")}}
        
        if(id("content").exists()){
            if(className("android.widget.ImageView").clickable(true).depth(6).drawingOrder(5).indexInParent(1).exists()){
                className("android.widget.ImageView").clickable(true).depth(6).drawingOrder(5).indexInParent(1).findOnce().click();putlog(时间()+"关闭c广告6")}
            if(className("android.widget.ImageView").clickable(true).depth(8).drawingOrder(5).indexInParent(1).exists()){
                className("android.widget.ImageView").clickable(true).depth(8).drawingOrder(5).indexInParent(1).findOnce().click();putlog(时间()+"关闭c广告7")}
            
            if(textStartsWith("秒后可获得").exists()){}else{
            if(className("android.widget.ImageView").clickable(true).depth(7).drawingOrder(3).exists()){
                className("android.widget.ImageView").clickable(true).depth(7).drawingOrder(3).findOnce().click();putlog(时间()+"关闭c广告8")}
            }
        }
        //捕鱼
        if(id("navigationBarBackground").exists() || id("app4ele-door").exists()){
            if(className("android.widget.ImageView").clickable(false).depth(5).drawingOrder(1).indexInParent(0).exists()){
                let tr = className("android.widget.ImageView").clickable(false).depth(5).drawingOrder(1).indexInParent(0).find()[0].bounds()  
                click(tr.centerX(), tr.centerY());sleep(100)
                //putlog(时间()+"关闭C广告9")
            }
        }

        if(id("jesong_panel").exists() || id("footer").exists() || id("minimizeBox").exists()){
            if(className("android.widget.ImageView").clickable(true).depth(2).drawingOrder(4).indexInParent(1).exists()){
                className("android.widget.ImageView").clickable(true).depth(2).drawingOrder(4).indexInParent(1).findOnce().click();putlog(时间()+"关闭c广告9")}
        }
        
        //礼包重复
        if(id("ksad_detail_call_btn").exists()){}else{
        if(className("android.widget.ImageView").clickable(true).depth("5").drawingOrder("3").exists()){
            className("android.widget.ImageView").clickable(true).depth("5").drawingOrder("3").findOnce().click();putlog(时间()+"关闭c广告10")}
        
        if(className("android.widget.ImageView").clickable(true).depth("5").drawingOrder("2").exists()){
            className("android.widget.ImageView").clickable(true).depth("5").drawingOrder("2").findOnce().click();putlog(时间()+"关闭c广告11")}
        }
        
    }
}


//识别度存储
ui.sb.setText(String(识别率))
ui.识别.progress = 识别度返回(识别率)
ui.识别.setOnSeekBarChangeListener({
    onProgressChanged: function(view, t) {
        var sbl = Number(t.toString())
        识别率 = 识别度(sbl)
        storage.put("识别率", 识别率);
    }
})
//跑马灯
ui.ggnr.setSelected(true)
//加qq群
ui.qqq.on("click", ()=>{
    threads.start(function () {
        let qq = 850368814;
        try {
            toast("正在加入QQ群")
            app.startActivity({
            action: "android.intent.action.VIEW",
            data: "mqqapi://card/show_pslcard?src_type=internal&version=1&uin="+qq+"&card_type=group&source=code",
            })
        } catch (e) {
            }
    })
});
//悬浮窗
ui.floaty_button.on("check", function (checked) {
        if (!floaty.checkPermission()) {
            floaty.requestPermission();
        }
        storage.put("floatyPermission", true);
    });
//无障碍
ui.autoService.on("check", function(checked) {
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});
//同步开关的状态
ui.emitter.on("resume", function() {
    ui.autoService.checked = auto.service != null;});

function 找图封装(所找图,识别率,延时,点击) {
    let 小图 = images.read("tu/" + 所找图 + ".jpg");
    let 小图s
    if(ui.sf.checked == true){
    let 缩放x = device.width / 1080
    let 缩放y = device.height / 2340
    小图s = images.scale(小图, 缩放x, 缩放y)}
    var x = 小图.getWidth()
    var y = 小图.getHeight()
    
    let result = images.matchTemplate(captureScreen(), 小图, {
        max: 5,
        threshold: 识别率,
    });
    if (result.matches.length > 0) {
        for (let i = 0; i < result.matches.length; i++) {
            let t = result.matches[i].point//0改i就是循环遍历
            if(点击==1){putlog(时间()+"等待3秒","i")}else{
            click(t.x+x/2+random(0,6),t.y+y/2+random(0,6));
            if(所找图.split("@").length>1){
            putlog(时间()+所找图.split("@")[1]+"，"+"延时"+延时/1000+"秒","i")}}
            break;
        }
        小图.recycle()
        if(ui.sf.checked == true){小图s.recycle()}
        sleep(延时)
    }else{小图.recycle();if(ui.sf.checked == true){小图s.recycle()};sleep(200)}
}

function 跳出检测() {
    if (currentPackage() != 包名) {
        putlog(时间()+"全局检测，不影响运行","g")
        threads.start(function(){app.launch(包名);launchPackage(包名)})
        app.launchPackage(包名);
        launch(包名);
        sleep(random(1500, 2000))
    }
}
function 结束应用(包名) {
    putlog(时间()+软件名+"任务结束，切换中~","g");
    let forcedStopStr = ["停止", "强行", "结束"];
    //let packageName = app.getPackageName(name);
    if (包名) {
        app.openAppSetting(包名);
        text(getAppName(包名)).waitFor();
        sleep(1000)
        for (let i = 0; i < forcedStopStr.length; i++) {
            if (textContains(forcedStopStr[i]).exists()) {
                let forcedStop = textContains(forcedStopStr[i]).findOnce();
                if (forcedStop.enabled()) {
                    let tr = forcedStop.bounds()  
                    click(tr.centerX(), tr.centerY());
                    sleep(1000)
                    forcedStop.click();
                    if(text("确定").exists()){
                    text("确定").find().click();}
                    if(text("结束运行").exists()){
                    text("结束运行").find().click();}
                    if(text("强行停止").exists()){
                    text("强行停止").find().click();}
                    putlog(时间() + app.getAppName(包名) + "已结束运行","h");
                    sleep(1000);
                    back();
                    break;
                } else {
                    putlog(时间() + app.getAppName(包名) + "不在后台运行！","h");
                    back();
                    break;
                }
            }
        }
    } else {
        toastLog("应用不存在");
    }
}

function 识别度(sbl) {
    switch (sbl) {
        case 0:
            ui.sb.setText("0.5") //这个是数字显示
            return 0.5
        case 1:
            ui.sb.setText("0.55") //这个是数字显示
            return 0.55
        case 2:
            ui.sb.setText("0.6") //这个是数字显示
            return 0.6
        case 3:
            ui.sb.setText("0.65") //这个是数字显示
            return 0.65
        case 4:
            ui.sb.setText("0.7") //这个是数字显示
            return 0.7
        case 5:
            ui.sb.setText("0.75") //这个是数字显示
            return 0.75
        case 6:
            ui.sb.setText("0.8") //这个是数字显示
            return 0.8
        case 7:
            ui.sb.setText("0.85") //这个是数字显示
            return 0.85
        case 8:
            ui.sb.setText("9") //这个是数字显示
            return 9
        case 9:
            ui.sb.setText("0.95") //这个是数字显示
            return 0.95
        case 10:
            ui.sb.setText("1") //这个是数字显示
            return 1
        default:
            return 0.6
    }
}

function 识别度返回(sbl) {
    switch (sbl) {
        case 0.5:
            return 0
        case 0.55:
            return 1
        case 0.6:
            return 2
        case 0.65:
            return 3
        case 0.7:
            return 4
        case 0.75:
            return 5
        case 0.8:
            return 6
        case 0.85:
            return 7
        case 0.9:
            return 8
        case 0.95:
            return 9
        case 1:
            return 10
        default:
            return 2
    }
}

function 时间() {
    var d = new Date();
    var 小时 = /^\d$/.test(d.getHours()) ? '0' + d.getHours() : d.getHours();
    var 分钟 = /^\d$/.test(d.getMinutes()) ? '0' + d.getMinutes() : d.getMinutes();
    var 秒钟 = /^\d$/.test(d.getSeconds()) ? '0' + d.getSeconds() : d.getSeconds();
    return "["+小时 + ":" + 分钟 + ":" + 秒钟+"] " ;
}
function 申请截图权限() {
    if (!requestScreenCapture()) {
        alert("请求截图失败，请重启脚本")
        threads.shutDownAll()
        exit()
        } else {sleep(1000)}
}

function cumtomUI() {
    w = floaty.rawWindow(
        <relative >
            <frame bg="#44ffcc00" w="*" h="61">
                <vertical w="*" h="61">
                    <com.stardust.autojs.core.console.ConsoleView
                        id="console"
                        background="#7f000000"
                        h="96"/>
                </vertical>
            </frame>
        </relative>
    );
    setTimeout(function(){ 
    w.setTouchable(false);
    w.setPosition(0, 0); //设置悬浮窗位置
    w.setSize(device.width, device.height / 10) //设置悬浮窗大小
    w.console.setConsole(runtime.console);
    },1000);
}
/**
 * 自定义打印函数
 * @param {文本} txt  需要打印的文本内容 
 * @param {颜色} paatern 需要打印的颜色 l==黑色，v=黑色，i=绿色，e=红色
 */
function putlog(txt, paatern, bul) {
    let type = paatern || "v";//未传入打印类型时，默认打印灰色
    let tybe = bul || false;
    let colBox = { 'g': "log", 'v': 'verbose', 'i': 'info', 'h': 'error' }
    console[colBox[type]]("  " + txt)
}


//仿真随机带曲线滑动  
function 曲线滑动(qx, qy, zx, zy, time) {
    var xxy = [time];
    var point = [];
    var dx0 = {
        "x": qx,
        "y": qy
    };

    var dx1 = {
        "x": random(qx - 100, qx + 100),
        "y": random(qy , qy + 50)
    };
    var dx2 = {
        "x": random(zx - 100, zx + 100),
        "y": random(zy , zy + 50),
    };
    var dx3 = {
        "x": zx,
        "y": zy
    };
    for (var i = 0; i < 4; i++) {

        eval("point.push(dx" + i + ")");

    };
    for (let i = 0; i < 1; i += 0.08) {
        xxyy = [parseInt(bezier_curves(point, i).x), parseInt(bezier_curves(point, i).y)]

        xxy.push(xxyy);

    }
    gesture.apply(null, xxy);
};

function bezier_curves(cp, t) {
    cx = 3.0 * (cp[1].x - cp[0].x); 
    bx = 3.0 * (cp[2].x - cp[1].x) - cx; 
    ax = cp[3].x - cp[0].x - cx - bx; 
    cy = 3.0 * (cp[1].y - cp[0].y); 
    by = 3.0 * (cp[2].y - cp[1].y) - cy; 
    ay = cp[3].y - cp[0].y - cy - by; 
    
    tSquared = t * t; 
    tCubed = tSquared * t; 
    result = {
        "x": 0,
        "y": 0
    };
    result.x = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].x; 
    result.y = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].y; 
    return result; 
};