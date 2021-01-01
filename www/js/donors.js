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
	$.post(url, {cmd:'get_donors'}, function(response){
		var obj = JSON.parse(response);
		var html = '';
		if (response == 'false') {
			html += '<div class="card"><div align="center"><div class="card-header"><h5>No records were found!</h5></div></div>';
		}
		else {
			$.each(obj, function (key, val) {
				html += '<div class="card">';
				html += '<div class="card-header">'+val["name"]+'</div>';
				html += '<ul class="list-group list-group-flush">';
				html += '<li class="list-group-item">Amount: '+val["amount"]+'</li>';
				html += '<li class="list-group-item">Donated for: '+val["service"]+'</li></ul></div><br>';
			});
		}
		$("#dynamicDonorsDiv").html(html);
	});
});