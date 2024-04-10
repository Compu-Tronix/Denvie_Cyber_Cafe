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


window.smoothScroll = function(target) {
  var scrollContainer = target;
  do {
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do {
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}