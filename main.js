AOS.init();
// Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", fixnav);

function fixnav() {
  if (window.scrollY > header.offsetHeight + 150) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};
// Typed Function
var typed = new Typed(".auto-type", {
  strings: [
    "Infotronics Engineer",
    "Embedded Software ",
    "Data Science Enthusiast",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
// Dark Mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
//qualification section
var items = document.querySelectorAll("li");

function isItemInView(item) {
  var rect = item.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isItemInView(items[i])) {
      items[i].classList.add("show");
    }
  }
}
window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tabs) => {
  tabs.addEventListener("click", () => {
    const target = document.querySelector(tabs.dataset.target);
    tabContents.forEach((tabContents) => {
      tabContents.classList.remove("qualification-active");
    });
    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tabs.classList.remove("qualification-active");
    });
    tabs.classList.add("qualification-active");
  });
});
//skills section
var swiper = new Swiper(".slide-content", {
  slidesPerView: 2,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
