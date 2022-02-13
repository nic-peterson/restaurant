const about = function () {
  const content = document.querySelector("#content");
  const about = document.createElement("div");
  about.setAttribute("class", "about");
  about.textContent = "About";
  content.appendChild(about);
};

export default about;
