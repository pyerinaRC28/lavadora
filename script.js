const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  navigation: false, // No flechas

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    992: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1200: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
  },
});


document.querySelectorAll('.gallery-item img').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    const src = img.getAttribute('data-large') || img.src;
    const instance = basicLightbox.create(`
      <img src="${src}" style="max-height: 90vh; max-width: 60vw; object-fit: contain;" />
    `);
    instance.show();
  });
});


