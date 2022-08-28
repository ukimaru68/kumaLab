'use strict';
{
  // ID定義
  // menu
  const menuOpen = document.getElementById('menu-open');
  const menuBtn = document.querySelector('.sp-menu-btn2');
  const menuHtml = document.querySelector('html');
  const menuClose = document.getElementById('menu-close');

  // menuAction
  menuOpen.addEventListener('click', () => {
    menuBtn.classList.add('menu-show');
    menuHtml.classList.add('open');
    menuOpen.classList.add('hidden');
  });

  menuClose.addEventListener('click', () => {
    menuBtn.classList.remove('menu-show');
    menuHtml.classList.remove('open');
    menuOpen.classList.remove('hidden');
  });
}

// main-moji
function showElementAnimation() {
  var element = document.getElementsByClassName('main-contents-fuwa');
  if (!element) return; // 要素がなかったら処理をキャンセル

  var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for (var i = 0; i < element.length; i++) {
    var elemClientRect = element[i].getBoundingClientRect();
    var elemY = scrollY + elemClientRect.top;
    if (scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('main-contents-show');
    } else if (scrollY + windowH < elemY) {
      // 上にスクロールして再度非表示にする場合はこちらを記述
      element[i].classList.remove('main-contents-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);
