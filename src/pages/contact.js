import "../style.css";

const contact = function () {
  const content = document.querySelector("#content");

  const contact = document.createElement("div");
  contact.setAttribute("class", "contact");
  contact.innerHTML = `
  <div class="contact-section">
    <div class="section-title" id="restaurant-name">Causwells</div>
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
  
  content.appendChild(contact);
};

export default contact;
