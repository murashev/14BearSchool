const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
  if (nav.classList.toggle('open')) {
    navBtnImg.src = './img/icons/nav-close.svg';
    console.log('click')
  } else {
    navBtnImg.src = './img/icons/nav-open.svg';
    console.log('click')
  }
}
nav.onclick = () => {
  if (nav.classList.toggle('open')) {
    navBtnImg.src = './img/icons/nav-close.svg';
    console.log('click')
  } else {
    navBtnImg.src = './img/icons/nav-open.svg';
    console.log('click')
  }
}


let swiper = new Swiper(".slide-content", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 4,
    },
    950: {
      slidesPerView: 5,
    },
    1920: {
      slidesPerView: 5,
    }
  },
});

