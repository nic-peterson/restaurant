const createCard = function(obj) {
    const {name, img, desc, id} = obj;
    const card = document.createElement("div")
    card.setAttribute("class", "card");
    card.setAttribute("id", id);

    const nameDiv = document.createElement("div");
    nameDiv.setAttribute("class", "card-name");
    nameDiv.textContent = `${name}`;

    const imgDiv = document.createElement("img");
    imgDiv.setAttribute("class", "card-img")
    imgDiv.src = `${img}`

    const descDiv = document.createElement("div");
    descDiv.setAttribute("class", "card-desc");
    descDiv.textContent = `${desc}`;

    card.appendChild(nameDiv);
    card.appendChild(imgDiv);
    card.appendChild(descDiv)

    return card;
}

export default createCard;