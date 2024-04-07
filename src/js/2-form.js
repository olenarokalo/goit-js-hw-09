const form = document.querySelector('.feedback-form');
const messageInfo = form.elements.message;
const emailInfo = form.elements.email;

const localStorageKey = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(localStorageKey));
if (savedData) {
  messageInfo.value = savedData.message;
  emailInfo.value = savedData.email;
}

messageInfo.addEventListener('input', event => {
  const savedData = JSON.stringify({
    email: emailInfo.value,
    message: messageInfo.value,
  });
  localStorage.setItem(localStorageKey, savedData);
});

emailInfo.addEventListener('input', event => {
  const savedData = JSON.stringify({
    email: emailInfo.value,
    message: messageInfo.value,
  });
  localStorage.setItem(localStorageKey, savedData);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (messageInfo.value && emailInfo.value) {
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});
