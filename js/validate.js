function validateForm() {
  const consentCheckbox = document.getElementById("consent");
  if (!consentCheckbox.checked) {
    alert("Вы должны согласиться на обработку персональных данных.");
    return false;
  }
  return true;
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
      alert("Сообщение было отправлено. Спасибо!");
    }
  });
