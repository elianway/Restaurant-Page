function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "The Vermonter",
      "Bacon, Fried Egg, Cheddar, Caramelized Onion"
    )
  );

  menu.appendChild(
    createMenuItem(
      "The Vermonter",
      "Bacon, Fried Egg, Cheddar, Caramelized Onion"
    )
  );

  menu.appendChild(
    createMenuItem(
      "The Vermonter",
      "Bacon, Fried Egg, Cheddar, Caramelized Onion"
    )
  );

  menu.appendChild(
    createMenuItem(
      "The Vermonter",
      "Bacon, Fried Egg, Cheddar, Caramelized Onion"
    )
  );

  menu.appendChild(
    createMenuItem(
      "The Vermonter",
      "Bacon, Fried Egg, Cheddar, Caramelized Onion"
    )
  );

  menu.appendChild(
    createMenuItem(
      "The Vermonter",
      "Bacon, Fried Egg, Cheddar, Caramelized Onion"
    )
  );

  menu.appendChild(
    createMenuItem(
      "The Vermonter",
      "Bacon, Fried Egg, Cheddar, Caramelized Onion"
    )
  );

  menu.appendChild(
    createMenuItem(
      "The Vermonter",
      "Bacon, Fried Egg, Cheddar, Caramelized Onion"
    )
  );

  return menu;
}

function createMenuItem(name, set) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const itemName = document.createElement("h2");
  itemName.textContent = name;

  const itemSet = document.createElement("p");
  itemSet.textContent = set;

  menuItem.appendChild(itemName);
  menuItem.appendChild(itemSet);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;