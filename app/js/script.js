const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

//hamburguer bottom when in mobile

btnHamburger.addEventListener("click", function () {
  console.log("open hamburger");

  if (header.classList.contains("open")) {
    //close hamburger menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    //open hamburger menu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

//smooth scroll to sections
const links = document.querySelectorAll(".header .header__links a");
console.log(links);

const clickHandler = (e) => {
  e.preventDefault();
  const href = e.target.getAttribute("href");

  const offsetTop = window.document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
};

for (const link of links) {
  link.addEventListener("click", clickHandler);
}
