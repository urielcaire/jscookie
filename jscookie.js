/**
*			JsCookie
*	A simple way to create cookies with javascript!
*	@urielcaire
*	github: https://github.com/urielcaire/jscookie
*/

function createCookie(name, value, days){
	var expires = "";
	if(days){
		var time = new Date();
		time.setTime(time.getTime()+(days*24*60*60*1000));
		expires = "; expires="+time.toGMTString();
	}
	document.cookie = name+"="+value+expires+"; path=/";
}

function getCookie(name){
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return "";
}

function deleteCookie(name) {
	createCookie(name,"",-1);
}

function checkCookie(name){
	var check = getCookie(name);
	if(check != "")
		alert('cookie ativo');
	else
		alert('cookie inativo');
}
