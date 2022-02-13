import about from "./about";
import nav from "./nav";

const initialLoad = function () {
  const content = document.querySelector("#content");
  const navBar = nav();
  content.appendChild(navBar);
  about();
};

export default initialLoad;
