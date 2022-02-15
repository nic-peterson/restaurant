import createCard from "../functions/cardGenerator";
import Adam from "../assets/adam.jpeg";
import Tom from "../assets/tom.jpeg";
import "../style.css";


const about = function () {
  const content = document.querySelector("#content");
  const about = document.createElement("div");
  about.setAttribute("class", "about");
  
  const adamPic = new Image();
  adamPic.src = Adam;

  const owner1 = {
    name: "Chef Adam Rosenblum",
    img: adamPic.src,
    desc: `Chef Adam opened Causwells in 2014`,
    id: "owner-adam"
  }
  
  const owner1Card = createCard(owner1);

  const tomPic = new Image();
  tomPic.src = Tom;

  const owner2 = {
    name: "Tom Patella",
    img: tomPic.src,
    desc: `Tom is a former art teacher`,
    id: "owner-tom"
  }

  const owner2Card = createCard(owner2);
  
  
  about.appendChild(owner1Card);
  about.appendChild(owner2Card);

  content.appendChild(about);
};

export default about;
