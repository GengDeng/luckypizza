window.onscroll = function showNav() {
  let nav = document.querySelector(".header__nav");
  if (window.pageYOffset > 100) {
    nav.classList.add("header__nav-fixed");
  } else {
    nav.classList.remove("header__nav-fixed");
  }
};
