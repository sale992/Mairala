var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: false,
  },
});


$(document).ready(function () {
  $("#hamburger-1").click(function () {
    if ($(this).hasClass("is-active")) {
      $("#hamburger-1").removeClass("is-active");
      $('.navigation__list').removeClass('open');
      $('body').removeClass('fixed-position');
    }
    else {
      $("#hamburger-1").addClass("is-active");
      $(".navigation__list").addClass('open');
      $('body').addClass('fixed-position');
    }
  });
});











