const button = document.querySelector(".toggle-nav");

button.addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("show-nav");
});
