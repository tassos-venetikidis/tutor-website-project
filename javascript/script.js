document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenuItems = document.querySelector(".navbar .mobile-menu-items");

  hamburgerButton.addEventListener("click", () => {
    mobileMenuItems.classList.toggle("active");
  });
});
