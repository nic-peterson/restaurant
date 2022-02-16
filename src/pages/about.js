import createCard from "../functions/cardGenerator";
import Adam from "../assets/adam.jpeg";
import Tom from "../assets/tom.jpeg";
import "../style.css";

const about = function () {
  const content = document.querySelector("#content");
  const about = document.createElement("div");
  about.setAttribute("class", "about");

  // Create owner 1 picture
  const adamPic = new Image();
  adamPic.src = Adam;

  // Create owner 2 picture
  const tomPic = new Image();
  tomPic.src = Tom;

  // arry of owner objects 
  const owners = [
    {
      name: "Chef Adam Rosenblum",
      img: adamPic.src,
      desc: `Chef Adam opened Causwells in 2014`,
      id: "owner-adam",
    },
    {
      name: "Tom Patella",
      img: tomPic.src,
      desc: `Tom is a former art teacher`,
      id: "owner-tom",
    },
  ];

  // Loop through array of owner objects
  owners.forEach(elt => {
    // create an html card object for each owner
    const owner = createCard(elt);
    // append each html card object to the about dive.
    about.appendChild(owner);
  })

  content.appendChild(about);
};

export default about;
