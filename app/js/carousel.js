'use strict';
{
  // carousel
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.getElementById('service-contents');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.id = 'carousel-button';
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('.carousel-nav').appendChild(button);
    }

    dots[0].classList.add('carousel-nav-current');
  }

  function updateDots() {
    dots.forEach((dot) => {
      dot.classList.remove('carousel-nav-current');
    });
    dots[currentIndex].classList.add('carousel-nav-current');
  }

  updateButtons();
  setupDots();

  // carouselAction
  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    updateDots();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    updateDots();
    moveSlides();
  });

  window.addEventListener('resize', () => {
    moveSlides();
  });
}
