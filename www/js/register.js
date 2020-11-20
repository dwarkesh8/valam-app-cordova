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
    if (gotr == 'add_new') {
      $("input#inputTextGotr").attr('hidden', false);
      $("input#inputTextGotr").focus();
    }
    else {
      $("input#inputTextGotr").attr('hidden', true);
    }
  });
  $('input:radio[name="maritial_status"]').change(
    function(){
        if ($(this).is(':checked') && $(this).val() == 'married') {
            $("#marriageDetails").fadeIn(800);
        }
        else {
            $("#marriageDetails").fadeOut(800);
          }
    });
        //form submit process
        $("button#btnSubmit").on("click", function(){
          var username = $("#websiteUsername").val();
          var password = $("#pwd").val();
          var email = $("#email").val();
          var surname = $("#surname").val();
          var firstName = $("#firstName").val();
          var fatherName = $("#fatherName").val();
          var motherName = $("#motherName").val();
          var nationality = $("#nationality").val();
          var selectGotr = $("#selectGotr").val();
          var dob = $("#dob").val();
          var native = $("#native").val();
          var current_place = $("#current_place").val();
          var address = $("#address").val();
          var occupation = $("#occupation").val();
          var education = $("#education").val();
          var contact = $("#contact").val();
          var landlineNo = $("#landlineNo").val();
          var officeNo = $("#officeNo").val();
          var hobby = $("#hobby").val();
          var profilePhoto = $("#profilePhoto").val();
          var agreeTC = $("#agreeTC").val();
          if (username.length == 0) {
            $("#websiteUsername").focus();
          }
          else if (password.length == 0) {
            $("#pwd").focus();
          }
          else if (email.length == 0) {
            $("#email").focus();
          }
          else if (surname.length == 0) {
            $("#surname").focus();
          }
          else if (firstName.length == 0) {
            $("#firstName").focus();
          }
          else if (fatherName.length == 0) {
            $("#fatherName").focus();
          }
          else if (motherName.length == 0) {
            $("#motherName").focus();
          }
          else if (motherName.length == 0) {
            $("#motherName").focus();
          }
          else if (nationality.length == 0) {
            $("#nationality").focus();
          }
          else if (selectGotr.length == 0) {
            $("#selectGotr").focus();
          }
          else if (dob.length == 0) {
            $("#dob").focus();
          }
          else if (native.length == 0) {
            $("#native").focus();
          }
          else if (current_place.length == 0) {
            $("#current_place").focus();
          }
          else if (address.length == 0) {
            $("#address").focus();
          }
          else if (occupation.length == 0) {
            $("#occupation").focus();
          }
          else if (education.length == 0) {
            $("#education").focus();
          }
          else if (contact.length == 0 || contact.length > 14) {
            $("#contact").focus();
          }
          else if (landlineNo.length == 0 || landlineNo.length > 12) {
            $("#landlineNo").focus();
          }
          else if (officeNo.length == 0 || officeNo.length > 12) {
            $("#officeNo").focus();
          }
          else if (hobby.length == 0) {
            $("#hobby").focus();
          }
          else if (profilePhoto.length == 0) {
            $("#profilePhoto").focus();
          }
          else {
            swal('Submitted','Your details are Submitted for verifications. Thank You :)','success').then((value)=>{
              $("#exampleModal").modal('toggle');
            });
          }
        });
      });