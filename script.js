// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

// Close the mobile menu after choosing a section
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

// Show the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Demo contact form: no server is connected
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const visitorName = document.getElementById("name").value.trim();
  formMessage.textContent = `Thank you, ${visitorName}! Your demo message is ready.`;
  contactForm.reset();
});
