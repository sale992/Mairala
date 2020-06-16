var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: false,
    },
  });

  $(document).ready(function(){
    $("#hamburger-1").click(function(){
      $(this).toggleClass("is-active");
      $('.navigation__list').toggleClass('open');
      // $('.navigation__item').toggleClass('fade');

    });
  });










  // const hamburger = document.querySelector(".hamburger");
  // const navLinks = document.querySelector(".navigation__list");
  // const links = document.querySelectorAll(".navigation__item");

  // hamburger.addEventListener("click", () => {
  //   navLinks.classList.toggle("open");
  //   links.forEach(link => {
  //     link.classList.toggle("fade");
  //     link.classList.toggle("open");

  //   });
  // });