$(document).ready(function() {
  $(".hiddenlist").click(function () {
    $("ul", $(this).parent()).slideToggle();
  });

  $(".hiddendeets").click(function () {
    $(".hidden.details", $(this).closest(".box-wrapper")).slideToggle();
    $(this).closest(".box-header").toggleClass("bottom-border");

    if ($(this).parents("#skills").length) {
      $(this).closest(".box-header").toggleClass("bottom-pad");
    }
  });

  $(".cover-text").find("h1").addClass("fade-in");
  $(".box-wrapper").addClass("fade-in");
  var fade_time_slow = 2000;
  var fade_time_fast = 1000;

  $(".fade-in").each(function(i) {
    var this_show  = $(this).offset().top + 0.25 * $(this).outerHeight();
    var window_bottom = $(window).scrollTop() + $(window).height();
    var fade_time = fade_time_fast;

    if ($(this).is("#welcome-text")) {
      fade_time = fade_time_slow;
    }

    if (window_bottom > this_show) {
      $(this).animate({'opacity':'1'}, fade_time);
    }
  });

  $(window).scroll(function() {
    $(".fade-in").each(function(i) {
      var this_show  = $(this).offset().top + 0.25 * $(this).outerHeight();
      var window_bottom = $(window).scrollTop() + $(window).height();
      var fade_time = fade_time_fast;

      if ($(this).is("#welcome-text")) {
        fade_time = fade_time_slow;
      }

      if (window_bottom > this_show) {
        $(this).animate({'opacity':'1'}, fade_time);
      }
    });
  });
});
