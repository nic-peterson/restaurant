import about from "./pages/about";
import menu from "./pages/menu";
import contact from "./pages/contact";
import intialLoad from "./functions/initialLoad";
import render from "./functions/render";

intialLoad();

const aboutBtn = document.querySelector("#nav-about");
const menuBtn = document.querySelector("#nav-menu");
const contactBtn = document.querySelector("#nav-contact");

aboutBtn.addEventListener("click", function () {
  render();
  about();
});

menuBtn.addEventListener("click", function () {
  render();
  menu();
});

contactBtn.addEventListener("click", function () {
  render();
  contact();
});
