const initMenu = () => {
  let header = document.querySelector(".header");
  let toggle = document.querySelector(".header__toggle");

  header.classList.remove("header--nojs");

  toggle.addEventListener("click", function () {
    if (header.classList.contains("header--closed")) {
      header.classList.remove("header--closed");
      header.classList.add("header--opened");
    } else {
      header.classList.add("header--closed");
      header.classList.remove("header--opened");
    }
  });
};
const initMap = () => {
  const map = L.map("map").setView([59.9684, 30.3176], 17);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const iconOptions = {
    iconUrl: "img/map-cursor.svg",
    iconSize: [38, 50],
  };

  const customIcon = L.icon(iconOptions);

  let markerOptions = {
    icon: customIcon,
  };

  const marker = L.marker({ lat: 59.9684, lng: 30.3176 }, markerOptions);

  marker.addTo(map);
};

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  initMap();
  initMenu();
});
