const header = document.querySelector("[data-header]");

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const contactWidget = document.querySelector("[data-contact-widget]");
const contactToggle = contactWidget?.querySelector(".contact-toggle");
const ageGate = document.querySelector("[data-age-gate]");
const ageConfirm = document.querySelector("[data-age-confirm]");
const ageDecline = document.querySelector("[data-age-decline]");

contactToggle?.addEventListener("click", () => {
  const isOpen = contactWidget.classList.toggle("is-open");
  contactToggle.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  if (!contactWidget || contactWidget.contains(event.target)) return;
  contactWidget.classList.remove("is-open");
  contactToggle?.setAttribute("aria-expanded", "false");
});

if (ageGate && localStorage.getItem("maxyieldAgeConfirmed") === "yes") {
  ageGate.classList.add("is-hidden");
}

ageConfirm?.addEventListener("click", () => {
  localStorage.setItem("maxyieldAgeConfirmed", "yes");
  ageGate?.classList.add("is-hidden");
});

ageDecline?.addEventListener("click", () => {
  window.location.href = "https://www.google.com/";
});
