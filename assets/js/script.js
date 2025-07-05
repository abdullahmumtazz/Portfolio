'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// === SIDEBAR ===
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

// === PAGE NAVIGATION ===
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

if (navLinks.length && pages.length) {
  navLinks.forEach((link, index) => {
    link.addEventListener("click", function () {
      // Remove active class from all pages and nav links
      pages.forEach(page => page.classList.remove("active"));
      navLinks.forEach(btn => btn.classList.remove("active"));

      // Add active to selected link and matching page
      this.classList.add("active");
      pages[index].classList.add("active");

      // Scroll to top of page
      window.scrollTo(0, 0);
    });
  });
}

// === CONTACT FORM VALIDATION ===
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formInputs.length && formBtn) {
  formInputs.forEach(input => {
    input.addEventListener("input", () => {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });
}



