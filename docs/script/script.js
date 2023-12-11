console.clear();

function Swiper1__init() {
  const swiper = new Swiper('.section-img-3 .swiper-con', {
    spaceBetween: 20,
    speed: 800,
    allowSlidePrev: false,
    allowSlideNext: false,

    on: {
      init: function () {
        $('.swiper-btn-box .swiper-btn__next').click(function () {
          $('.section-img-3 .swiper').addClass('active');
          $('.swiper-btn-box .swiper-btn__next').removeClass('active');
          $('.swiper-btn-box .swiper-btn__prev').addClass('active');
        });

        $('.swiper-btn-box .swiper-btn__prev').click(function () {
          $('.section-img-3 .swiper').removeClass('active');
          $('.swiper-btn-box .swiper-btn__next').addClass('active');
          $('.swiper-btn-box .swiper-btn__prev').removeClass('active');
        });
      }
    }
  });
}

Swiper1__init();