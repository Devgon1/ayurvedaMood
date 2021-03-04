const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const btnContactHeader = document.querySelector("#btnContactHeader");
const btnHero = document.querySelector("#btnHero");
const links = document.querySelectorAll(".header .header__links a");

//hamburguer bottom when in mobile

btnHamburger.addEventListener("click", function () {
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

const clickHandler = (e) => {
  e.preventDefault();

  const href = e.target.getAttribute("href");
  const offsetTop = window.document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });

  if (body.classList.contains("noscroll")) {
    body.classList.remove("noscroll");
    if (header.classList.contains("open")) {
      header.classList.remove("open");
    }

    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  }
};

//show more button

// const dotsArticles = document.querySelector("#dotsArticles");
// const showMoreText = document.querySelector("#showMoreText");
// const showMoreButton = document.querySelector("#showMoreButton");
// const showMore = () => {
//   if (dotsArticles.style.display === "none") {
//     dotsArticles.style.display = "inline";
//     showMoreText.style.display = "none";
//     showMoreButton.textContent = "Leer más";
//   } else {
//     dotsArticles.style.display = "none";
//     showMoreText.style.display = "inline";
//     showMoreButton.textContent = "Leer menos";
//   }
// };
// showMoreButton.addEventListener("click", showMore);
//

//modal
const modalOpenBtn = document.querySelectorAll("[data-modal-target]");
const modalCloseBtn = document.querySelectorAll("[data-close-button]");
// const overlayModal = document.querySelector(".overlayModal");
const card = document.querySelectorAll(".card");
const aTag = document.querySelectorAll("a");

const openModal = (modal) => {
  if (modal == null) return;
  body.classList.add("noscroll");
  modal.classList.add("active");
  fadeElems.forEach(function (element) {
    element.classList.remove("fade-out");
    element.classList.add("fade-in");
  });
  card.forEach(function (elem) {
    elem.classList.add("cardOverlayActive");
  });
  aTag.forEach(function (elem) {
    elem.classList.add("aOverlay");
  });
  // overlayModal.classList.add("active");
};

const closeModal = (modal) => {
  if (modal == null) return;
  body.classList.remove("noscroll");
  modal.classList.remove("active");
  fadeElems.forEach(function (element) {
    element.classList.remove("fade-in");
    element.classList.add("fade-out");
  });
  card.forEach(function (elem) {
    elem.classList.remove("cardOverlayActive");
  });
  aTag.forEach(function (elem) {
    elem.classList.remove("aOverlay");
  });

  // overlayModal.classList.remove("active");
};

modalOpenBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

modalCloseBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

// overlayModal.addEventListener("click", () => {
//   const modals = document.querySelectorAll(".modal.active");
//   modals.forEach((modal) => {
//     closeModal(modal);
//   });
// });

//EventListeners

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

const parentMobileLinks = document.querySelector("#mobileLinks");
const childMobileLinks = parentMobileLinks.querySelectorAll("a");

for (const link of childMobileLinks) {
  link.addEventListener("click", clickHandler);
}

btnContactHeader.addEventListener("click", clickHandler);
btnHero.addEventListener("click", clickHandler);

//button to top

buttonToTop = document.querySelector("#btnToTop");
window.onscroll = () => scrollFunction();
buttonToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonToTop.style.display = "block";
  } else {
    buttonToTop.style.display = "none";
  }
};

// const toTop = () => {
//   document.body.scrollTop = 0; //for safari
//   document.documentElement.scrollTop = 0; //for chrome,firefox,IE, Opera
// };
