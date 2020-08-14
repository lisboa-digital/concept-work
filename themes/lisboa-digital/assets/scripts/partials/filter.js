import { breakpoints } from "../breakpoints";

function filter__toggle() {
  var title = document.querySelector(".filter__title");
  var toggleBtn = document.querySelector(".filter__toggle-btn");
  var content = document.querySelector(".filter__form");
  var show = toggleBtn.getAttribute("data-show");
  var hide = toggleBtn.getAttribute("data-hide");

  function hideFilter() {
    content.classList.remove("filter__form--open");
    toggleBtn.classList.remove("filter__toggle-btn--open");
    toggleBtn.innerHTML = toggleBtn.innerHTML.replace(hide, show);
  }

  function showFilter() {
    content.classList.add("filter__form--open");
    toggleBtn.classList.add("filter__toggle-btn--open");
    toggleBtn.innerHTML = toggleBtn.innerHTML.replace(show, hide);
  }

  function toggleContent(e) {
    if (toggleBtn.innerHTML.indexOf(show) == -1) {
      hideFilter();
    } else {
      showFilter();
    }
  }

  function handleResize(e) {
    if (window.matchMedia("(min-width: " + breakpoints.lg + ")").matches) {
        showFilter();
    }
  }

  toggleBtn.addEventListener("click", toggleContent);
  title.addEventListener("click", toggleContent);
  window.addEventListener("resize", handleResize);

  handleResize(null);
}

filter__toggle();
