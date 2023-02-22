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

// spollers
// const spollersArray = document.querySelectorAll('[data-spollers]');
// if (spollersArray.length > 0) {
//   // получаем спойлеры
//   const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
//     return !item.dataset.spollers.split(",")[0];
//   });
//   // инициализируем обычные спойлеры
//   if (spollersRegular.length > 0) {
//     initSpollers(spollersRegular);
//   }
//   function initSpollers(spollersRegular) {
//     spollersRegular.forEach(spollersBlock => {
//       spollersBlock = spollersBlock.item
//       spollersBlock.classList.add('_init');
//       initSpollerBody(spollersBlock);
//       spollersBlock.addEventListener("click", setSpollerAction)
//     })

//   }
// }
// инициализация

// // работа с контентом
// function initSpollerBody(spollersBlock, hideSpollerBody = true) {
//   const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
//   if (spollerTitles.length > 0) {
//     spollerTitles.forEach(spollerTitle => {
//       if (hideSpollerBody) {
//         spollerTitle.removeAttribute('tabindex');
//         if (!spollerTitle.classList.contains('_active')) {
//           spollerTitle.nextElementSibling.hidden = true;
//         } else {
//           spollerTitle.setAttribute('tabindex', '-1');
//           spollerTitle.nextElementSibling.hidden = false;
//         }
//       }
//     })
//   }
// }
// function setSpollerAction(e) {
//   const el = e.target;
//   if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
//     const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
//     const spollersBlock = spollerTitle.closest('[data-spollers]');
//     const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
//     if (!spollersBlock.querySelectorAll('_slide').length) {
//       if (oneSpoller && !spollerTitle.classList.contains('_active')) {
//         hideSpollerBody(spollersBlock);
//       }
//       spollerTitle.classList.toggle('_active');
//       _slideToggle(spollerTitle.nextElementSibling, 500);
//     }
//     e.preventDefault();
//   }
// }
// function hideSpollerBody(spollersBlock) {
//   const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
//   if (spollerActiveTitle) {
//     spollerActiveTitle.classList.remove('_active');
//     _slideUp(spollerActiveTitle.nextElementSibling, 500);
//   }
// }

// // slideToggle
// let _slideUp = (target, duration = 500) => {
//   if (!target.classList.contains('_slide')) {
//     target.classList.add('_slide');
//     target.style.transitionProperty = 'height, margin, padding';
//     target.style.transitionDuration = duration + 'ms';
//     target.style.height = target.offsetHeight + 'px';
//     target.offsetHeight;
//     target.style.overflow = 'hidden';
//     target.style.height = 0;
//     target.style.paddingTop = 0;
//     target.style.paddingBottom = 0;
//     target.style.marginTop = 0;
//     target.style.marginBottom = 0;
//     window.setTimeout(() => {
//       target.hidden = true;
//       target.style.removeProperty('height');
//       target.style.removeProperty('padding-top');
//       target.style.removeProperty('padding-bottom');
//       target.style.removeProperty('margin-top');
//       target.style.removeProperty('margin-bottom');
//       target.style.removeProperty('overflow');
//       target.style.removeProperty('transition-duration');
//       target.style.removeProperty('transition-property');
//       target.classList.remove('_slide');
//     }, duration)
//   }
// }
// let _slideDown = (target, duration = 500) => {
//   if (!target.classList.contains('_slide')) {
//     target.classList.add('_slide');
//     if (target.hidden) {
//       target.hidden = false;
//     }
//     let height = target.offsetHeight;
//     target.style.overflow = 'hidden';
//     target.style.height = 0;
//     target.style.paddingTop = 0;
//     target.style.paddingBottom = 0;
//     target.style.marginTop = 0;
//     target.style.marginBottom = 0;
//     target.offsetHeight;
//     target.style.transitionProperty = 'height, margin, padding';
//     target.style.transitionDuration = duration + 'ms';
//     target.style.height = target.offsetHeight + 'px';
//     target.style.removeProperty('padding-top');
//     target.style.removeProperty('padding-bottom');
//     target.style.removeProperty('margin-top');
//     target.style.removeProperty('margin-bottom');
//     window.setTimeout(() => {
//       target.style.removeProperty('height');
//       target.style.removeProperty('overflow');
//       target.style.removeProperty('transition-duration');
//       target.style.removeProperty('transition-property');
//       target.classList.remove('_slide');
//     }, duration)
//   }
// }
// let _slideToggle = (target, duration = 500) => {
//   if (target.hidden) {
//     return _slideDown(target, duration);
//   } else {
//     return _slideUp(target, duration)
//   }
// }


