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

  $(document).ready(function(){
    $("#hamburger-1").click(function(){
     if($(this).hasClass("is-active")){
       $("#hamburger-1").removeClass("is-active");
       $('.navigation__list').removeClass('open');
     }
     else{
       $("#hamburger-1").addClass("is-active");
       $(".navigation__list").addClass('open');
     }
    });
  });
  

// $(document).ready(function(){
//     $("#hamburger-1").click(function(){
//       if($(this).hasClass('is-active')){
//         $('.navigation__list').addClass('open')
//       }
//       else{
//         $('.navigation__list')
//       }
      
      
//     });
//   });





  