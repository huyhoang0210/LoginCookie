var username = "hoang"; 
var password = "123";

$(document).ready(function()
{
	function AutoLogin()
	{
		var u = getCookie("tk");
		var p = getCookie("mk");
		if(u == username && p == password){
			 location.replace("index.html");
		}
	}
	//AutoLogin();
})

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function login() {
	var tk1 = $('#name').val();
	var mk1 = $('#pass').val();
	var ckb = $('#remember').is(':checked');
debugger
	if(tk1 == username && mk1 == password){
		if(ckb == true)
		{
			setCookie('tk',tk1,1);
			setCookie('mk',mk1,1);
			
			debugger
		}
		 location.replace("index.html");
	}
}