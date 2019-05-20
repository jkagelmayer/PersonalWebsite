$(document).ready(function() {

  /* Set up navbar dropdown for smol screens */
  $('#nav-icon').click(function () {
    $('nav ul').slideToggle(300);
  });
  $('nav ul').click(function () {
    $('nav ul').slideToggle(300);
  });

  /* Scroll to current-page links */
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top-75
    }, 500);
  });

  /* Show/hide hidden lists on click */
  $('.hiddenlist').click(function () {
    $('ul', $(this).parent()).slideToggle();
  });

  /* Show/hide hidden details on click */
  $('.hiddendeets').click(function () {
    $('.hidden.details', $(this).closest('.box-wrapper')).slideToggle();
    $(this).closest('.box-header').toggleClass('bottom-border');

    if ($(this).parents('#education').length == 0) {
      $(this).closest('.box-header').toggleClass('bottom-pad');
    }
  });

  /* Fade in box wrappers */
  $('.box-wrapper').addClass('fade-in');
  var fade_time = 1000;

  $('.fade-in').each(function(i) {
    var this_show  = $(this).offset().top + 0.25 * $(this).outerHeight();
    var window_bottom = $(window).scrollTop() + $(window).height();

    if (window_bottom > this_show) {
      $(this).animate({'opacity':'1'}, fade_time);
    }
  });

  $(window).scroll(function() {
    $('.fade-in').each(function(i) {
      var this_show  = $(this).offset().top + 0.25 * $(this).outerHeight();
      var window_bottom = $(window).scrollTop() + $(window).height();

      if (window_bottom > this_show) {
        $(this).animate({'opacity':'1'}, fade_time);
      }
    });
  });
});

/* Pay attention to navbar on window resize */
$(window).resize(function() {
  /* Show full navbar if window grows */
  if ((window.matchMedia('(min-width: 769px)').matches) &&
      ($('nav ul').is(':hidden'))) {
    $('nav ul').show();
  }

  /* Hide navbar if window shrinks */
  if ((window.matchMedia('(max-width: 768px)').matches) &&
      ($('nav ul').is(':visible'))) {
    $('nav ul').hide();
  }
});
