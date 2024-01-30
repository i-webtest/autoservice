'use strict';

const form = document.querySelector('.form');
const fromFieldsets = document.querySelectorAll('.form__fieldset');
const formBtnPrev = document.querySelector('.form__btn_prev');
const formBtnNext = document.querySelector('.form__btn_next');
const formBtnSubmit = document.querySelector('.form__btn_submit');

let currentStep = 0;

const updateFieldsetVisibility = () => {
  for (let i = 0; i < fromFieldsets.length; i++) {
    if (i === currentStep) {
      fromFieldsets[i].classList.add('form__fieldset_active');
    } else {
      fromFieldsets[i].classList.remove('form__fieldset_active');
    }
  }

  if (currentStep === 0) {
    formBtnPrev.style.display = 'none';
    formBtnNext.style.display = '';
    formBtnSubmit.style.display = 'none';
  } else if (currentStep === fromFieldsets.length - 1) {
    formBtnPrev.style.display = '';
    formBtnNext.style.display = 'none';
    formBtnSubmit.style.display = '';
  } else {
    formBtnPrev.style.display = '';
    formBtnNext.style.display = '';
    formBtnSubmit.style.display = 'none';
  }
};

formBtnNext.addEventListener('click', () => {
  if (currentStep < fromFieldsets.length - 1) {
    currentStep += 1;
    updateFieldsetVisibility();
  }
});

formBtnPrev.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep -= 1;
    updateFieldsetVisibility();
  }
});

updateFieldsetVisibility();

formBtnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
});
