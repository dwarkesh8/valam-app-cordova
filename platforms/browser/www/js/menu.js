$(document).ready(function(){
	$("#loading").css('display','none');
	$("#mainDiv").css('visibility','visible');
	$("#gotoRegister").on("click",function(){
		window.location = 'register.html';
	});
});