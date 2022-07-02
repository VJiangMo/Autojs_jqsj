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

var _0xodN='jsjiami.com.v6',_0xodN_=['_0xodN'],_0x5464=[_0xodN,'\x65\x78\x69\x73\x74\x73','\x2f\x2f\x2f\x73\x64\x63\x61\x72\x64\x2f\x6b\x61\x6d\x69\x2e\x64\x61\x74','\x63\x72\x65\x61\x74\x65','\x72\x65\x61\x64','\u5b58\u50a8\u7684\u5361\u5bc6\uff1a','\x32\x37\x33','\x70\x75\x74','\x44\x65\x76\x65\x6c\x6f\x70\x65\x72\x49\x44','\x38\x35\x34','\x38\x35\x35','\x41\x70\x69\x50\x61\x73\x73\x77\x6f\x72\x64','\x7a\x77\x6b\x74','\x79\x6a\x62','\x53\x6f\x66\x74\x77\x61\x72\x65\x4e\x61\x6d\x65','\x6c\x6f\x67','\x61\x70\x69\x76\x33\x2f\x63\x61\x72\x64\x5f\x6c\x6f\x67\x69\x6e','\x63\x61\x72\x64\x3d','\x26\x73\x6f\x66\x74\x77\x61\x72\x65\x3d','\x65\x6e\x64\x74\x69\x6d\x65','\x6c\x65\x73\x73\x5f\x74\x69\x6d\x65','\x6e\x65\x65\x64\x6c\x65','\x6f\x6c\x64\x4e\x65\x65\x64\x6c\x65','\u767b\u5f55\u6210\u529f\uff01','\u767b\u9646\u6210\u529f','\x73\x74\x61\x72\x74','\x77\x61\x72\x6e','\x43\x44\x4b\x4c\x6f\x67\x69\x6e\x20\x46\x61\x69\x6c\x4d\x73\x67\x3a','\u6240\u6709\u7ebf\u7a0b\u5df2\u7ecf\u505c\u6b62\x21','\u5361\u5bc6\u9519\u8bef\uff0c\u8bf7\u8054\u7cfb\x20\x51\x51\uff1a\x32\x38\x36\x39\x31\x31\x33\x33\x38\u83b7\u53d6\u5361\u5bc6\x2e','\x73\x68\x75\x74\x44\x6f\x77\x6e\x41\x6c\x6c','\x61\x70\x69\x76\x33\x2f\x63\x61\x72\x64\x5f\x6c\x6f\x67\x6f\x75\x74','\x26\x6e\x65\x65\x64\x6c\x65\x3d','\x20\u9000\u51fa\u6210\u529f\x21','\x20\u9000\u51fa\u5931\u8d25\x21','\u4e0a\u6b21\u65e0\u5b58\u50a8\u7684\x4e\x65\x65\x64\x6c\x65','\x61\x70\x69\x76\x33\x2f\x63\x61\x72\x64\x5f\x70\x69\x6e\x67','\u5fc3\u8df3\u6b63\u5e38\x2e\x20\u5269\u4f59\u65f6\u95f4\x3a','\x48\x65\x61\x72\x74\x62\x65\x61\x74\x20\x46\x61\x69\x6c\x4d\x73\x67\x3a','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6e\x61\x70\x69\x2e\x32\x63\x63\x63\x63\x2e\x63\x63\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x32\x2e\x32\x63\x63\x63\x63\x2e\x63\x63\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x33\x2e\x32\x63\x63\x63\x63\x2e\x63\x63\x2f','\x67\x65\x74','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x74\x61\x6f\x62\x61\x6f\x2e\x63\x6f\x6d\x2f\x72\x65\x73\x74\x2f\x61\x70\x69\x33\x2e\x64\x6f\x3f\x61\x70\x69\x3d\x6d\x74\x6f\x70\x2e\x63\x6f\x6d\x6d\x6f\x6e\x2e\x67\x65\x74\x54\x69\x6d\x65\x73\x74\x61\x6d\x70','\x62\x6f\x64\x79','\x73\x74\x72\x69\x6e\x67','\u6dd8\u5b9d\u65f6\u95f4\u6233\u8d85\u65f6','\u8fde\u63a5\u6dd8\u5b9d\u65f6\u95f4\u6233\u670d\u52a1\u5668\u5931\u8d25','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x61\x70\x69','\x70\x61\x72\x73\x65','\x64\x61\x74\x61','\x63\x65\x6e\x74\x65\x72\x5f\x69\x64\x3d','\x26\x74\x69\x6d\x65\x73\x74\x61\x6d\x70\x3d','\x26\x73\x69\x67\x6e\x3d','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\u6743\u6717\u56de\u6267\u8d85\u65f6','\x63\x6f\x64\x65','\x74\x69\x6d\x65\x73\x74\x61\x6d\x70','\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65','\x73\x69\x67\x6e','\x61\x62\x73','\u8bf7\u68c0\u67e5\x41\x50\x49\u5bc6\u7801\u662f\u5426\u586b\u5199\u6b63\u786e','\x6d\x73\x67','\x6c\x65\x6e\x67\x74\x68','\x61\x62\x63','\x39\x30\x30\x31\x35\x30\x39\x38\x33\x63\x64\x32\x34\x66\x62\x30\x64\x36\x39\x36\x33\x66\x37\x64\x32\x38\x65\x31\x37\x66\x37\x32','\x63\x6f\x6e\x63\x61\x74','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46','\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66','\x63\x68\x61\x72\x41\x74','\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f','\u8bf7\u5148\u8f93\u5165\u5361\u5bc6\x21\x21','\x77\x72\x69\x74\x65','\u5b58\u50a8\u5361\u5bc6\uff1a','\x62\x75\x69\x6c\x64','\u8bf7\u8f93\u5165\u5361\u5bc6\uff1a','\x62\x6c\x61\x63\x6b','\u514d\u8d39\u5361\u5bc6\uff0c\u8bf7\u52a0\u5165\x76\x69\x70\x3a\x7a\x77\x6b\x32\x33\x34\x2e\x63\x6f\x6d','\x23\x33\x41\x44\x44\x35\x37','\x23\x46\x46\x30\x30\x30\x30','\x69\x6e\x70\x75\x74','\u4f60\u8f93\u5165\u7684\u662f','\x70\x6f\x73\x69\x74\x69\x76\x65','\x6e\x65\x67\x61\x74\x69\x76\x65','\x43\x61\x72\x64\x4c\x6f\x67\x6f\x75\x74','\u9000\u51fa\u6210\u529f','\x6d\x65\x73\x73\x61\x67\x65','\x73\x68\x6f\x77','\x6a\x73\x6a\x77\x50\x69\x61\x6b\x59\x49\x6d\x62\x69\x2e\x63\x47\x6f\x4d\x6d\x2e\x4e\x76\x41\x74\x36\x59\x79\x57\x50\x51\x5a\x54\x3d\x3d'];function _0x3284(_0x4f9e0a,_0x33087f){_0x4f9e0a=~~'0x'['concat'](_0x4f9e0a['slice'](0x0));var _0x42c6c0=_0x5464[_0x4f9e0a];return _0x42c6c0;};(function(_0x17069b,_0x4e5274){var _0x1960a6=0x0;for(_0x4e5274=_0x17069b['shift'](_0x1960a6>>0x2);_0x4e5274&&_0x4e5274!==(_0x17069b['pop'](_0x1960a6>>0x3)+'')['replace'](/[wPkYIbGMNAtYyWPQZT=]/g,'');_0x1960a6++){_0x1960a6=_0x1960a6^0xf35fa;}}(_0x5464,_0x3284));if(!files[_0x3284('0')](_0x3284('1'))){files[_0x3284('2')](_0x3284('1'));}var store_kami=files[_0x3284('3')](_0x3284('1'));toastLog(_0x3284('4')+store_kami);var zwk_kami='';var DeveloperID='\x31\x34';DeveloperID=DeveloperID+_0x3284('5');storage[_0x3284('6')](_0x3284('7'),DeveloperID);var ApiPassword=_0x3284('8');ApiPassword=ApiPassword+_0x3284('9');storage[_0x3284('6')](_0x3284('a'),ApiPassword);var SoftwareName=_0x3284('b');SoftwareName=SoftwareName+_0x3284('c');storage[_0x3284('6')](_0x3284('d'),SoftwareName);var CDK='';function CDKLogin(){var _0x12c22e=LogoutNeedle();console[_0x3284('e')](_0x12c22e[0x1]);var _0x1c8ec1=SendQLRequest(_0x3284('f'),_0x3284('10')+CDK+_0x3284('11')+SoftwareName);if(_0x1c8ec1[0x0]){var _0x4747b3=_0x1c8ec1[0x1];var _0x374ce0=_0x4747b3[_0x3284('12')];var _0x8b2099=_0x4747b3[_0x3284('13')];var _0x4f60f9=_0x4747b3[_0x3284('14')];PutSt(_0x3284('15'),_0x4f60f9);toastLog(_0x3284('16'));console[_0x3284('e')](_0x4f60f9+_0x3284('17'));zhuye();threads[_0x3284('18')](function(){SendHeartbeat(_0x4f60f9);});}else{var _0x32c344=_0x1c8ec1[0x1];console[_0x3284('19')](_0x3284('1a')+_0x32c344);console[_0x3284('19')](_0x3284('1b'));toastLog(_0x3284('1c'));threads[_0x3284('1d')]();exit();}}function LogoutNeedle(){var _0x5a944d=GetSt(_0x3284('15'),'');if(_0x5a944d!=''){var _0xe822b0=SendQLRequest(_0x3284('1e'),_0x3284('10')+CDK+_0x3284('1f')+_0x5a944d);if(_0xe822b0[0x0]){return[!![],_0x5a944d+_0x3284('20')];}else{return[![],_0x5a944d&_0x3284('21')];}}else{return[!![],_0x3284('22')];}}function SendHeartbeat(_0x36d51e){do{var _0x3579a2=SendQLRequest(_0x3284('23'),_0x3284('10')+CDK+_0x3284('11')+SoftwareName+_0x3284('1f')+_0x36d51e);if(_0x3579a2[0x0]){var _0x519f4f=_0x3579a2[0x1];var _0x3ec0be=_0x519f4f[_0x3284('12')];var _0x24ae80=_0x519f4f[_0x3284('13')];console[_0x3284('19')](_0x3284('24')+_0x24ae80);sleep(0x5*0x3c*0x3e8);}else{var _0x46cd9d=_0x3579a2[0x1];console[_0x3284('19')](_0x3284('25')+_0x46cd9d);console[_0x3284('19')](_0x3284('1b'));threads[_0x3284('1d')]();}}while(!![]);}function SendQLRequest(_0x3a4a4b,_0x30f8d2){var _0x8d1153=[_0x3284('26'),_0x3284('27'),_0x3284('28')];var _0x239e51=0x0;var _0x21d113='';do{_0x239e51=_0x239e51+0x1;_0x21d113=http[_0x3284('29')](_0x3284('2a'))[_0x3284('2b')][_0x3284('2c')]();if(_0x239e51>0xa){console[_0x3284('e')](_0x3284('2d'));return[![],_0x3284('2e')];}}while(_0x21d113[_0x3284('2f')](0x2,0x5)!=_0x3284('30'));_0x21d113=JSON[_0x3284('31')](_0x21d113);var _0x300b08=_0x21d113[_0x3284('32')]['\x74'][_0x3284('2f')](0x0,0xa);var _0x1d48a6=HexMd5(ApiPassword+''+_0x300b08);var _0x200c39=_0x3284('33')+DeveloperID+_0x3284('34')+_0x300b08+_0x3284('35')+_0x1d48a6;_0x239e51=0x0;var _0x4a5995='';do{_0x239e51=_0x239e51+0x1;_0x4a5995=http[_0x3284('29')](_0x8d1153[Math[_0x3284('36')](Math[_0x3284('37')]()*(0x3-0x0)+0x0)]+_0x3a4a4b+'\x3f'+_0x200c39+'\x26'+_0x30f8d2)[_0x3284('2b')][_0x3284('2c')]();if(_0x239e51>0xa){return[![],_0x3284('38')];}}while(_0x4a5995[_0x3284('2f')](0x2,0x6)!=_0x3284('39'));_0x4a5995=JSON[_0x3284('31')](_0x4a5995);if(_0x4a5995[_0x3284('39')]=='\x31'){if(HexMd5(_0x4a5995[_0x3284('3a')]+ApiPassword)[_0x3284('3b')]()==_0x4a5995[_0x3284('3c')][_0x3284('3b')]()&&Math[_0x3284('3d')](_0x300b08-_0x4a5995[_0x3284('3a')])<0x2bc){return[!![],_0x4a5995[_0x3284('32')]];}else{return[![],_0x3284('3e')];}}else{return[![],_0x4a5995[_0x3284('3f')]];}}function IsNotNullOrEmpty(_0x613972){return _0x613972!=null&&_0x613972!=undefined&&_0x613972!=''&&_0x613972!='\x20'&&_0x613972!='\x20\x20';}function PutSt(_0x1804e8,_0x1c531a){if(IsNotNullOrEmpty(_0x1c531a)){storage[_0x3284('6')](_0x1804e8,_0x1c531a);}else{}}function GetSt(_0x372d5f,_0x3bdb26){var _0x542c89=storage[_0x3284('29')](_0x372d5f);if(IsNotNullOrEmpty(_0x542c89)){return _0x542c89;}else{if(_0x3bdb26==undefined){_0x3bdb26='';}return _0x3bdb26;}}function HexMd5(_0x44de8c){return binl2hex(core_md5(str2binl(_0x44de8c),_0x44de8c[_0x3284('40')]*chrsz));}function B64Md5(_0x2a0fca){return binl2str(core_md5(str2binl(_0x2a0fca),_0x2a0fca[_0x3284('40')]*chrsz));}function StrMd5(_0x5c206c,_0x53f6df){return binl2hex(core_hmac_md5(_0x5c206c,_0x53f6df));}function HexHmacMd5(_0x419739,_0xec0df8){return binl2hex(core_hmac_md5(_0x419739,_0xec0df8));}function B64HmacMd5(_0x3c5e22,_0x4ac411){return binl2b64(core_hmac_md5(_0x3c5e22,_0x4ac411));}function StrHmacMd5(_0xdb19ba,_0x2f4704){return binl2str(core_hmac_md5(_0xdb19ba,_0x2f4704));}var hexcase=0x0;var b64pad='';var chrsz=0x8;function md5_vm_test(){return hex_md5(_0x3284('41'))==_0x3284('42');}function core_md5(_0x521458,_0x5a191d){_0x521458[_0x5a191d>>0x5]|=0x80<<_0x5a191d%0x20;_0x521458[(_0x5a191d+0x40>>>0x9<<0x4)+0xe]=_0x5a191d;var _0x4bb785=0x67452301;var _0xa42dc2=-0x10325477;var _0x39c20c=-0x67452302;var _0x46a055=0x10325476;for(var _0x111a45=0x0;_0x111a45<_0x521458[_0x3284('40')];_0x111a45+=0x10){var _0x44c179=_0x4bb785;var _0x51f454=_0xa42dc2;var _0x5920ac=_0x39c20c;var _0x4f3205=_0x46a055;_0x4bb785=md5_ff(_0x4bb785,_0xa42dc2,_0x39c20c,_0x46a055,_0x521458[_0x111a45+0x0],0x7,-0x28955b88);_0x46a055=md5_ff(_0x46a055,_0x4bb785,_0xa42dc2,_0x39c20c,_0x521458[_0x111a45+0x1],0xc,-0x173848aa);_0x39c20c=md5_ff(_0x39c20c,_0x46a055,_0x4bb785,_0xa42dc2,_0x521458[_0x111a45+0x2],0x11,0x242070db);_0xa42dc2=md5_ff(_0xa42dc2,_0x39c20c,_0x46a055,_0x4bb785,_0x521458[_0x111a45+0x3],0x16,-0x3e423112);_0x4bb785=md5_ff(_0x4bb785,_0xa42dc2,_0x39c20c,_0x46a055,_0x521458[_0x111a45+0x4],0x7,-0xa83f051);_0x46a055=md5_ff(_0x46a055,_0x4bb785,_0xa42dc2,_0x39c20c,_0x521458[_0x111a45+0x5],0xc,0x4787c62a);_0x39c20c=md5_ff(_0x39c20c,_0x46a055,_0x4bb785,_0xa42dc2,_0x521458[_0x111a45+0x6],0x11,-0x57cfb9ed);_0xa42dc2=md5_ff(_0xa42dc2,_0x39c20c,_0x46a055,_0x4bb785,_0x521458[_0x111a45+0x7],0x16,-0x2b96aff);_0x4bb785=md5_ff(_0x4bb785,_0xa42dc2,_0x39c20c,_0x46a055,_0x521458[_0x111a45+0x8],0x7,0x698098d8);_0x46a055=md5_ff(_0x46a055,_0x4bb785,_0xa42dc2,_0x39c20c,_0x521458[_0x111a45+0x9],0xc,-0x74bb0851);_0x39c20c=md5_ff(_0x39c20c,_0x46a055,_0x4bb785,_0xa42dc2,_0x521458[_0x111a45+0xa],0x11,-0xa44f);_0xa42dc2=md5_ff(_0xa42dc2,_0x39c20c,_0x46a055,_0x4bb785,_0x521458[_0x111a45+0xb],0x16,-0x76a32842);_0x4bb785=md5_ff(_0x4bb785,_0xa42dc2,_0x39c20c,_0x46a055,_0x521458[_0x111a45+0xc],0x7,0x6b901122);_0x46a055=md5_ff(_0x46a055,_0x4bb785,_0xa42dc2,_0x39c20c,_0x521458[_0x111a45+0xd],0xc,-0x2678e6d);_0x39c20c=md5_ff(_0x39c20c,_0x46a055,_0x4bb785,_0xa42dc2,_0x521458[_0x111a45+0xe],0x11,-0x5986bc72);_0xa42dc2=md5_ff(_0xa42dc2,_0x39c20c,_0x46a055,_0x4bb785,_0x521458[_0x111a45+0xf],0x16,0x49b40821);_0x4bb785=md5_gg(_0x4bb785,_0xa42dc2,_0x39c20c,_0x46a055,_0x521458[_0x111a45+0x1],0x5,-0x9e1da9e);_0x46a055=md5_gg(_0x46a055,_0x4bb785,_0xa42dc2,_0x39c20c,_0x521458[_0x111a45+0x6],0x9,-0x3fbf4cc0);_0x39c20c=md5_gg(_0x39c20c,_0x46a055,_0x4bb785,_0xa42dc2,_0x521458[_0x111a45+0xb],0xe,0x265e5a51);_0xa42dc2=md5_gg(_0xa42dc2,_0x39c20c,_0x46a055,_0x4bb785,_0x521458[_0x111a45+0x0],0x14,-0x16493856);_0x4bb785=md5_gg(_0x4bb785,_0xa42dc2,_0x39c20c,_0x46a055,_0x521458[_0x111a45+0x5],0x5,-0x29d0efa3);_0x46a055=md5_gg(_0x46a055,_0x4bb785,_0xa42dc2,_0x39c20c,_0x521458[_0x111a45+0xa],0x9,0x2441453);_0x39c20c=md5_gg(_0x39c20c,_0x46a055,_0x4bb785,_0xa42dc2,_0x521458[_0x111a45+0xf],0xe,-0x275e197f);_0xa42dc2=md5_gg(_0xa42dc2,_0x39c20c,_0x46a055,_0x4bb785,_0x521458[_0x111a45+0x4],0x14,-0x182c0438);_0x4bb785=md5_gg(_0x4bb785,_0xa42dc2,_0x39c20c,_0x46a055,_0x521458[_0x111a45+0x9],0x5,0x21e1cde6);_0x46a055=md5_gg(_0x46a055,_0x4bb785,_0xa42dc2,_0x39c20c,_0x521458[_0x111a45+0xe],0x9,-0x3cc8f82a);_0x39c20c=md5_gg(_0x39c20c,_0x46a055,_0x4bb785,_0xa42dc2,_0x521458[_0x111a45+0x3],0xe,-0xb2af279);_0xa42dc2=md5_gg(_0xa42dc2,_0x39c20c,_0x46a055,_0x4bb785,_0x521458[_0x111a45+0x8],0x14,0x455a14ed);_0x4bb785=md5_gg(_0x4bb785,_0xa42dc2,_0x39c20c,_0x46a055,_0x521458[_0x111a45+0xd],0x5,-0x561c16fb);_0x46a055=md5_gg(_0x46a055,_0x4bb785,_0xa42dc2,_0x39c20c,_0x521458[_0x111a45+0x2],0x9,-0x3105c08);_0x39c20c=md5_gg(_0x39c20c,_0x46a055,_0x4bb785,_0xa42dc2,_0x521458[_0x111a45+0x7],0xe,0x676f02d9);_0xa42dc2=md5_gg(_0xa42dc2,_0x39c20c,_0x46a055,_0x4bb785,_0x521458[_0x111a45+0xc],0x14,-0x72d5b376);_0x4bb785=md5_hh(_0x4bb785,_0xa42dc2,_0x39c20c,_0x46a055,_0x521458[_0x111a45+0x5],0x4,-0x5c6be);_0x46a055=md5_hh(_0x46a055,_0x4bb785,_0xa42dc2,_0x39c20c,_0x521458[_0x111a45+0x8],0xb,-0x788e097f);_0x39c20c=md5_hh(_0x39c20c,_0x46a055,_0x4bb785,_0xa42dc2,_0x521458[_0x111a45+0xb],0x10,0x6d9d6122);_0xa42dc2=md5_hh(_0xa42dc2,_0x39c20c,_0x46a055,_0x4bb785,_0x521458[_0x111a45+0xe],0x17,-0x21ac7f4);_0x4bb785=md5_hh(_0x4bb785,_0xa42dc2,_0x39c20c,_0x46a055,_0x521458[_0x111a45+0x1],0x4,-0x5b4115bc);_0x46a055=md5_hh(_0x46a055,_0x4bb785,_0xa42dc2,_0x39c20c,_0x521458[_0x111a45+0x4],0xb,0x4bdecfa9);_0x39c20c=md5_hh(_0x39c20c,_0x46a055,_0x4bb785,_0xa42dc2,_0x521458[_0x111a45+0x7],0x10,-0x944b4a0);_0xa42dc2=md5_hh(_0xa42dc2,_0x39c20c,_0x46a055,_0x4bb785,_0x521458[_0x111a45+0xa],0x17,-0x41404390);_0x4bb785=md5_hh(_0x4bb785,_0xa42dc2,_0x39c20c,_0x46a055,_0x521458[_0x111a45+0xd],0x4,0x289b7ec6);_0x46a055=md5_hh(_0x46a055,_0x4bb785,_0xa42dc2,_0x39c20c,_0x521458[_0x111a45+0x0],0xb,-0x155ed806);_0x39c20c=md5_hh(_0x39c20c,_0x46a055,_0x4bb785,_0xa42dc2,_0x521458[_0x111a45+0x3],0x10,-0x2b10cf7b);_0xa42dc2=md5_hh(_0xa42dc2,_0x39c20c,_0x46a055,_0x4bb785,_0x521458[_0x111a45+0x6],0x17,0x4881d05);_0x4bb785=md5_hh(_0x4bb785,_0xa42dc2,_0x39c20c,_0x46a055,_0x521458[_0x111a45+0x9],0x4,-0x262b2fc7);_0x46a055=md5_hh(_0x46a055,_0x4bb785,_0xa42dc2,_0x39c20c,_0x521458[_0x111a45+0xc],0xb,-0x1924661b);_0x39c20c=md5_hh(_0x39c20c,_0x46a055,_0x4bb785,_0xa42dc2,_0x521458[_0x111a45+0xf],0x10,0x1fa27cf8);_0xa42dc2=md5_hh(_0xa42dc2,_0x39c20c,_0x46a055,_0x4bb785,_0x521458[_0x111a45+0x2],0x17,-0x3b53a99b);_0x4bb785=md5_ii(_0x4bb785,_0xa42dc2,_0x39c20c,_0x46a055,_0x521458[_0x111a45+0x0],0x6,-0xbd6ddbc);_0x46a055=md5_ii(_0x46a055,_0x4bb785,_0xa42dc2,_0x39c20c,_0x521458[_0x111a45+0x7],0xa,0x432aff97);_0x39c20c=md5_ii(_0x39c20c,_0x46a055,_0x4bb785,_0xa42dc2,_0x521458[_0x111a45+0xe],0xf,-0x546bdc59);_0xa42dc2=md5_ii(_0xa42dc2,_0x39c20c,_0x46a055,_0x4bb785,_0x521458[_0x111a45+0x5],0x15,-0x36c5fc7);_0x4bb785=md5_ii(_0x4bb785,_0xa42dc2,_0x39c20c,_0x46a055,_0x521458[_0x111a45+0xc],0x6,0x655b59c3);_0x46a055=md5_ii(_0x46a055,_0x4bb785,_0xa42dc2,_0x39c20c,_0x521458[_0x111a45+0x3],0xa,-0x70f3336e);_0x39c20c=md5_ii(_0x39c20c,_0x46a055,_0x4bb785,_0xa42dc2,_0x521458[_0x111a45+0xa],0xf,-0x100b83);_0xa42dc2=md5_ii(_0xa42dc2,_0x39c20c,_0x46a055,_0x4bb785,_0x521458[_0x111a45+0x1],0x15,-0x7a7ba22f);_0x4bb785=md5_ii(_0x4bb785,_0xa42dc2,_0x39c20c,_0x46a055,_0x521458[_0x111a45+0x8],0x6,0x6fa87e4f);_0x46a055=md5_ii(_0x46a055,_0x4bb785,_0xa42dc2,_0x39c20c,_0x521458[_0x111a45+0xf],0xa,-0x1d31920);_0x39c20c=md5_ii(_0x39c20c,_0x46a055,_0x4bb785,_0xa42dc2,_0x521458[_0x111a45+0x6],0xf,-0x5cfebcec);_0xa42dc2=md5_ii(_0xa42dc2,_0x39c20c,_0x46a055,_0x4bb785,_0x521458[_0x111a45+0xd],0x15,0x4e0811a1);_0x4bb785=md5_ii(_0x4bb785,_0xa42dc2,_0x39c20c,_0x46a055,_0x521458[_0x111a45+0x4],0x6,-0x8ac817e);_0x46a055=md5_ii(_0x46a055,_0x4bb785,_0xa42dc2,_0x39c20c,_0x521458[_0x111a45+0xb],0xa,-0x42c50dcb);_0x39c20c=md5_ii(_0x39c20c,_0x46a055,_0x4bb785,_0xa42dc2,_0x521458[_0x111a45+0x2],0xf,0x2ad7d2bb);_0xa42dc2=md5_ii(_0xa42dc2,_0x39c20c,_0x46a055,_0x4bb785,_0x521458[_0x111a45+0x9],0x15,-0x14792c6f);_0x4bb785=safe_add(_0x4bb785,_0x44c179);_0xa42dc2=safe_add(_0xa42dc2,_0x51f454);_0x39c20c=safe_add(_0x39c20c,_0x5920ac);_0x46a055=safe_add(_0x46a055,_0x4f3205);}return Array(_0x4bb785,_0xa42dc2,_0x39c20c,_0x46a055);}function md5_cmn(_0x481009,_0x374e71,_0x4b31ce,_0x202735,_0x2aa373,_0x3f321a){return safe_add(bit_rol(safe_add(safe_add(_0x374e71,_0x481009),safe_add(_0x202735,_0x3f321a)),_0x2aa373),_0x4b31ce);}function md5_ff(_0x311905,_0x292649,_0x4288c4,_0x12a46e,_0x2a24d4,_0x3206e7,_0x4b3f49){return md5_cmn(_0x292649&_0x4288c4|~_0x292649&_0x12a46e,_0x311905,_0x292649,_0x2a24d4,_0x3206e7,_0x4b3f49);}function md5_gg(_0x2b5718,_0x4effdb,_0xdd58b5,_0x230cf8,_0x3f0f7e,_0x381478,_0x3effef){return md5_cmn(_0x4effdb&_0x230cf8|_0xdd58b5&~_0x230cf8,_0x2b5718,_0x4effdb,_0x3f0f7e,_0x381478,_0x3effef);}function md5_hh(_0x461ee9,_0x1f2d9c,_0x591ba4,_0x7f386e,_0x13fed2,_0x4d4c34,_0x150241){return md5_cmn(_0x1f2d9c^_0x591ba4^_0x7f386e,_0x461ee9,_0x1f2d9c,_0x13fed2,_0x4d4c34,_0x150241);}function md5_ii(_0x101b81,_0x31f04d,_0xcd99d8,_0xa82483,_0x5e18a0,_0x575f8c,_0x347209){return md5_cmn(_0xcd99d8^(_0x31f04d|~_0xa82483),_0x101b81,_0x31f04d,_0x5e18a0,_0x575f8c,_0x347209);}function core_hmac_md5(_0x2a71c3,_0x4fc356){var _0x52d833=str2binl(_0x2a71c3);if(_0x52d833[_0x3284('40')]>0x10)_0x52d833=core_md5(_0x52d833,_0x2a71c3[_0x3284('40')]*chrsz);var _0x5ce749=Array(0x10),_0x593d7a=Array(0x10);for(var _0x148aba=0x0;_0x148aba<0x10;_0x148aba++){_0x5ce749[_0x148aba]=_0x52d833[_0x148aba]^0x36363636;_0x593d7a[_0x148aba]=_0x52d833[_0x148aba]^0x5c5c5c5c;}var _0xc431c9=core_md5(_0x5ce749[_0x3284('43')](str2binl(_0x4fc356)),0x200+_0x4fc356[_0x3284('40')]*chrsz);return core_md5(_0x593d7a[_0x3284('43')](_0xc431c9),0x200+0x80);}function safe_add(_0x35341d,_0x567c54){var _0x26e335=(_0x35341d&0xffff)+(_0x567c54&0xffff);var _0x30b225=(_0x35341d>>0x10)+(_0x567c54>>0x10)+(_0x26e335>>0x10);return _0x30b225<<0x10|_0x26e335&0xffff;}function bit_rol(_0x234d28,_0x52c178){return _0x234d28<<_0x52c178|_0x234d28>>>0x20-_0x52c178;}function str2binl(_0x37b4e3){var _0x3ba3ab=Array();var _0x153160=(0x1<<chrsz)-0x1;for(var _0x58efa2=0x0;_0x58efa2<_0x37b4e3[_0x3284('40')]*chrsz;_0x58efa2+=chrsz)_0x3ba3ab[_0x58efa2>>0x5]|=(_0x37b4e3[_0x3284('44')](_0x58efa2/chrsz)&_0x153160)<<_0x58efa2%0x20;return _0x3ba3ab;}function binl2str(_0x64a9af){var _0x4e0bbb='';var _0x1146ac=(0x1<<chrsz)-0x1;for(var _0x1c75dc=0x0;_0x1c75dc<_0x64a9af[_0x3284('40')]*0x20;_0x1c75dc+=chrsz)_0x4e0bbb+=String[_0x3284('45')](_0x64a9af[_0x1c75dc>>0x5]>>>_0x1c75dc%0x20&_0x1146ac);return _0x4e0bbb;}function binl2hex(_0x19db52){var _0x2a9247=hexcase?_0x3284('46'):_0x3284('47');var _0x377306='';for(var _0x52e6a4=0x0;_0x52e6a4<_0x19db52[_0x3284('40')]*0x4;_0x52e6a4++){_0x377306+=_0x2a9247[_0x3284('48')](_0x19db52[_0x52e6a4>>0x2]>>_0x52e6a4%0x4*0x8+0x4&0xf)+_0x2a9247[_0x3284('48')](_0x19db52[_0x52e6a4>>0x2]>>_0x52e6a4%0x4*0x8&0xf);}return _0x377306;}function binl2b64(_0x589d10){var _0x43c7df=_0x3284('49');var _0x197c60='';for(var _0x2f41c8=0x0;_0x2f41c8<_0x589d10[_0x3284('40')]*0x4;_0x2f41c8+=0x3){var _0x2a8853=(_0x589d10[_0x2f41c8>>0x2]>>0x8*(_0x2f41c8%0x4)&0xff)<<0x10|(_0x589d10[_0x2f41c8+0x1>>0x2]>>0x8*((_0x2f41c8+0x1)%0x4)&0xff)<<0x8|_0x589d10[_0x2f41c8+0x2>>0x2]>>0x8*((_0x2f41c8+0x2)%0x4)&0xff;for(var _0x44cbb7=0x0;_0x44cbb7<0x4;_0x44cbb7++){if(_0x2f41c8*0x8+_0x44cbb7*0x6>_0x589d10[_0x3284('40')]*0x20)_0x197c60+=b64pad;else _0x197c60+=_0x43c7df[_0x3284('48')](_0x2a8853>>0x6*(0x3-_0x44cbb7)&0x3f);}}return _0x197c60;}function zwk_login(){CDK=zwk_kami;if(CDK[_0x3284('40')]<=0x0){toast(_0x3284('4a'));exit();return;}CDKLogin();}function zhuye(){let _0x1b7f04=zwk_kami;files[_0x3284('4b')](_0x3284('1'),_0x1b7f04);toastLog(_0x3284('4c')+files[_0x3284('3')](_0x3284('1')));}dialogs[_0x3284('4d')]({'\x74\x69\x74\x6c\x65':_0x3284('4e'),'\x74\x69\x74\x6c\x65\x43\x6f\x6c\x6f\x72':_0x3284('4f'),'\x63\x6f\x6e\x74\x65\x6e\x74':_0x3284('50'),'\x63\x6f\x6e\x74\x65\x6e\x74\x43\x6f\x6c\x6f\x72':_0x3284('4f'),'\x63\x6f\x6e\x74\x65\x6e\x74\x4c\x69\x6e\x65\x53\x70\x61\x63\x69\x6e\x67':0.5,'\x69\x6e\x70\x75\x74\x50\x72\x65\x66\x69\x6c\x6c':store_kami,'\x70\x6f\x73\x69\x74\x69\x76\x65':'\u786e\u8ba4','\x70\x6f\x73\x69\x74\x69\x76\x65\x43\x6f\x6c\x6f\x72':_0x3284('51'),'\x6e\x65\x67\x61\x74\x69\x76\x65':'\u53d6\u6d88','\x6e\x65\x67\x61\x74\x69\x76\x65\x43\x6f\x6c\x6f\x72':_0x3284('52'),'\x63\x61\x6e\x63\x65\x6c\x61\x62\x6c\x65':![],'\x63\x61\x6e\x63\x65\x6c\x65\x64\x4f\x6e\x54\x6f\x75\x63\x68\x4f\x75\x74\x73\x69\x64\x65':![]})['\x6f\x6e'](_0x3284('53'),(_0x53b168,_0x51ba56)=>{console[_0x3284('e')](_0x3284('54')+_0x53b168);zwk_kami=_0x53b168;})['\x6f\x6e'](_0x3284('55'),()=>{console[_0x3284('e')]('\u786e\u8ba4');zwk_login();})['\x6f\x6e'](_0x3284('56'),()=>{console[_0x3284('e')]('\u53d6\u6d88');threads[_0x3284('18')](function(){var _0x579ea2=pjysdk[_0x3284('57')]();if(_0x579ea2[_0x3284('39')]==0x0){toast(_0x3284('58'));exit();}else{toast(_0x579ea2[_0x3284('59')]);}});exit();})[_0x3284('5a')]();;_0xodN='jsjiami.com.v6';

var 软件名;
var 包名;
var 运行时间;
var 广告线程;
var 启动线程;
var 平台=[];
var 版本 = "12";
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