"use strict";

let navHeaders = document.querySelectorAll(".navbar-collapse .nav-item");
let navHeaderList = document.querySelectorAll(
  ".navbar-collapse .nav-item .nav-link"
);
let category = document.querySelector(".categories span");
let headerLogo = document.querySelector(".header-left img");
let navSubmenus = document.querySelectorAll(".submenu");
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

window.onscroll = function () {
  changeHeaderBackground();
};

function changeHeaderBackground() {
  if (window.scrollY > sticky) {
    headerElem.style.backgroundColor = "white";
    searchInput.style.backgroundColor = "#edeef3";
    navHeaderList.forEach(item => {
      item.style.color = "black";
      item.style.borderColor="black";
    });
    category.style.color = "black";
    headerLogo.setAttribute("src", "./assets/images/logo.png");
  } else {
    headerElem.style.backgroundColor = "transparent";
    searchInput.style.backgroundColor = "white";
    navHeaderList.forEach(item => {
      item.style.color = "white";
      item.style.borderColor="white";

    });
    category.style.color = "white";
    headerLogo.setAttribute("src", "./assets/images/logo-2.png");
  }
}
