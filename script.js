window.addEventListener("load", SidenVises);

const knap = document.querySelector("#burger_knap");
const links = document.querySelector(".navbar_links");

function SidenVises() {
  console.log("SidenVises");
  knap.addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggleMenu");
  links.classList.toggle("skjult");
}
