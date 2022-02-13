import about from "./about";
import menu from './menu';
import contact from './contact'
import nav from './nav'

const content = document.querySelector("#content");
const navBar = nav;
content.appendChild(navBar());

about();
menu();
contact();
