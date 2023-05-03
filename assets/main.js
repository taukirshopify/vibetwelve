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

  /*---------- 01. Mobile Menu Active ----------*/
  $.fn.otmobilemenu = function (options) {
    var opt = $.extend({
      menuToggleBtn: '.ot-menu-toggle',
      bodyToggleClass: 'ot-body-visible',
      subMenuClass: 'ot-submenu',
      subMenuParent: 'ot-item-hot-children',
      subMenuParentToggle: 'ot-active',
      meanExpandClass: 'ot-mean-expand',
      appendElement: '<span class="ot-mean-expand"></span>',
      subMenuToggleClass: 'ot-open',
      toggleSpeed: 400,
    }, options);

    return this.each(function () {
      var menu = $(this); // Select menu

      // Menu Show & Hide
      function menuToggle() {
        menu.toggleClass(opt.bodyToggleClass);

        // collapse submenu on menu hide or show
        var subMenu = '.' + opt.subMenuClass;
        $(subMenu).each(function () {
          if ($(this).hasClass(opt.subMenuToggleClass)) {
            $(this).removeClass(opt.subMenuToggleClass);
            $(this).css('display', 'none')
            $(this).parent().removeClass(opt.subMenuParentToggle);
          };
        });
      };

      // Class Set Up for every submenu
      menu.find('li').each(function () {
        var submenu = $(this).find('ul');
        submenu.addClass(opt.subMenuClass);
        submenu.css('display', 'none');
        submenu.parent().addClass(opt.subMenuParent);
        submenu.prev('a').append(opt.appendElement);
        submenu.next('a').append(opt.appendElement);
      });

      // Toggle Submenu
      function toggleDropDown($element) {
        if ($($element).next('ul').length > 0) {
          $($element).parent().toggleClass(opt.subMenuParentToggle);
          $($element).next('ul').slideToggle(opt.toggleSpeed);
          $($element).next('ul').toggleClass(opt.subMenuToggleClass);
        } else if ($($element).prev('ul').length > 0) {
          $($element).parent().toggleClass(opt.subMenuParentToggle);
          $($element).prev('ul').slideToggle(opt.toggleSpeed);
          $($element).prev('ul').toggleClass(opt.subMenuToggleClass);
        };
      };

      // Submenu toggle Button
      var expandToggler = '.' + opt.meanExpandClass;
      $(expandToggler).each(function () {
        $(this).on('click', function (e) {
          e.preventDefault();
          toggleDropDown($(this).parent());
        });
      });

      // Menu Show & Hide On Toggle Btn click
      $(opt.menuToggleBtn).each(function () {
        $(this).on('click', function () {
          menuToggle();
        })
      })

      // Hide Menu On out side click
      menu.on('click', function (e) {
        e.stopPropagation();
        menuToggle()
      })

      // Stop Hide full menu on menu click
      menu.find('div').on('click', function (e) {
        e.stopPropagation();
      });

    });
  };

  $('.ot-menu-wrapper').otmobilemenu();

  /*----------- 02. Slider Activations ----------*/
  var splideCheck1 = document.getElementById("related-slider");
  if (splideCheck1) {
      var splide = new Splide( '#related-slider', {
        type   : 'loop',
        perPage: 4,
        perMove: 1,
        arrows: false,
        pagination: false,
        gap: 15,
        breakpoints: {
          1199: {
            perPage: 3,
          },
          992: {
            perPage: 2,
          },
          575: {
            perPage: 1,
          },
        }
      } );
      splide.mount();
      
  }

  var splideCheck2 = document.getElementById("cat-slider");
  if (splideCheck2) {
      var catsplide = new Splide( '#cat-slider', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        arrows: false,
        pagination: false,
        gap: 20,
        breakpoints: {
          1199: {
            perPage: 2,
          },
          992: {
            perPage: 2,
          },
          767: {
            perPage: 1.5,
          },
        }
      } );
      catsplide.mount();    
  }

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
      var pssplide = new Splide( '#product-slidertwo', {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        drag   : 'free',
        arrows: false,
        // autoplay:true,
        // speed:500,
        pagination: false,
        gap: 0,
        autoScroll: {
          speed: 0.5,
        },
        grid: {
          rows: 2,
          // gap : {
          //   row: '2rem',
          // },
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
      pssplide.mount(window.splide.Extensionstwo);    
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
