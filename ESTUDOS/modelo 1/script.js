new Swiper('.card-wrapper', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  slidesPerView: 6,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 2000,
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});


function changeText(option) {

  const on = "flex";
  const off = "none";




  if (option === 'op1') {
    document.getElementsByClassName('first')[0].style.display = on;
    document.getElementsByClassName('second')[0].style.display = off;
    document.getElementsByClassName('third')[0].style.display = off;
  }

  if (option === 'op2') {
    document.getElementsByClassName('second')[0].style.display = on;
    document.getElementsByClassName('first')[0].style.display = off;
    document.getElementsByClassName('third')[0].style.display = off;
  }

  if (option === 'op3') {
    document.getElementsByClassName('third')[0].style.display = on;
    document.getElementsByClassName('first')[0].style.display = off;
    document.getElementsByClassName('second')[0].style.display = off;
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  document.getElementsByClassName('option op1')[0].focus();
});

