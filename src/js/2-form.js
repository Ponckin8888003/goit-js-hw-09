let formData = {
  email: '',
  message: '',
};

let emailInput = document.querySelector("input[name='email']");
let messageInput = document.querySelector("textarea[name='message']");
let form = document.querySelector('.feedback-form');

form.addEventListener('input', function (event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (formData.email.trim() !== '' && formData.message.trim() !== '') {
    form.reset();
    console.log(formData);
    localStorage.clear();
    formData = {
      email: '',
      message: '',
    };
  } else {
    alert('Fill please all fields');
  }
  return;
});

let savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  formData = JSON.parse(savedData);
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}
