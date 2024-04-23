const menuOpen = document.querySelector(".open-menu");

const menuClose = document.querySelector(".close-menu");

const sideBar = document.querySelector(".sidebar-container");

const homePage = document.querySelector(".main-container");

const featuresMenu = document.querySelector(".features-menu");

const featuresOptions = document.querySelector(".features-options");

menuClose.addEventListener("click", function () {
  sideBar.classList.add("hidden");
  homePage.classList.remove("black");
});

menuOpen.addEventListener("click", function () {
  sideBar.classList.remove("hidden");
  homePage.classList.add("black");
});
