const toggleVisibility = (element) => {
  element.classList.toggle("hidden");
};

const menuOpen = document.querySelector(".open-menu");
const menuClose = document.querySelector(".close-menu");
const sideBar = document.querySelector(".sidebar-container");
const blackSpace = document.querySelector(".black");

menuClose.addEventListener("click", () => {
  toggleVisibility(sideBar);
  toggleVisibility(blackSpace);
});

menuOpen.addEventListener("click", () => {
  toggleVisibility(sideBar);
  toggleVisibility(blackSpace);
});

const featuresMenu = document.querySelector(".features-menu");
const featuresOptions = document.querySelector(".features-options");

featuresMenu.addEventListener("click", () => {
  toggleVisibility(featuresOptions);
});

const companyMenu = document.querySelector(".company-menu");
const companyOptions = document.querySelector(".company-options");

companyMenu.addEventListener("click", () => {
  toggleVisibility(companyOptions);
});
