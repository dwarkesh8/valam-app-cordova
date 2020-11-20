function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function(){
	$("#loading").css('display','none');
	$("#mainDiv").css('visibility','visible');
	$("#gotoRegister").on("click",function(){
		window.location = 'register.html';
	});
});