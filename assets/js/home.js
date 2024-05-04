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

let courseTabHeaders = document.querySelectorAll("#all-courses .tab-headers ul li");
let courseTabContents = document.querySelectorAll("#all-courses .tab-body .content");


courseTabHeaders.forEach(header => {
  header.addEventListener("click", function () {
    document.querySelector(".active-tab").classList.remove("active-tab");
    this.classList.add("active-tab");
    for (const item of courseTabContents) {
      if (item.getAttribute("data-id") == this.getAttribute("data-id")) {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
      }
    }
  });
});

let priceTabHeaders = document.querySelectorAll("#prices .tab-headers span");
let priceTabContents = document.querySelectorAll("#prices .tab-body .content");

priceTabHeaders.forEach(header => {
  header.addEventListener("click", function () {
    document.querySelector(".active-price-tab").classList.remove("active-price-tab");
    this.classList.add("active-price-tab");
    for (const item of priceTabContents) {
      if (item.getAttribute("data-id") == this.getAttribute("data-id")) {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
      }
    }
  });
});

