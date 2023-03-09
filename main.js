// Module imports

import { concat } from "./modules/01-contact.js";
import { every } from "./modules/02-every.js";
import { fill } from "./modules/03-fill.js";
import { filter } from "./modules/04-filter.js";
import { find } from "./modules/05-find.js";
import { findIndex } from "./modules/06-findIndex.js";
import { forEach } from "./modules/07-forEach.js";
import { from } from "./modules/08-from.js";
import { map } from "./modules/09-map.js";
import { includes } from "./modules/010-includes.js";
import { indexOf } from "./modules/011-indexOf.js";
import { isArray } from "./modules/012-isArray.js";
import { join } from "./modules/013-join.js";
import { reduce } from "./modules/014-reduce.js";
import { sort } from "./modules/015-sort.js";
import { reverse } from "./modules/016-reverse.js";
import { pushAndPop } from "./modules/017-pushAndPop.js";
import { shiftAndUnshift } from "./modules/018-shiftAndUnshift.js";
import { splice } from "./modules/019-splice.js";
import { some } from "./modules/020-some.js";

// DOM Elements

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem) => {
  navItem.id = navItem.innerHTML;

  // Click event listener
  navItem.onclick = () => {
    getCode();
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
      case "from":
        toggleActive(navItem);
        from();
        break;
      case "map":
        toggleActive(navItem);
        map();
        break;
      case "includes":
        toggleActive(navItem);
        includes();
        break;
      case "indexOf":
        toggleActive(navItem);
        indexOf();
        break;
      case "isArray":
        toggleActive(navItem);
        isArray();
        break;
      case "join":
        toggleActive(navItem);
        join();
        break;
      case "reduce":
        toggleActive(navItem);
        reduce();
        break;
      case "sort":
        toggleActive(navItem);
        sort();
        break;
      case "reverse":
        toggleActive(navItem);
        reverse();
        break;
      case "pushAndPop":
        toggleActive(navItem);
        pushAndPop();
        break;
      case "shiftAndUnshift":
        toggleActive(navItem);
        shiftAndUnshift();
        break;
      case "splice":
        toggleActive(navItem);
        splice();
        break;
      case "some":
        toggleActive(navItem);
        some();
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

let code;
let clipboardBtn;

const getCode = () => {
  setTimeout(() => {
    code = document.getElementById("code").textContent;
    clipboardBtn = document.querySelector(".btn-clipboard");
    clipboardBtn.onclick = () => copyToClipboard();
  }, 300);
};

function copyToClipboard() {
  const textArea = document.createElement("textarea");
  textArea.textContent = code;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  alert("Copied to clipboard ");
}
