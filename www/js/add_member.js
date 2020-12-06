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
  $("#email").on("blur", function(){
    var userinput = $("#email").val();
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    if (!pattern.test(userinput)) {
      $("#emailSpan").text('Please enter valid email');
      $("#emailSpan").css('color','red');
      return false;
    } else {
      $("#emailSpan").text('');
    }
  });
  $("a#tc").on("click",function(){
    var content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'; 
    swal('Term & Conditions', content, 'info');
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
  $('input:radio[name="maritial_status"]').change(function(){
    if ($(this).is(':checked') && $(this).val() == 'married') {
      $("#marriageDetails").fadeIn(800);
    }
    else {
      $("#marriageDetails").fadeOut(800);
    }
  });
  $("button#btnRegister").on("click", function(){
    if($("#websiteUsername").val() == '') {
      $("#websiteUsername").focus();
      $("#websiteUsernameSpan").text('Please enter a Username');
      return false;
    }
    else if($("#email").val() == '') {
      $("#email").focus();
      $("#emailSpan").text('Please enter an Email');
      return false;
    }
    else if($("#dob").val() == '') {
      $("#dob").focus();
      $("#dobSpan").text('Please enter a date-of-birth');
      return false;
    }
    else if($("#firstName").val() == '') {
      $("#firstName").focus();
      $("#firstNameSpan").text('Please enter a First name');
      return false;
    }
    else if($("#fatherName").val() == '') {
      $("#fatherName").focus();
      $("#fatherNameSpan").text('Please enter a Father\'s name');
      return false;
    }
    else if($("#motherName").val() == '') {
      $("#motherName").focus();
      $("#motherNameSpan").text('Please enter a Mother\'s name');
      return false;
    }
    else if($("#house_no").val() == '') {
      $("#house_no").focus();
      $("#house_noSpan").text('Please enter a House number');
      return false;
    }
    else if($("#flat_society_apartment").val() == '') {
      $("#flat_society_apartment").focus();
      $("#fsaSpan").text('Please enter a flat/society/apartment');
      return false;
    }
    else if($("#city").val() == '') {
      $("#city").focus();
      $("#citySpan").text('Please enter a city');
      return false;
    }
    else if($("#dist").val() == '') {
      $("#dist").focus();
      $("#distSpan").text('Please enter a district');
      return false;
    }
    else if($("#state").val() == '') {
      $("#state").focus();
      $("#stateSpan").text('Please enter a state');
      return false;
    }
    else if($("#pincode").val() == '') {
      $("#pincode").focus();
      $("#pincodeSpan").text('Please enter a pincode');
      return false;
    }
    else if($("#pincode").val().length != 6) {
      $("#pincode").focus();
      $("#pincodeSpan").text('Six digit pincode is required');
      return false;
    }
    else if($("#contact_no").val() == '') {
      $("#contact_no").focus();
      $("#contactNoSpan").text('Please enter a contact number');
      return false;
    }
    else if($("#contact_no").val().length > 13 || $("#contact_no").val().length < 10) {
      $("#contact_no").focus();
      $("#contactNoSpan").text('Required value between 10 to 13 digits');
      return false;
    }
    else if($("#landline_code").val() == '') {
      $("#landline_code").focus();
      $("#landlineCodeSpan").text('Please enter a landline code');
      return false;
    }
    else if($("#landline_code").val().length != 5) {
      $("#landline_code").focus();
      $("#landlineCodeSpan").text('Required 5 digits code');
      return false;
    }
    else if($("#landline_no").val() == '') {
      $("#landline_no").focus();
      $("#landlineNoSpan").text('Please enter a landline number');
      return false;
    }
    else if($("#landline_no").val().length != 6) {
      $("#landline_no").focus();
      $("#landlineNoSpan").text('Required 6 digits code');
      return false;
    }
    else if($("#otherDetails").val().length > 1000) {
      $("#otherDetails").focus();
      $("#otherDetailsSpan").text('Max word limit: 1000');
      return false;
    }
    else if($("#hobbies").val().length > 500) {
      $("#hobbies").focus();
      $("#hobbiesSpan").text('Max word limit: 500');
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
        family_id: parseInt(getCookie('loginId')),
        username:$("#websiteUsername").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        dob: $("#dob").val(),
        first_name: $("#firstName").val(),
        father_name: $("#fatherName").val(),
        mother_name: $("#motherName").val(),
        status: $("input[name=status]:checked").val(),
        gender: $("input[name=gender]:checked").val(),
        maritial_status: $("input[name=maritial_status]:checked").val(),
        marriage_date: $("input[name=marriage_date]").val(),
        spouce_name: $("input[name=spouce_name]").val(),
        current_place: $("input[name=current_place]").val(),
        house_no: $("#house_no").val(),
        flat_society_apartment: $("#flat_society_apartment").val(),
        city: $("#city").val(),
        dist: $("#dist").val(),
        state: $("#state").val(),
        pincode: parseInt($("#pincode").val()),
        occupation: $("#occupation").val(),
        education: $("#education").val(),
        contact_no: $("#contact_no").val(),
        landline_code: parseInt($("#landline_code").val()),
        landline_no: parseInt($("#landline_no").val()),
        office_no: $("#officeNo").val(),
        job_details: $("#job").val(),
        other_details: $("#otherDetails").val(),
        hobbies: $("#hobbies").val(),
        spacs: $("input[name=spacs]:checked").val(),
        physically_challenged: $("input[name=physically_challenged]:checked").val(),
        profile_photo: $("#profilePhotoName").val(),
        cmd: 'add_member'
      }, function(response){
        console.log(response);
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