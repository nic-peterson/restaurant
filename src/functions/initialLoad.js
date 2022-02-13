import about from "../pages/about";
import nav from "./nav";

const initialLoad = function () {
  const content = document.querySelector("#content");
  const navBar = nav();
  content.appendChild(navBar);
  const logo = document.createElement("div");
  logo.setAttribute("id", "logo");
  content.appendChild(logo);
  about();
};

export default initialLoad;
