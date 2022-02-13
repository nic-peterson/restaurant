import about from "./about";
import menu from "./menu";
import contact from "./contact";
import nav from "./nav";
import intialLoad from "./initialLoad";
import render from "./render";

intialLoad();

const aboutBtn = document.querySelector("#nav-about");
const menuBtn = document.querySelector("#nav-menu");
const contactBtn = document.querySelector("#nav-contact");

aboutBtn.addEventListener("click", function() {
  render();
  about();
});

menuBtn.addEventListener("click", function() {
  render();
  menu();
});

contactBtn.addEventListener("click", function() {
  render();
  contact();
});