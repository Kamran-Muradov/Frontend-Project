"use strict";

let navHeaders = document.querySelectorAll(".navbar-collapse .nav-item");
let navSubmenus = document.querySelectorAll(".home-submenu");

let firstNavElem = document.querySelector(
  ".navbar-collapse .nav-item:first-child"
);
let firstNavSubmenu = document.querySelector(".home-submenu");
let headerElem = document.querySelector("header");
let sticky = headerElem.offsetTop;
let searchInput = document.querySelector(".search-area input");

navHeaders.forEach(navHeader => {
  navHeader.addEventListener("mouseover", function () {
    for (const item of navSubmenus) {
      if (item.getAttribute("data-id") == navHeader.getAttribute("data-id")) {
        item.classList.add("active");
      }
    }
  });
});


navHeaders.forEach(navHeader => {
  navHeader.addEventListener("mouseleave", function () {
    for (const item of navSubmenus) {
      if (item.getAttribute("data-id") == navHeader.getAttribute("data-id")) {
        item.classList.remove("active");
        item.addEventListener("mouseover", function () {
          item.classList.remove("active");
        });
      }
    }
  });
});



// firstNavElem.addEventListener("mouseover", function () {
//   firstNavSubmenu.classList.add("active");
// });

// firstNavElem.addEventListener("mouseleave", function () {
//   firstNavSubmenu.classList.remove("active");
// });

// firstNavSubmenu.addEventListener("mouseover", function () {
//   this.classList.add("active");
// });

// firstNavSubmenu.addEventListener("mouseleave", function () {
//   this.classList.remove("active");
// });

window.onscroll = function () {
  changeHeaderBackground();
};

function changeHeaderBackground() {
  if (window.scrollY > sticky) {
    headerElem.style.backgroundColor = "white";
    searchInput.style.backgroundColor = "#edeef3";
  } else {
    headerElem.style.backgroundColor = "#edeef3";
    searchInput.style.backgroundColor = "white";
  }
}
