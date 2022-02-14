const createCard = function(obj) {
    const {name, img, desc, id} = obj;
    const card = document.createElement("div")
    card.setAttribute("class", "card");
    card.setAttribute("id", id);

    card.innerHTML=`<div class="name">${name}</div>
    <img src="${img}">
    <div class="desc">${desc}</div>`;

    return card;
}

export default createCard;