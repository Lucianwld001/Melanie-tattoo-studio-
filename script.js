const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");
const bookingForm = document.getElementById("booking-form");
const formMessage = document.getElementById("form-message");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(bookingForm);
    const name = formData.get("name");
    const service = formData.get("service");
    const date = formData.get("date");
    const time = formData.get("time");

    formMessage.textContent =
      `Thanks, ${name}! Your ${service} request for ${date} at ${time} has been received. Melanie will contact you soon.`;

    bookingForm.reset();
  });
}