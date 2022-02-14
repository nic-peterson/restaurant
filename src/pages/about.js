import createCard from "../functions/cardGenerator";
import Adam from "../assets/adam.jpeg";
import Tom from "../assets/tom.jpeg";
import "../style.css";

const about = function () {
  const content = document.querySelector("#content");
  const about = document.createElement("div");
  
  const adamPic = new Image();
  adamPic.src = Adam;

  const owner1 = {
    name: "Chef Adam Rosenblum",
    img: adamPic,
    desc: `A native of Maryland, Chef Adam opened Causwells in 2014 and is the owner of Alba Ray’s, a creole brunch spot in San Francisco’s Mission neighborhood.`,
    id: "owner-adam"
  }
  
  const owner1Card = createCard(owner1);

  const tomPic = new Image();
  tomPic.src = Tom;

  const owner2 = {
    name: "Tom Patella",
    img: tomPic,
    desc: `A former art teacher from Santa Clarita, California, owner Tom Patella has always held a passion for restaurants.`,
    id: "owner-tom"
  }

  const owner2Card = createCard(owner2);
  
  about.setAttribute("class", "about");
  about.appendChild(owner1Card);
  about.appendChild(owner2Card);

  content.appendChild(about);
};

export default about;
