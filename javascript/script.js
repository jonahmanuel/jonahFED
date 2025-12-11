/* ============================================
   STAP 1 – ALLE ELEMENTEN SELECTEREN
============================================ */

/* Header (voor scroll verbergen/tonen) */
const header = document.querySelector("header");

/* Hamburger open-knop */
const openButton = document.querySelector(
  "header > nav > ul:first-of-type li:first-of-type button"
);

/* Het menu dat uitschuift */
const menu = document.querySelector("header > nav > ul:nth-of-type(2)");

/* Sluit-knop in het menu */
const closeButton = document.querySelector(
  "header > nav > ul:nth-of-type(2) li:first-of-type button"
);

/* Scroll positie bijhouden */
let lastScrollY = window.scrollY;



/* ============================================
   STAP 2 – EVENTLISTENERS KOPPELEN
============================================ */

/* Klik op hamburger → menu openen */
openButton.addEventListener("click", openMenu);

/* Klik op sluitknop → menu sluiten */
closeButton.addEventListener("click", closeMenu);

/* Escape → menu sluiten */
window.addEventListener("keydown", sluitMetEscape);

/* Scroll → header verbergen/tonen */
window.addEventListener("scroll", toonOfVerbergHeader);



/* ============================================
   STAP 3 – FUNCTIES DIE WORDEN UITGEVOERD
============================================ */

/* Functie: Menu openen */
function openMenu() {
  menu.classList.add("toonMenu");
  openButton.setAttribute("aria-expanded", "true");
}

/* Functie: Menu sluiten */
function closeMenu() {
  menu.classList.remove("toonMenu");
  openButton.setAttribute("aria-expanded", "false");
}

/* Functie: Sluiten met Escape */
function sluitMetEscape(event) {
  if (event.key === "Escape") {
    menu.classList.remove("toonMenu");
    openButton.setAttribute("aria-expanded", "false");
  }
}

/* Functie: Header tonen/verbergen bij scrollen */
function toonOfVerbergHeader() {
  // naar beneden scrollen → verbergen
  if (window.scrollY > lastScrollY) {
    header.setAttribute("data-hidden", "true");
  }

  // omhoog scrollen → tonen
  if (window.scrollY < lastScrollY) {
    header.removeAttribute("data-hidden");
  }

  // positie onthouden
  lastScrollY = window.scrollY;
}