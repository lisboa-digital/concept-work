"use strict";

(function () {
  // themes/lisboa-digital/assets/scripts/foreach_polyfill.js
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  if (window.HTMLCollection && !HTMLCollection.prototype.forEach) {
    HTMLCollection.prototype.forEach = Array.prototype.forEach;
  } // themes/lisboa-digital/assets/scripts/breakpoints.js


  var breakpoints = {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px"
  }; // themes/lisboa-digital/assets/scripts/partials/site-header/lang.js

  function siteHeader__lang() {
    var langs = document.querySelectorAll(".site-header__lang");

    function handleResize(e) {
      var dataSrc = window.matchMedia("(min-width: " + breakpoints.lg + ")").matches ? "name" : "tag";
      langs.forEach(function (lang2) {
        lang2.innerHTML = lang2.getAttribute("data-lang-" + dataSrc);
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize(null);
  }

  siteHeader__lang(); // themes/lisboa-digital/assets/scripts/partials/site-header/nav.js

  function siteHeader__nav() {
    var toggleBtn = document.querySelector(".site-header__toggle-nav-btn");
    var nav2 = document.querySelector(".site-header__nav");

    function toggleNav(e) {
      nav2.classList.toggle("site-header__nav--open");
    }

    function handleResize(e) {
      if (window.matchMedia("(min-width: " + breakpoints.lg + ")").matches) {
        nav2.classList.remove("site-header__nav--open");
      }
    }

    toggleBtn.addEventListener("click", toggleNav);
    window.addEventListener("resize", handleResize);
    handleResize(null);
  }

  siteHeader__nav(); // main.js
})();

