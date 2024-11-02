'use strict';

AOS.init();


$(document).ready(function () {
  // Burger-menu

  $('.js-hamburger').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.header__menu-wrap').toggleClass('active');
    $('.header').toggleClass('active');
    // $('.site-header').toggleClass('active');
  });



  let timeId;
  timeId = setTimeout(onResizeWindow, 400);
  window.onresize = function () {
    clearTimeout(timeId);
    timeId = setTimeout(onResizeWindow, 400);
  };

  var fl1 = true;
  function onResizeWindow() {
    if (window.innerWidth < 768) {
      if (fl1) {
        fl1 = false;
        // console.log('less');
        $('.menu-item-has-children').each(function () {
          $(this).children('a').addClass('dc-mobile-click');
        });
      }
    } else {
      if (!fl1) {
        fl1 = true;
        // console.log('more');
        $('.menu-item-has-children').each(function () {
          $(this).children('a').removeClass('dc-mobile-click');
        });
      }
    }
  }

  $('.header').on('click', '.dc-mobile-click', function (e) {
    e.preventDefault();
    $(this).next().slideToggle(300);
    $(this).toggleClass('active');
    // console.log('click');
  });

  $(document).ready(function () {
    let currentLang = 'en';

    $('#langToggle').on('click', function () {
      if (currentLang === 'en') {
        currentLang = 'uk';
        $(this).text('UA');
      } else {
        currentLang = 'en';
        $(this).text('EN');
      }

      $('.title, .description').each(function () {
        $(this).text($(this).data(currentLang));
      });
    });
  });

  let f = true;
  $(window).on('scroll', function () {
    let scrTop = $(window).scrollTop();
    let headerHeight = $('.header').height();

    if (scrTop > headerHeight && f) {
      f = false;
      $('.header').addClass('header_fixed');
      // $('.section-1').css({
      //   marginTop: headerHeight,
      // });
    } else if (scrTop <= headerHeight && !f) {
      f = true;
      $('.header').removeClass('header_fixed');
      $('.section-1').css('marginTop', '');
    }
  });
});

// swiper
if ($('.projects__swiper').length) {
  if (typeof Swiper !== 'undefined') {
    var swiper_projects = new Swiper('.projects__swiper', {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 14,
      centeredSlides: true,
      centeredSlidesBounds: true,
      // initialSlide: 1,

      speed: 300,
      navigation: {
        nextEl: '.projects__swiper .next',
        prevEl: '.projects__swiper .prev',
      },
      breakpoints: {
        768: {
          spaceBetween: 24,
          centeredSlides: false,
          centeredSlidesBounds: false,

        },
        992: {
          spaceBetween: 30,
          centeredSlides: false,
          centeredSlidesBounds: false,


        },
        1200: {
          spaceBetween: 40,
          centeredSlides: false,
          centeredSlidesBounds: false,

        }
      }
    });
  }
}

