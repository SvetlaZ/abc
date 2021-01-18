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

function formAddError(input) {
  input.parentElement.classList.add('_error');
  input.classList.add('_error');
}

function formRemoveError(input) {
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error');
}

function telTest(input) {
  return !/\+?\d{1}[(]\d{3}[)]\d{3}[-]\d{2}[-]\d{2}/.test(input.value);
}

function formValidate(form) {
  let error = 0;
  let formReq = document.querySelectorAll('._req');
console.log('formReq: ', formReq);
  for (let i = 0; i < formReq.length; i += 1) {
    const input = formReq[i];
    formRemoveError(input);

    if (input.classList.contains('_tel')) {
      if (telTest(input)) {
        formAddError(input);
        error += 1;
      }
    } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
      formAddError(input);
      error += 1;
    } else if (input.value === '') {
      formAddError(input);
      error += 1;
    }
  }
  console.log('error: ', error);
}

const form = document.getElementById('form');

async function formSend(e) {
  e.preventDefault();
  
  let error = formValidate(form);
  
}

form.addEventListener('submit', formSend);