const btnHamburger = document.querySelector("#btnHamburger");

btnHamburger.addEventListener("click", function () {
  console.log("open hamburger");

  if (btnHamburger.classList.contains("open")) {
    btnHamburger.classList.remove("open");
    btnHamburger.classList.add("close");
  } else {
    btnHamburger.classList.remove("close");
    btnHamburger.classList.add("open");
  }
});
