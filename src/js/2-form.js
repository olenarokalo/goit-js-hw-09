const form = document.querySelector(`.feedback-form`);
const messageInfo = form.elements.message;
const emailInfo = form.elements.email;

const localStorageMessage = 'message';
const localStorageEmail = 'email';

// =========== Інпут з повідомленням ==================

messageInfo.value = localStorage.getItem(localStorageMessage) ?? '';

messageInfo.addEventListener('input', evt => {
  localStorage.setItem(localStorageMessage, evt.target.value);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageMessage);
  form.reset();
});

//  ============== Інпут з поштою =================

emailInfo.value = localStorage.getItem(localStorageEmail) ?? '';

emailInfo.addEventListener('input', evt => {
  localStorage.setItem(localStorageEmail, evt.target.value);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(evt.target.elements.email.value);
  localStorage.removeItem(localStorageEmail);
  form.reset();
});
