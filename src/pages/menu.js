import createCard from "../functions/cardGenerator";
import "../style.css";
import Chicken from "../assets/chicken.jpeg";
import Americana from "../assets/americana.jpeg";
import Melon from "../assets/melon.jpeg";
import Ricotta from "../assets/ricotta.jpeg";

const menu = function () {
  const content = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.setAttribute("class", "menu");

  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("class", "menu-container");

  const chickenPic = new Image();
  chickenPic.src = Chicken;
  const chicken = {
    name: "CRISPY CHICKEN $15",
    img: chickenPic.src,
    desc: "roasted garlic aioli, pickle, cilantro slaw",
    id: "menu-chicken",
  };

  const americanaPic = new Image();
  americanaPic.src = Americana;
  const americana = {
    name: "AMERICANA BURGER $20",
    img: americanaPic.src,
    desc: "cheese, sauce, lettuce, pickle, onion",
    id: "menu-americana",
  };
  const melonPic = new Image();
  melonPic.src = Melon;
  const salad = {
    name: "MELON & HERB SALAD $12",
    img: melonPic.src,
    desc: "melon, cucumber, queso fresco",
    id: "menu-salad",
  };
  const ricottaPic = new Image();
  ricottaPic.src = Ricotta;
  const ricotta = {
    name: "HOUSE MADE RICOTTA $14",
    img: ricottaPic.src,
    desc: "rosemary honey, lavosh",
    id: "menu-ricotta",
  };
  const arr = [chicken, americana, salad, ricotta];
  arr.forEach((elt) => {
    const menuItem = createCard(elt);
    menuContainer.appendChild(menuItem);
  });

  menu.appendChild(menuContainer);
  content.appendChild(menu);
};

export default menu;

