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

	$("input[name=username]").on('blur', function(){
		if ($(this).val().length <= 0) {
			$(this).css('border-bottom','2px solid red');
		}
		else {
			$(this).css('border-bottom','2px solid green');
		}
	});
	$("input[name=password]").on('blur', function(){
		if ($(this).val().length <= 0) {
			$(this).css('border-bottom','2px solid red');
		}
		else {
			$(this).css('border-bottom','2px solid green');
		}
	});

	$("#btnSignin").on('click', function(){
		var username = $("input[name=username]").val();
		var password = $("input[name=password]").val();
		if (username.length <= 0) {
			$("input[name=username]").focus();
			$("input[name=username]").css('border-bottom','2px solid red');
			$("#responseMsg").text('Enter the Username!');
			$("#responseMsg").css('color','red');
			return false;
		}
		else if(password.length <= 0) {
			$("input[name=password]").focus();
			$("input[name=password]").css('border-bottom','2px solid red');
			$("#responseMsg").text('Enter the Password!');
			$("#responseMsg").css('color','red');
			return false;
		}
		else {
			let url = 'http://localhost/test-projects/valam-app-APIs/api.php';
			$.post(url, {username: username,password:password,cmd:'login'}, function(response){
				var obj = JSON.parse(response);
				if (obj.status == 'true') {
					setCookie('isUserLogin','yes',1);
					setCookie('loginId',obj.msg.id,1);
					setCookie('loginUsername',obj.msg.username,1);
					setCookie('loginUserProfilePhoto',obj.msg.profile_photo,1);
					$("#loginModal").modal("toggle");
					window.location = '';
				}
				else {
					$("#responseMsg").text(obj.msg);
					$("#responseMsg").css('color','red');
				}
			});
		}
	});
});