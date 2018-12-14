$(document).ready(function() {
  $(".hiddenlist").click(function () {
    $("ul", $(this).parent()).slideToggle();
  });
});
