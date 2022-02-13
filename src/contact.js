const contact = function () {
  const content = document.querySelector("#content");
  const contact = document.createElement("div");
  contact.setAttribute("class", "contact");
  contact.textContent = "Contact";
  content.appendChild(contact);
};

export default contact;
