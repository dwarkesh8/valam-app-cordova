function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
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

function checkCookie(cname) {
  var user=getCookie(cname);
  if (user != "") {
    return true;
  } else {
   return false;
 }
}

$(document).ready(function(){
  var isLogin = checkCookie('isUserLogin');
  if (isLogin == true) {
    $("#spanLoginModal").attr('hidden',true);
    $("#imgUserIcon").removeAttr('hidden');
    $("#imgUserIcon").attr('src','https://charotaritsolutions.com/projects-demo/valam-app/uploads/'+getCookie('loginUserProfilePhoto'));
    $("#spanLoginModal").attr("data-toggle","");
    $("#spanLoginModal").attr("data-target","");
    $(".surname").html('<span class="fa fa-user"></span> '+getCookie('loginUsername').charAt(0).toUpperCase()+getCookie('loginUsername').slice(1));
    $(".after-login").css('display','block');
    $(".before-login").css('display','none');
    $(".logout-div").css('display','block');
  }
  else {
    $("#imgUserIcon").attr('hidden',true);
    $("#spanLoginModal").removeAttr('hidden');
    $("#imgUserIcon").attr('src',"");
    $("#spanLoginModal").attr("data-toggle","modal");
    $("#spanLoginModal").attr("data-target","#loginModal");
    $(".surname").html('');
    $(".after-login").css('display','none');
    $(".before-login").css('display','block');
    $(".logout-div").css('display','none');
  }

  $("a#aLogout").on("click", function(){
    setCookie('isUserLogin',"",1);
    setCookie('loginId',"",1);
    setCookie('loginUsername',"",1);
    setCookie('loginUserProfilePhoto',"");
    window.location = '';
  });
});