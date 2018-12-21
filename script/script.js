$(document).ready(function() {
  var inDDParent = false;
  var inDDChildren = false;

  $(".dd-parent").mouseover(function() {
    inDDParent = true;
    $("#dd-children").delay(150).stop().slideDown(300);
  });

  $("#dd-children").mouseover(function() {
    inDDChildren = true;
  });

  $(".dd-parent").mouseout(function() {
    inDDParent = false;
    setTimeout(function() {
      if(!inDDParent && !inDDChildren) {
        $("#dd-children").delay(150).stop().slideUp(300);
      }
    }, 100);
  });

  $("#dd-children").mouseout(function() {
    inDDChildren = false;
    setTimeout(function() {
      if(!inDDParent && !inDDChildren) {
        $("#dd-children").delay(150).stop().slideUp(300);
      }
    }, 100);
  });

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top-75
    }, 500);
  });

  $(".hiddenlist").click(function () {
    $("ul", $(this).parent()).slideToggle();
  });

  $(".hiddendeets").click(function () {
    $(".hidden.details", $(this).closest(".box-wrapper")).slideToggle();
    $(this).closest(".box-header").toggleClass("bottom-border");

    if ($(this).parents("#education").length == 0) {
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
