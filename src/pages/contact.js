const contact = function () {
  const content = document.querySelector("#content");

  const contact = document.createElement("div");
  contact.setAttribute("class", "contact");
  contact.innerHTML = `<div class="page-title">Contact</div>
  <div class="contact-section">
    <div class="section-title">Causwells</div>
    <div class="contact-info">
        <p id="address">2346 Chestnut Street, San Francisco, CA 94123
        </p>
        <p id="phone-num">415-447-6081</p>
        <p id="email">info@causwells.com</p>
    </div>
  </div>
  <div class="hours-section">
    <div class="section-title">Hours</div>
    <div class="meal" id="dinner">
        <div class="meal-title">Dinner</div>
        <div class="meal-hours">Tuesday - Sunday 5PM - 10PM</div>
    </div>
    <div class="meal" id="brunch">
        <div class="meal-title">Brunch</div>
        <div class="meal-hours">Friday - Sunday 10AM - 3PM</div>
    </div>
    <div class="meal" id="monday">
        <div class="meal-title">Monday-CLOSED</div>
    </div>
  </div>`;
  
  /*
  // set contact div that will have two sub-containers: 
  // contactSection && hoursSection
  const contact = document.createElement("div");
  const contactInfoArr = ["2346 Chestnut Street", "San Francisco", "CA 94123"];
  contact.setAttribute("class", "contact");


  // contactSection
  const contactSection = document.createElement("div");
  contactSection.setAttribute("class", "contact-section");


  // Section title
  const contactTitle = document.createElement("div");
  contactTitle.textContent = "Contact";
  contactTitle.setAttribute("class", "title");


  // Restaurant name
  const restaurantName = document.createElement("div");
  restaurantName.textContent = "Causwells";
  restaurantName.setAttribute("class", "sub-title");

  // loop through array to add contact info like addy & phone #
  const contactInfo = document.createElement("div");
  contactInfo.setAttribute("class", "contact-info");
  contactInfoArr.forEach((elt) => {
    const contactItem = document.createElement("div");
    contactItem.setAttribute("class", "contact-info-items");
    contactItem.textContent = elt;
    contactInfo.appendChild(contactItem);
  });

  contactSection.appendChild(contactTitle);
  contactSection.appendChild(restaurantName);
  contactSection.appendChild(contactInfo);
  contact.appendChild(contactSection);
  
  // hoursSection
  const hoursSection = document.createElement("div");
  hoursSection.setAttribute("class", "hours-section")

  // section title
  const hoursTitle = document.createElement("div");
  hoursTitle.textContent = "Hours";
  hoursTitle.setAttribute("class", "sub-title");

  hoursSection.appendChild(hoursTitle);

  // Group the section into meals
  // dinner meal section
  const dinner = document.createElement("div");
  dinner.setAttribute("class", "meal");

  // dinner title
  const dinnerTitle = document.createElement("div");
  dinnerTitle.setAttribute("class", "meal-title");
  dinnerTitle.textContent = "Dinner";

  // dinner hours
  const dinnerHours = document.createElement("div");
  dinnerHours.setAttribute("class", "meal-hours");
  dinnerHours.textContent = "Tuesday - Sunday 5PM - 10PM"

  dinner.appendChild(dinnerTitle);
  dinner.appendChild(dinnerHours)
  
  // brunch section
  const brunch = document.createElement("div");
  brunch.setAttribute("class", "meal");
  
  // brunch title
  const brunchTitle = document.createElement("div");
  brunchTitle.setAttribute("class", "meal-title");
  brunchTitle.textContent = "Brunch";

  // brunch hours
  const brunchHours = document.createElement("div");
  brunchHours.setAttribute("class", "meal-hours");
  brunchHours.textContent = "Friday - Sunday 10AM - 3PM"

  brunch.appendChild(brunchTitle);
  brunch.appendChild(brunchHours);

  // monday section -- just title because closed Mondays
  const monday = document.createElement("div");
  monday.setAttribute("class", "meal");
  monday.textContent = "Monday - CLOSED";

  hoursSection.appendChild(dinner);
  hoursSection.appendChild(brunch);
  hoursSection.appendChild(monday);
  */




  /*
  contact.appendChild(contactTitle);
  contact.appendChild(restaurantName);
  contact.appendChild(contactInfo);
  */

  //contact.appendChild(hoursSection);
  content.appendChild(contact);
};

export default contact;
