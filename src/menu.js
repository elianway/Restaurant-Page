function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "redvelvet",
      "Red Velvet",
      "Georgetown Cupcake’s signature cupcake – classic red velvet cupcake with a vanilla cream cheese frosting topped with a red fondant heart"
    )
  );

  menu.appendChild(
    createMenuItem(
      "chocolatevanilla",
      "Chocolate & Vanilla",
      "Valrhona chocolate cupcake with a vanilla cream cheese frosting topped with French chocolate sprinkles"
    )
  );

  menu.appendChild(
    createMenuItem(
      "vanillabirthday",
      "Vanilla Birthday",
      "Classic Madagascar vanilla cupcake topped with a traditional sweet vanilla buttercream frosting and rainbow sprinkles"
    )
  );

  menu.appendChild(
    createMenuItem(
      "vanillachocolate",
      "Vanilla & Chocolate",
      "Classic Madagascar vanilla cupcake with a whipped Callebaut chocolate frosting topped with a fondant flower or other seasonal decoration"
    )
  );

  menu.appendChild(
    createMenuItem(
      "chocolatebirthday",
      "Milk Chocolate Birthday",
      "Classic Madagascar vanilla cake topped with a milk chocolate buttercream frosting and rainbow sprinkles"
    )
  );

  menu.appendChild(
    createMenuItem(
      "doublebirthday",
      "Double Milk Chocolate Birthday",
      "Valrhona chocolate cupcake topped with milk chocolate buttercream frosting and rainbow sprinkles"
    )
  );

  menu.appendChild(
    createMenuItem(
      "chocolateganache",
      "Chocolate Ganache",
      "Valrhona chocolate cupcake with a thin layer of Callebaut chocolate ganache icing topped with a fondant flower or other seasonal decoration in assorted colors"
    )
  );

  menu.appendChild(
    createMenuItem(
      "vanilla",
      "Vanilla",
      "Classic madagascar bourbon vanilla cupcake with a vanilla cream cheese frosting topped with a fondant flower or other seasonal decoration in assorted colors"
    )
  );

  return menu;
}

function createMenuItem(imageName, name, set) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const itemName = document.createElement("h4");
  itemName.textContent = name;

  const itemSet = document.createElement("p");
  itemSet.textContent = set;

  const itemImage = document.createElement("img");
  itemImage.src = `images/menu/${imageName}.png`;
  itemImage.alt = `${name}`;

  menuItem.appendChild(itemImage);
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