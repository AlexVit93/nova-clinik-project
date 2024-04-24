function validateForm() {
  const consentCheckbox = document.getElementById("consent");
  if (!consentCheckbox.checked) {
    alert("Вы должны согласиться на обработку персональных данных.");
    return false;
  }
}
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });
