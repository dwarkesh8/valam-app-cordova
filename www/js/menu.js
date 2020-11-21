function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("mainDiv").style.filter = "blur(8px)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mainDiv").style.filter = "blur(0px)";
}
$(document).ready(function(){
	$("#loading").css('display','none');
	$("#mainDiv").css('visibility','visible');
	$("#gotoRegister").on("click",function(){
		window.location = 'register.html';
	});
});