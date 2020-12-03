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
  
  $('#profilePhoto').bind('change', function() {
    var size = parseInt(Math.ceil(this.files[0].size / 1024));
    if (size > 3000) {
      $('#profilePhoto').val('');
      swal('Large file','File larger than 3MB is not allowed!','error');  
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
  //form submit process
  $("button#btnRegister").on("click", function(){
    let url = 'http://localhost/test-projects/valam-app-APIs/api.php';
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
      profile_photo: $("#profilePhoto").val(),
      cmd: 'add_member'
    }, function(response){
      console.log(response);
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