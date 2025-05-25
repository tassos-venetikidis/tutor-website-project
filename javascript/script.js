// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenuItems = document.querySelector(".navbar .mobile-menu-items");

  hamburgerButton.addEventListener("click", () => {
    mobileMenuItems.classList.toggle("active");
  });
});

// Change navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (this.window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});
