import './style.scss';
// eslint-disable-next-line
import myswiper from './modules/swiper';

const animItems = document.querySelectorAll('._anim-items');

function offset(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

function animOnScroll() {
  for (let i = 0; i < animItems.length; i += 1) {
    const animItem = animItems[i];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

    const animItemPoint = window.innerHeight - animItemHeight / animStart;
    // eslint-disable-next-line
    if ((pageYOffset > animItemOffset - animItemPoint)
    // eslint-disable-next-line
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
// eslint-disable-next-line
function formValidate(form) {
  let error = 0;
  // eslint-disable-next-line
  let formReq = document.querySelectorAll('._req');
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
  return error;
}

const form = document.getElementById('form');

async function formSend(e) {
  e.preventDefault();

  const error = formValidate(form);
  const formData = new FormData(form);

  if (error === 0) {
    // eslint-disable-next-line
    let response = await fetch('http://sendmail', {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      // eslint-disable-next-line
      const resault = await response.json();
      form.reset();
    } else {
      // eslint-disable-next-line
      alert('Error');
    }
  } else {
    // eslint-disable-next-line
    alert('Укажите телефон в формате +7(999)888-77-66');
  }
}

form.addEventListener('submit', formSend);
const item = document.querySelectorAll('.service__item');
// eslint-disable-next-line
document.querySelector('.togglebar__items').onclick = function (event) {
  if (event.target.classList.contains('togglebar__item')) {
    document.querySelector('.togglebar__item.active').classList.remove('active');
    event.target.classList.add('active');
    const menuItem = event.target.dataset.type;

    for (let i = 0; i < item.length; i += 1) {
      const descriptionItem = item[i].dataset.description;
      item[i].classList.remove('hide');

      if (descriptionItem !== menuItem && menuItem !== 'all') {
        item[i].classList.add('hide');
      }
    }
  }
};
