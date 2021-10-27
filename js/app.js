$(document).ready(function() {
    $('.foodslider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.prevbtn',
        nextArrow: '.nextbtn',
        autoplay: true,
        responsive:[
          {
            breakpoint: 992,  
            settings:{
                slidesToShow:2,
            }
          },
           
          {
            breakpoint: 768,  
            settings:{
                slidesToShow:1,
            }
          }
    ]
    });

    $('.nav-trigger').click(function() {
        $('.site-content-wrapper').toggleClass('scaled')
    });

});