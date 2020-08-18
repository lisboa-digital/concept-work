AFRAME.registerComponent("location-item", {
  init: function () {
    this.el.addEventListener("click", (e) => {
      var popup = document.querySelector(".location-popup");
      var popupTitle = document.querySelector(".location-popup__title");
      var popupAddress = document.querySelector(".location-popup__address");
      var popupLink = document.querySelector(".location-popup__link");
      popupTitle.innerHTML = e.target.attributes.title.value;
      popupAddress.innerHTML = e.target.attributes.address.value;
      popupLink.href =
        "https://www.google.com/maps?q=" +
        e.target.attributes.latitude.value +
        "," +
        e.target.attributes.longitude.value;
      popup.style.display = "block";
    });
  },
});

window.onload = function () {
  document
    .querySelector(".location-popup")
    .addEventListener("click", function (e) {
      var content = document.querySelector(".location-popup__content");
      if (e.target != content) {
        e.currentTarget.style.display = "none";
      }
    });
};
