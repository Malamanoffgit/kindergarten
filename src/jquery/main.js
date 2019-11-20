

$(document).ready(function(){

 $('.owl-carousel').slick({  
       slidesToShow: 2,
       prevArrow: '<button class="prev"></button>',
       nextArrow: '<button class="next"></button>',
       slidesToScroll: 2,
       adaptiveHeight: true,
       responsive: [
           {
             breakpoint: 1190,
             settings: {
               dots: true,
               slidesToShow: 2,
               arrows: false,
               slidesToScroll: 2,
               adaptiveHeight: true
             }
            },
            {
             breakpoint: 990,
             settings: {
               dots: true,
               slidesToShow: 1,
               arrows: false,
               slidesToScroll: 1,
             }
           }
       ]
     });


     let menu = $('.toggle-menu'),
    active = $('.toggle-menu-active'),
    navMenu = $('.navigation-menu');

    menu.click(function(){
      menu.toggleClass('toggle-menu-active');
      navMenu.toggleClass('nav-menu-active');

      active.click(function(){
        menu.removeClass('toggle-menu-active')
      });
    });
});