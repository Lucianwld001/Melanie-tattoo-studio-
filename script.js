const galleryItems = [
  { title: "Fine Line Bloom", category: "fine-line", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80" },
  { title: "Blackwork Geometry", category: "blackwork", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80" },
  { title: "Symbolic Rose", category: "symbolic", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80" },
  { title: "Minimalist Script", category: "minimalist", image: "https://images.unsplash.com/photo-1521590832167-7e9b5f7403d4?auto=format&fit=crop&w=900&q=80" },
  { title: "Orchid Detail", category: "fine-line", image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80" },
  { title: "Dark Portrait", category: "blackwork", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80" },
  { title: "Moon & Stars", category: "symbolic", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80" },
  { title: "Thin Line Bird", category: "minimalist", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80" }
];

const galleryGrid = document.getElementById("gallery-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");
const bookingForm = document.getElementById("booking-form");
const formMessage = document.getElementById("form-message");

function renderGallery(filter = "all") {
  if (!galleryGrid) return;

  galleryGrid.innerHTML = "";

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  filteredItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "gallery-item";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <div class="gallery-overlay">
        <span class="gallery-label">${item.title}</span>
      </div>
    `;
    galleryGrid.appendChild(card);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderGallery(button.dataset.filter);
  });
});

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(bookingForm);
    const name = formData.get("name");
    const service = formData.get("service");
    const date = formData.get("date");
    const time = formData.get("time");

    formMessage.textContent = `Thanks, ${name}! Your ${service} request for ${date} at ${time} has been sent. Melanie will contact you by email soon.`;

    bookingForm.reset();
  });
}

renderGallery();
