const burger = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')
const body = document.body

if (burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active')
        menu.classList.toggle('_active')
        burger.classList.toggle('_lock')
    })
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 600,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      paginationClickableBullet: 4,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      830: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
  });