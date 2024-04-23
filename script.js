const menuOpen = document.querySelector(".open-menu");

const menuClose = document.querySelector(".close-menu");

const sideBar = document.querySelector(".sidebar-container");

const homePage = document.querySelector(".main-container");

const featuresMenu = document.querySelector(".features-menu");

const featuresOptions = document.querySelector(".features-options");

const companyMenu = document.querySelector(".company-menu");

const companyOptions = document.querySelector(".company-options");

const blackSpace = document.querySelector(".black");

menuClose.addEventListener("click", function () {
  sideBar.classList.add("hidden");
  //   homePage.classList.remove("black");
  blackSpace.classList.add("hidden");
});

menuOpen.addEventListener("click", function () {
  sideBar.classList.remove("hidden");
  //   homePage.classList.add("black");
  blackSpace.classList.remove("hidden");
});

featuresMenu.addEventListener("click", function () {
  featuresOptions.classList.toggle("hidden");
});
companyMenu.addEventListener("click", function () {
  companyOptions.classList.toggle("hidden");
});
