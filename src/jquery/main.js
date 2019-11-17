

$(document).ready(function(){
 $('.owl-carousel').slick({  
       slidesToShow: 2,
       prevArrow: '<button class="prev"></button>',
       nextArrow: '<button class="next"></button>',
       slidesToScroll: 2,
       adaptiveHeight: true,
       responsive: [
           {
             breakpoint: 1180,
             settings: {
               dots: true,
               slidesToShow: 1,
               arrows: false,
               slidesToScroll: 1,
             }
           }
       ]
     });
});