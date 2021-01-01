function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("mainDiv").style.filter = "blur(8px)";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("mainDiv").style.filter = "blur(0px)";
}
$(document).ready(function(){
	$("#loading").css('display','none');
	$("#mainDiv").css('visibility','visible');

	let url = 'https://charotaritsolutions.com/projects-demo/valam-app/api.php';
	$.post(url, {cmd:'get_news'}, function(response){
		var obj = JSON.parse(response);
		var html = '';
		if (response == 'false') {
			html += '<div align="center"><h5>No news were found!</h5></div>';
		}
		else {
			$.each(obj, function (key, val) {

				html += '<h5 class="card-title">'+val['title']+'</h5>';
				html += '<p class="card-text" style="overflow-y: auto;max-height: 200px">'+val['news']+'</p>';
			});
		}
		$("#dynamicNewsPortal").html(html);
	});
});