window.addEventListener("load", SidenVises);

const knap = document.querySelector("#burger_knap");
const links = document.querySelector(".navbar_links");
// const billede = document.querySelector("#billede_mig");

function SidenVises() {
  console.log("SidenVises");

  knap.addEventListener("click", toggleMenu);
  // billede.addEventListener("click", omSide);
}

// function omSide() {
//   console.log("omSide");
//   window.location.replace("om.html");
// }

function toggleMenu() {
  console.log("toggleMenu");
  links.classList.toggle("skjult");
}
