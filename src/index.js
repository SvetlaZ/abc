import './style.scss';

const animItems = document.querySelectorAll('._anim-items');

function offset(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

function animOnScroll() {
  for (let i = 0; i < animItems.length; i += 1) {
    const animItem = animItems[i];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

    const animItemPoint = window.innerHeight - animItemHeight / animStart;

    if ((pageYOffset > animItemOffset - animItemPoint)
    && pageYOffset < (animItemOffset + animItemHeight)) {
      animItem.classList.add('_active');
    } else {
      animItem.classList.remove('_active');
    }
  }
}

if (animItems.length) {
  window.addEventListener('scroll', animOnScroll);
  animOnScroll();
}
