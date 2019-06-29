// Select DOM Items

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItem = document.querySelectorAll(".nav-item");

// Set initial State

let showMenu = false;

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuButton.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItem.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuButton.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItem.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}
