var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: false,
  },
});

// $(document).ready(function(){
//   $("#hamburger-1").click(function(){
//     $(this).toggleClass("is-active");
//     // $('.navigation__list').slideDown(1500);
//     $('.navigation__list').addClass('open');
//     $('.navigation__list').removeClass('open');

//   });
// });

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


$(function () {
  //caches a jQuery object containing the header element
  var header = $(".transparent");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      header.removeClass('transparent').addClass("white");
    } else {
      header.removeClass("white").addClass('transparent');
    }
  });
});


nav list transform - 100px



  * /





