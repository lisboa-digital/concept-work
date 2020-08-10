import { breakpoints } from "../breakpoints";

function filter__toggle() {
  var toggleBtn = document.querySelector(".filter__toggle-btn");
  var content = document.querySelector(".filter__form");

  function toggleContent(e) {
    toggleBtn.classList.toggle("filter__toggle-btn--open");
    content.classList.toggle("filter__form--open");

  }

  function handleResize(e) {
    if (window.matchMedia("(min-width: " + breakpoints.lg + ")").matches) {
        toggleBtn.classList.add("filter__toggle-btn--open");
        content.classList.add("filter__form--open");
    }
  }

  toggleBtn.addEventListener("click", toggleContent);
  window.addEventListener("resize", handleResize);

  handleResize(null);
}

filter__toggle();
