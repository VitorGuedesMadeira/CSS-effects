var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
      renderBullet: (index, className) => {
      return '' + '' + '' + '' + '' + '';
      }
    },
    mousewheel: {
      releaseOnEdges: true,
    },
  });
