import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./assets/scss/main.scss";
import "./assets/scss/custom-bootstrap.scss";

function closeMenu() {
  const burger = document.querySelector(".burger");
  const headerMenu = document.querySelector(".header__menu");
  const body = document.body;
  const menuOverlay = document.querySelector(".menu-overlay");
  const dropendMobile = document.querySelector(".dropend-mobile");
  const dropendMobileSvg = document.querySelector(".dropend-mobile-svg");

  burger.classList.remove("active");
  headerMenu.classList.remove("active");
  body.style.overflowY = "auto";
  menuOverlay.classList.remove("visible");
  dropendMobile.classList.remove("open");
  dropendMobileSvg.classList.remove("rotate-180");
}

document.querySelector(".burger").addEventListener("click", function () {
  const burger = this;
  const headerMenu = document.querySelector(".header__menu");
  const body = document.body;
  const menuOverlay = document.querySelector(".menu-overlay");

  burger.classList.toggle("active");
  headerMenu.classList.toggle("active");

  if (burger.classList.contains("active")) {
    body.style.overflowY = "hidden";
    menuOverlay.classList.add("visible");
  } else {
    body.style.overflowY = "auto";
    menuOverlay.classList.remove("visible");
  }
});

document.querySelector(".menu-overlay").addEventListener("click", function (e) {
  const headerMenu = document.querySelector(".header__menu");
  if (!e.target.closest(".header__menu")) {
    closeMenu();
  }
});
