import { breakpoints } from "../../breakpoints";

function siteHeader__nav() {
  var toggleBtn = document.querySelector(".site-header__toggle-nav-btn");
  var more = toggleBtn.getAttribute("data-more");
  var close = toggleBtn.getAttribute("data-close");
  var nav = document.querySelector(".site-header__nav");

  function toggleNavClose() {
    nav.classList.remove("site-header__nav--open");
    toggleBtn.classList.remove("site-header__toggle-nav-btn--close");
    toggleBtn.innerHTML = toggleBtn.innerHTML.replace(close, more);
  }

  function toggleNavOpen() {
    nav.classList.add("site-header__nav--open");
    toggleBtn.classList.add("site-header__toggle-nav-btn--close");
    toggleBtn.innerHTML = toggleBtn.innerHTML.replace(more, close);
  }

  function toggleNav(e) {
    if (toggleBtn.innerHTML.indexOf(more) == -1) {
      toggleNavClose();
    } else {
      toggleNavOpen();
    }
  }

  function handleResize(e) {
    if (window.matchMedia("(min-width: " + breakpoints.lg + ")").matches) {
      if (toggleBtn.innerHTML.indexOf(more) == -1) {
        toggleNavClose();
      }
    }
  }

  toggleBtn.addEventListener("click", toggleNav);
  window.addEventListener("resize", handleResize);

  handleResize(null);
}

siteHeader__nav();
