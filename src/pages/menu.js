import createCard from "../functions/cardGenerator";

const menu = function () {
  const content = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.setAttribute("class", "menu");
  const menuTitle = document.createElement("div");
  menuTitle.textContent = "Menu";
  menu.appendChild(menuTitle);

  const menuContainer = document.createElement("div");

  const chicken = {
    name: "CRISPY CHICKEN $15",
    img: "./assets/chicken.jpeg",
    desc: "roasted garlic aioli, pickle, cilantro slaw",
    id: "menu-chicken",
  };
  const americana = {
    name: "AMERICANA BURGER $20",
    img: "./assets/americana.jpeg",
    desc: "american cheese, causwells sauce, lettuce, pickle, onion",
    id: "menu-americana",
  };
  const salad = {
    name: "MELON & HERB SALAD $12",
    img: "./assets/melon.jpeg",
    desc: "melon, cucumber, queso fresco",
    id: "menu-salad",
  };
  const ricotta = {
    name: "HOUSE MADE RICOTTA $14",
    img: "./assets/ricotta.jpeg",
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
