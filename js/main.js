document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('formSuccess');

  if (form && successMessage) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      successMessage.classList.remove('d-none');
      form.reset();
    });
  }
});
