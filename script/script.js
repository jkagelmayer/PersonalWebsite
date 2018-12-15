$(document).ready(function() {
  $(".hiddenlist").click(function () {
    $("ul", $(this).parent()).slideToggle();
  });

  $(".cover-text").find("h1").addClass("fade-in");
  $(".box-wrapper").addClass("fade-in");
  var fade_time_slow = 2000;
  var fade_time_fast = 1000;

  $(".fade-in").each(function(i) {
    var this_bottom  = $(this).offset().top + $(this).outerHeight();
    var window_bottom = $(window).scrollTop() + $(window).height();
    var fade_time = fade_time_fast;

    if ($(this).parents(".cover-text") && $(this).is("h1")) {
      fade_time = fade_time_slow;
    }

    if (window_bottom > this_bottom) {
      $(this).animate({'opacity':'1'}, fade_time);
    }
  });

  $(window).scroll(function() {
    $(".fade-in").each(function(i) {
      var this_bottom = $(this).offset().top + $(this).outerHeight();
      var window_bottom = $(window).scrollTop() + $(window).height();
      var fade_time = fade_time_fast;

      if ($(this).parents(".cover-text") && $(this).is("h1")) {
        fade_time = fade_time_slow;
      }

      if (window_bottom > this_bottom) {
        $(this).animate({'opacity':'1'}, fade_time);
      }
    });
  });
});
