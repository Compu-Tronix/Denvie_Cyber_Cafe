// login popup function
function closeForm() {
  $('.form').removeClass('visible');
}

$(document).ready(function($) {
  
  // Form Interactions //
  $('#log_btn').on('click', function(event) {
    event.preventDefault();

    $('.form').addClass('visible');
  });

  // close popup
  $('.form').on('click', function(event) {
    if ($(event.target).is('.form') || $(event.target).is('#close_login_popup')) {
      event.preventDefault();
      $(this).removeClass('visible');
    }
  });



});