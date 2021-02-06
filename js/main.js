$(document).ready(function(){
const flowersSlider = new Swiper('.flowers-slider', {
  // Параметры слайда
  loop: true,
  slidesPerView: 6,
 

  // Подключение стрелок
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
//настройки адаптивной версии
 breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 5,
      spaceBetween: 40
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 40
    }
  }
});


const reviewsSlider = new Swiper('.reviews-slider', {
  // Параметры слайда
  loop: true,
  slidesPerView: 1,
 

  // Подключение стрелок
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});
$("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : '../img/reviews/rew-1.jpg',
      opts : {
        caption : 'Букет',
        thumb   : '../img/reviews/rew-1.jpg'
      }
    },
    {
      src  : '../img/reviews/rew-2.jpg',
      opts : {
        caption : 'Букет',
        thumb   : '../img/reviews/rew-2.jpg'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});


  });







