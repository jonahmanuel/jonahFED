
  //  ALLE ELEMENTEN SELECTEREN


// Header (voor scroll verbergen/tonen) 
const header = document.querySelector("header");

// Knop om het menu te openen
const openButton = document.querySelector(
  "header > nav > ul:first-of-type li:first-of-type button"
);

//  Het menu dat uitschuift 
const menu = document.querySelector("header > nav > ul:nth-of-type(2)");

/* Sluit-knop in het menu */
const closeButton = document.querySelector(
  "header > nav > ul:nth-of-type(2) li:first-of-type button"
);

// Scroll positie bijhouden 
let lastScrollY = window.scrollY;



// eventlisteners koppelen

openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
window.addEventListener("keydown", sluitMetEscape);
window.addEventListener("scroll", toonOfVerbergHeader);


 
// functies


function openMenu() {
  menu.classList.add("toonMenu");
  openButton.setAttribute("aria-expanded", "true");

  // pagina mag niet meer scrollen
  document.body.classList.add("menu-open");
}

// menu sluiten
function closeMenu() {
  menu.classList.remove("toonMenu");
  openButton.setAttribute("aria-expanded", "false");

  // scrollen weer toestaan
  document.body.classList.remove("menu-open");
}

// sluiten met esc 
function sluitMetEscape(event) {
  if (event.key === "Escape") {
    closeMenu();
  }
}

// header wel of niet te zien bij scrollen.
function toonOfVerbergHeader() {
  if (window.scrollY > lastScrollY) {
    header.setAttribute("data-hidden", "true");
  }

  // omhoog scrollen dan weer tonen
  if (window.scrollY < lastScrollY) {
    header.removeAttribute("data-hidden");
  }

  // nieuwe positie onthouden
  lastScrollY = window.scrollY;
}