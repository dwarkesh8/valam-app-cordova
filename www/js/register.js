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
  
  $("#gotoBack").on("click",function(){
    window.location = 'menu.html';
  });
  $("a#tc").on("click",function(){
    var content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'; 
    swal('Term & Conditions', content, 'info');
  });
  $("select#selectGotr").on("change", function(){
    var gotr = $(this).val();
    if (gotr !== 'add_new') {
      $("input[name=finalGotr]").val(gotr);
    }
    if (gotr == 'add_new') {
      $("input#inputTextGotr").attr('hidden', false);
      $("input#inputTextGotr").focus();
    }
    else {
      $("input#inputTextGotr").attr('hidden', true);
    }
  });
  $("input#inputTextGotr").on('blur', function(){
    $("input[name=finalGotr]").val($(this).val());
  });
  $('#profilePhoto').bind('change', function() {
    var size = parseInt(Math.ceil(this.files[0].size / 1024));
    if (size > 3000) {
      $('#profilePhoto').val('');
      swal('Large file','File larger than 3MB is not allowed!','error');  
    }
    else {
      var file_data = $(this).prop('files')[0];
      $("#profilePhotoName").val(file_data.name);
      var form_data = new FormData();                  
      form_data.append('file', file_data);

      let url = 'https://charotaritsolutions.com/projects-demo/valam-app/api.php?upload=true';
      $.ajax({
        url: url, // point to server-side PHP script 
        dataType: 'text',  // what to expect back from the PHP script, if anything
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,                         
        type: 'post',
        success: function(response){
          console.log(response);
        }
      });
    }
  });
  //form submit process
  $("button#btnRegister").on("click", function(){
    let url = 'https://charotaritsolutions.com/projects-demo/valam-app/api.php';
    $.post(url, {
      surname: $("#surname").val(),
      gotr: $("input[name=finalGotr]").val(),
      nationality: $("#nationality").val(),
      native_place: $("#native_place").val(),
      email: $("#email").val(),
      password: $("#password").val(),
      family_photo: $("#profilePhotoName").val(),
      cmd: 'register'
    }, function(response){
      var obj = JSON.parse(response);
      if (obj.status == 'true') {
        swal('Submitted','Your details are Submitted for verifications. Thank You :)','success').then((value)=>{
          window.location = 'menu.html';
        });
      }
      else {
        swal('Try Again!','Something went wrong, please try again','error');
      }
    });
  });
});