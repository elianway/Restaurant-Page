function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const tagLine = document.createElement("p");
  tagLine.textContent = "Over the river and through the woods...";

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "123-456-7890";

  const mapImage = document.createElement("img");
  mapImage.src = "images/map.png"
  mapImage.alt = "Georgetown Cupcake Map Location";

  contact.appendChild(tagLine);
  contact.appendChild(phoneNumber);
  contact.appendChild(mapImage);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
};

export default loadContact;