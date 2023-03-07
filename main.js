// Module imports

import { concat } from "./modules/01-contact.js";
import { every } from "./modules/02-every.js";
import { fill } from "./modules/03-fill.js";

// DOM Elements

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem) => {
  navItem.id = navItem.innerHTML;

  // Click event listener
  navItem.onclick = () => {
    switch (navItem.id) {
      case "concat":
        toggleActive(navItem);
        concat();
        break;
      case "every":
        toggleActive(navItem);
        every();
        break;
      case "fill":
        toggleActive(navItem);
        fill();
        break;
      case "filter":
        toggleActive(navItem);
        filter();
        break;
      case "find":
        toggleActive(navItem);
        find();
        break;
      case "findIndex":
        toggleActive(navItem);
        findIndex();
        break;
      case "forEach":
        toggleActive(navItem);
        forEach();
        break;
      case "every":
        toggleActive(navItem);
        every();
        break;
      default:
        break;
    }
  };
});

// Utility functions

function toggleActive(el) {
  document
    .querySelectorAll(".nav-item")
    .forEach((navItem) => navItem.classList.remove("active"));
  el.classList.add("active");
}
