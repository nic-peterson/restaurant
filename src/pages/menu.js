const menu = function () {
  const content = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.setAttribute("class", "menu");
  menu.textContent = "Menu";
  content.appendChild(menu);
};

export default menu;
