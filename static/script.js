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
    if ($(event.target).is('.form') || $(event.target).is('#close_form')) {
      event.preventDefault();
      $(this).removeClass('visible');
    }
  });



});

// typing popup function
function closeForm() {
  $('#typing_form').removeClass('visible');
}

$(document).ready(function($) {
  
  // Form Interactions //
  $('#typing_icon').on('click', function(event) {
    event.preventDefault();

    $('#typing_form').addClass('visible');
  });

  // close popup
  $('#typing_form').on('click', function(event) {
    if ($(event.target).is('#typing_form') || $(event.target).is('#close_typing_form')) {
      event.preventDefault();
      $(this).removeClass('visible');
    }
  });



});

// tech support popup function
function closeForm() {
  $('#support_form').removeClass('visible');
}

$(document).ready(function($) {
  
  // Form Interactions //
  $('#support_icon').on('click', function(event) {
    event.preventDefault();

    $('#support_form').addClass('visible');
  });

  // close popup
  $('#support_form').on('click', function(event) {
    if ($(event.target).is('#support_form') || $(event.target).is('#close_support_form')) {
      event.preventDefault();
      $(this).removeClass('visible');
    }
  });


});

// online applications popup function
function closeForm() {
  $('#connectivity_form').removeClass('visible');
}

$(document).ready(function($) {
  
  // Form Interactions //
  $('#connectivity_icon').on('click', function(event) {
    event.preventDefault();

    $('#connectivity_form').addClass('visible');
  });

  // close popup
  $('#connectivity_form').on('click', function(event) {
    if ($(event.target).is('#connectivity_form') || $(event.target).is('#close_connectivity_form')) {
      event.preventDefault();
      $(this).removeClass('visible');
    }
  });



});

// computer bookings popup function
function closeForm() {
  $('#connectivity_form').removeClass('visible');
}

$(document).ready(function($) {
  
  // Form Interactions //
  $('#computer_icon').on('click', function(event) {
    event.preventDefault();

    $('#computer_form').addClass('visible');
  });

  // close popup
  $('#computer_form').on('click', function(event) {
    if ($(event.target).is('#computer_form') || $(event.target).is('#close_computer_form')) {
      event.preventDefault();
      $(this).removeClass('visible');
    }
  });



});

// printing popup function
function closeForm() {
  $('#print_form').removeClass('visible');
}

$(document).ready(function($) {
  
  // Form Interactions //
  $('#print_icon').on('click', function(event) {
    event.preventDefault();

    $('#print_form').addClass('visible');
  });

  // close popup
  $('#print_form').on('click', function(event) {
    if ($(event.target).is('#print_form') || $(event.target).is('#close_print_form')) {
      event.preventDefault();
      $(this).removeClass('visible');
    }
  });



});

//scroll onclick function
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