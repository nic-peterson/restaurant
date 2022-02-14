import { capitalizeFirstLetter } from "./helperFunctions";
import "../style.css";

const nav = function () {
  const optionsArr = ['about', 'menu', 'contact'];

  const nav = document.createElement("div");
  nav.setAttribute("id", "nav");

  optionsArr.forEach(elt => {
    const element = document.createElement("div");
    element.setAttribute("id", `nav-${elt}`);
    element.setAttribute("class", "nav-item");
    element.textContent = capitalizeFirstLetter(elt);
    nav.appendChild(element);
  })
  
  return nav;
};

export default nav;
