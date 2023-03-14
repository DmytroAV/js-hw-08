
// Завдання 3 - форма зворотного зв'язку
// HTML містить розмітку форми.
// Напиши скрипт, який буде зберігати значення полів у локальне сховище,
// коли користувач щось друкує.

const throttle = require("lodash.throttle");

// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js.
// Розбий його на декілька підзавдань:

// 1. Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт
// з полями email і message, у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок "feedback-form-state".
// 2. Під час завантаження сторінки перевіряй стан сховища,
// і якщо там є збережені дані, заповнюй ними поля форми.
// В іншому випадку поля повинні бути порожніми.
// 3. Під час сабміту форми очищуй сховище і поля форми,
// а також виводь у консоль об'єкт з полями email,
// message та їхніми поточними значеннями.
// 4. Зроби так, щоб сховище оновлювалось не частіше,
// ніж раз на 500 мілісекунд. Для цього додай до проекту і
// використовуй бібліотеку lodash.throttle.

const formFeedback = document.querySelector('.feedback-form');
console.log('formFeedback :>> ', formFeedback);

formFeedback.addEventListener('input', throttle(handleInputValue, 500));
formFeedback.addEventListener('submit', handleSubmitFormFeedback);

const formData = {};

function handleInputValue(e) {
  formData[e.target.name] = e.target.value;
  console.log('formData :>> ', formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleSubmitFormFeedback(e) {
  e.preventDefault();
  const formLocalStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log('formLocalStorage :>> ', formLocalStorage);
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();