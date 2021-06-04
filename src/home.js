function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const burgerImage = document.createElement("img");
  burgerImage.src = "images/burger.jpg";
  burgerImage.alt = "Burger";

  home.appendChild(createText("You haven't had a burger like ours"));
  home.appendChild(burgerImage);
  home.appendChild(createText("Made with 100% locally sourced products"));
  home.appendChild(createText("12 oz of real grass-fed beef"));

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