window.onscroll = function showNav() {
  let escort = document.querySelector(".header__escort");
 let nav = document.querySelector(".header__nav");
 let basket = document.querySelector(".header__basket");
  if (window.pageYOffset > 100) {
    escort.classList.add("header__escort-fixed");
    nav.style.margin = "auto";
    basket.style.margin = "auto";
  } else {
    escort.classList.remove("header__escort-fixed");
    nav.style.margin = "auto auto 0 auto";
    nav.style.marginTop = "auto";
  }
};
