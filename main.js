const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 36) {
    navbar.classList.add("active");
  } else if (window.scrollY < 36) {
    navbar.classList.remove("active");
  }
});
