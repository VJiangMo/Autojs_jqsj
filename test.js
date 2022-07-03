var 版本 = "11";

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