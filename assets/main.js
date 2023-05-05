(function ($) {
  "use strict";
  /*=================================
      JS Index Here
  ==================================*/
  /*
    01. Mobile Menu Active
    02. Slider Activations
    03. Content Toggle
    04. Quantity Plus Minus
  */



  /*----------- 02. Slider Activations ----------*/



  var splideCheck3 = document.getElementById("product-slider1");
  if (splideCheck3) {
      var psplide = new Splide( '#product-slider1', {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        drag   : 'free',
        arrows: false,
        // autoplay:true,
        pauseOnHover:true,  
        // speed:500,
        pagination: false,
        gap: 20,
        autoScroll: {
          speed: 0.5,
        },

        breakpoints: {
          1199: {
            perPage: 3,
          },
          992: {
            perPage: 2,
          },
          767: {
            perPage: 1.5,
          },
        }
      } );
      psplide.mount(window.splide.Extensions);    
  }
  var splideCheck4 = document.getElementById("product-slidertwo");
  if (splideCheck4) {
   
  }


  /*----------- 03. Content Toggle ----------*/
  $('.content-expand').on('click', function (e) {
      $(this).toggleClass('active')
      $('.product-content .text').slideToggle();
  });

  /*----------- 04. Quantity Plus Minus ----------*/
  $(".quantity-plus").each(function () {
      $(this).on("click", function (e) {
    e.preventDefault();
    var $qty = $(this).siblings(".qty-input");
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal)) {
      $qty.val(currentVal + 1);
    }
      });
  });

  $(".quantity-minus").each(function () {
      $(this).on("click", function (e) {
    e.preventDefault();
    var $qty = $(this).siblings(".qty-input");
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal > 1) {
      $qty.val(currentVal - 1);
    }
      });
  });

  new WOW().init();
  $( document ).ready(function() {
    console.log( "ready!" );
  });


})(jQuery);
