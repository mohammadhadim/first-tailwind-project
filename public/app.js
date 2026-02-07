"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;

      // Toggle the display of the content
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        // Close other open sections
        document.querySelectorAll(".accordion-content").forEach((item) => {
          item.style.display = "none";
        });
        content.style.display = "block";
      }
    });
  });
});

// mobile navigation

const btnNav = document.querySelector(".btn-mobile-nav");
const navEl = document.querySelector(".nav-sec");

btnNav.addEventListener("click", function () {
  navEl.classList.toggle("nav-open");
});
