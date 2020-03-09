$(document).ready(function () {
    $(".stop-scroll").click(function () {
      $('html, body').animate({
        scrollTop: $(".scroll").offset().top
      }, 1500);
    });
  });
  $(document).ready(function () {
    $(".scroll").click(function () {
      $('html, body').animate({
        scrollTop: $(".stop-scroll").offset().top
      }, 1000);
    });
  });