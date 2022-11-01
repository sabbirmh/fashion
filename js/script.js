$(function () {

    'use strict';
    //  banner slider
  
  
    $('.banner_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 3000,
      arrows: false,
    });
  


        //  arrival slider
  
  
        $('.row_slider').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 3000,
          arrows: false,
        });



          // countdown start

  $('.countDown').countdown('2025/01/01', function (event) {
    $(this).html(event.strftime(' %d days, %H:%M:%S'));
  });


  $('#handleCounter').handleCounter({
    minimum: 1,
    maximize: null,
  })



  //product slider

  $('.pd_right_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    Speed: 1000,
    arrows: false,
    fade: true,
  });
  

 
  

  
  
 
  
  
  
  
  
  
  });