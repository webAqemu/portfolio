function init() {
  if (window.innerWidth > 760) {

    const mainImg = document.querySelector('.main-img');
    let imgTop;

    imgTop = mainImg.getBoundingClientRect().top;
    mainImg.style.top = imgTop + 'px';

  } else {
    let body = document.querySelector('body')
    body.style.cssText = 'overflow-x: hidden'
  };

  const timeLine = gsap.timeline({
    duration: 0.5,
  });

  timeLine
    .to('.bar', { x: '100%' })
    .to('.loading', { y: '-100%' })
    .to('.main-box', { x: '100%' })
    .from('.main-img img', { scale: 1.5 }, '-=.5')
    .from('.main-btn', { opacity: 0 })
    .from('nav', { y: '-100%' }, '-=.3')
    .from('.about', { opacity: 0 })
    .from('.squares', { opacity: 0 })
};

window.addEventListener('load', function () {
  init();
});


// const mouse = document.querySelector('.cursor');
// // const mouseTxt = mouse.querySelector('span');
// // const burger = document.querySelector('.burger');

// function cursor(e) {
//   mouse.style.top = e.pageY + 'px';
//   mouse.style.left = e.pageX + 'px';
// }

// function activeCursor(e) {
//   const item = e.target;
//   if (item.id === 'btn') {
//     mouse.classList.add('btn-active');
//   } else {
//     mouse.classList.remove('btn-active');
//   }
//   if (item.id === 'about-link') {
//     mouse.classList.add('btn-about');
//   } else {
//     mouse.classList.remove('btn-about');
//   }
//   if (item.classList.contains('explore')) {
//     mouse.classList.add('explore-active');
//     gsap.to('.title-swipe', 1, { y: '0%' });
//     mouseTxt.innerText = 'Tap';
//   } else {
//     mouse.classList.remove('explore-active');
//     gsap.to('.title-swipe', 1, { y: '100%' });
//     mouseTxt.innerText = '';
//   }
// };

// window.addEventListener('mousemove', cursor);
// window.addEventListener('scroll', cursor);
// window.addEventListener('mouseover', activeCursor);