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

  $("#email").on("blur", function(){
    var userinput = $("#email").val();
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    if (!pattern.test(userinput)) {
      $("#emailSpan").text('Please enter valid email');
      $("#emailSpan").css('color','red');
      return false;
    }else {
      $("#emailSpan").text('');
    }
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
  $("#browseBtn").on("click",function(){
    $("#profilePhoto").trigger('click');
  });
  $('#profilePhoto').bind('change', function() {
    var size = parseInt(Math.ceil(this.files[0].size / 1024));
    if (size > 3000) {
      $('#profilePhoto').val('');
      $("#imgSpan").text('File larger than 3MB is not allowed!');  
      $("#imgSpan").css('color','red');
    }
    else {
      var file_data = $(this).prop('files')[0];
      $("#profilePhotoName").val(file_data.name);
      $("#imgSpan").text(file_data.name);
      $("#imgSpan").css('color','green');
      var form_data = new FormData();                  
      form_data.append('file', file_data);

      let url = 'https://charotaritsolutions.com/projects-demo/valam-app/api.php?upload=true';
      $.ajax({
        url: url,
        dataType: 'text',
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
  $("button#btnRegister").on("click", function(){

    if ($("input#surname").val() == '') {
      $("input#surname").focus();
      $("#surnameSpan").text('Please enter a Surname');
      return false;
    }
    else if ($("#selectGotr").val() == '' && $("input[name=finalGotr]").val() == '') {
      $("#selectGotr").focus();
      $("#gotrSpan").text('Please select a Gotr');
      return false;
    }
    else if ($("#nationality").val() == '') {
      $("#nationality").focus();
      $("#nationalitySpan").text('Please enter a Nationality');
      return false;
    }
    else if ($("#native_place").val() == '') {
      $("#native_place").focus();
      $("#nativeSpan").text('Please enter a Nativ Place');
      return false;
    }
    else if ($("#email").val() == '') {
      $("#email").focus();
      $("#emailSpan").text('Please enter an Email');
      return false;
    }
    else if ($("#password").val() == '') {
      $("#password").focus();
      $("#passwordSpan").text('Please enter a password');
      return false;
    }
    else if ($("#password").val().length < 6) {
      $("#password").focus();
      $("#passwordSpan").text('Must be at least 6 characters long!');
      return false;
    }
    else if ($("#profilePhotoName").val() == '') {
      $("#browseBtn").focus();
      $("#imgSpan").text('Please choose a photo');
      $("#imgSpan").css('color','red');
      return false;
    }
    else {
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
          $("#submitSpan").text('Your details are Submitted for verifications. Thank You :)');
          $("#submitSpan").css('color','green');
          setTimeout(function(){window.location = 'menu.html';},2000);
        }
        else {
          swal('Something went wrong, please try again!');
          $("#submitSpan").css('color','red');
        }
      });
    }
  });
});