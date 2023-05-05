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
