import about from "./about";
import nav from "./nav";

const intialLoad = function () {
  const content = document.querySelector("#content");
  const navBar = nav;
  content.appendChild(navBar());
};

export default intialLoad;
