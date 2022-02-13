const render = function () {
  const content = document.querySelector("#content");
  content.style = "";
  while (content.children.length > 2) {
    content.children[2].remove();
  }
};

export default render;
