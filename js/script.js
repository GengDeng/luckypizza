window.onscroll = function showNav() {
  let nav = document.querySelector(".header__nav");
  let basket = document.querySelector(".header__basket");
  
  if (window.pageYOffset > 100) {
    nav.classList.add("header__nav-fixed");
    basket.classList.add("header__basket-fixed");
  } else {
    nav.classList.remove("header__nav-fixed");
    basket.classList.remove("header__basket-fixed");
  }
};

