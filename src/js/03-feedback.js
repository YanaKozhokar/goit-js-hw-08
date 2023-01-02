const throttle = require('lodash.throttle');

const emailRef = document.querySelector('input[name="email"]');
const textareaRef = document.querySelector('textarea[name="message"]');
const formInputHandler = document.querySelector('.feedback-form');

populateInputs();

formInputHandler.addEventListener('input', throttle(onFormInputSave, 500));
formInputHandler.addEventListener('submit', onFormSubmit);

function populateInputs() {
  const savedObj = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedObj) {
    emailRef.value = savedObj.email;
    textareaRef.value = savedObj.message;
  }
}

function onFormInputSave(event) {
  const obj = { email: emailRef.value, message: textareaRef.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
