// burger
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

// sliders
// courses-slider
let coursesSwiper = new Swiper(".coursesSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // navigation: {
  //   nextEl: ".coursesSwiper-button-next",
  //   prevEl: ".coursesSwiper-button-prev",
  // },
});

// team-slider
let teamSwiper = new Swiper(".slide-content", {
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
      slidesPerView: 2,
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

// books-slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".books-swiper-button-next",
    prevEl: ".books-swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 3,
    }
  },
});




// аккордеон
document.querySelectorAll('.course-program__item-title').forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;
    if (content.style.maxHeight) {
      document.querySelectorAll('.course-program__item-text').forEach((el) => el.style.maxHeight = null);
    } else {
      document.querySelectorAll('.course-program__item-text').forEach((el) => el.style.maxHeight = null);
      content.style.maxHeight = content.scrollHeight + "px"
    }
  })
})


