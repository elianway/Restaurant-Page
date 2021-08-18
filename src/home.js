function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const homeImage = document.createElement("img");
  homeImage.src = "images/homepage.jpg";
  homeImage.alt = "Homepage";

  home.appendChild(createText("You haven't had a cupcake like ours!"));
  home.appendChild(homeImage);
  home.appendChild(createText("Ten time World Cupcake Champions!"));
  home.appendChild(createText("Made with love right here in Morrisville"));

  return home;
};

function createText(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
};

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
};

export default loadHome;