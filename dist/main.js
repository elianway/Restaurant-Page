/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n  const contact = document.createElement(\"div\");\n  contact.classList.add(\"contact\");\n\n  const tagLine = document.createElement(\"p\");\n  tagLine.textContent = \"Over the river and through the woods...\";\n\n  const phoneNumber = document.createElement(\"p\");\n  phoneNumber.textContent = \"123-456-7890\";\n\n  const mapImage = document.createElement(\"img\");\n  mapImage.src = \"images/map.png\"\n  mapImage.alt = \"Georgetown Cupcake Map Location\";\n\n  contact.appendChild(tagLine);\n  contact.appendChild(phoneNumber);\n  contact.appendChild(mapImage);\n\n  return contact;\n}\n\nfunction loadContact() {\n  const main = document.getElementById(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createContact());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n  const home = document.createElement(\"div\");\n  home.classList.add(\"home\");\n\n  const homeImage = document.createElement(\"img\");\n  homeImage.src = \"images/homepage.jpg\";\n  homeImage.alt = \"Homepage\";\n\n  home.appendChild(createText(\"You haven't had a cupcake like ours!\"));\n  home.appendChild(homeImage);\n  home.appendChild(createText(\"Ten time World Cupcake Champions!\"));\n  home.appendChild(createText(\"Made with love right here in Morrisville\"));\n\n  return home;\n};\n\nfunction createText(text) {\n  const paragraph = document.createElement(\"p\");\n  paragraph.textContent = text;\n  return paragraph;\n};\n\nfunction loadHome() {\n  const main = document.getElementById(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createHome());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n  const menu = document.createElement(\"div\");\n  menu.classList.add(\"menu\");\n\n  menu.appendChild(\n    createMenuItem(\n      \"redvelvet\",\n      \"Red Velvet\",\n      \"Georgetown Cupcake’s signature cupcake – classic red velvet cupcake with a vanilla cream cheese frosting topped with a red fondant heart\"\n    )\n  );\n\n  menu.appendChild(\n    createMenuItem(\n      \"chocolatevanilla\",\n      \"Chocolate & Vanilla\",\n      \"Valrhona chocolate cupcake with a vanilla cream cheese frosting topped with French chocolate sprinkles\"\n    )\n  );\n\n  menu.appendChild(\n    createMenuItem(\n      \"vanillabirthday\",\n      \"Vanilla Birthday\",\n      \"Classic Madagascar vanilla cupcake topped with a traditional sweet vanilla buttercream frosting and rainbow sprinkles\"\n    )\n  );\n\n  menu.appendChild(\n    createMenuItem(\n      \"vanillachocolate\",\n      \"Vanilla & Chocolate\",\n      \"Classic Madagascar vanilla cupcake with a whipped Callebaut chocolate frosting topped with a fondant flower or other seasonal decoration\"\n    )\n  );\n\n  menu.appendChild(\n    createMenuItem(\n      \"chocolatebirthday\",\n      \"Milk Chocolate Birthday\",\n      \"Classic Madagascar vanilla cake topped with a milk chocolate buttercream frosting and rainbow sprinkles\"\n    )\n  );\n\n  menu.appendChild(\n    createMenuItem(\n      \"doublebirthday\",\n      \"Double Milk Chocolate Birthday\",\n      \"Valrhona chocolate cupcake topped with milk chocolate buttercream frosting and rainbow sprinkles\"\n    )\n  );\n\n  menu.appendChild(\n    createMenuItem(\n      \"chocolateganache\",\n      \"Chocolate Ganache\",\n      \"Valrhona chocolate cupcake with a thin layer of Callebaut chocolate ganache icing topped with a fondant flower or other seasonal decoration in assorted colors\"\n    )\n  );\n\n  menu.appendChild(\n    createMenuItem(\n      \"vanilla\",\n      \"Vanilla\",\n      \"Classic madagascar bourbon vanilla cupcake with a vanilla cream cheese frosting topped with a fondant flower or other seasonal decoration in assorted colors\"\n    )\n  );\n\n  return menu;\n}\n\nfunction createMenuItem(imageName, name, set) {\n  const menuItem = document.createElement(\"div\");\n  menuItem.classList.add(\"menu-item\");\n\n  const itemName = document.createElement(\"h4\");\n  itemName.textContent = name;\n\n  const itemSet = document.createElement(\"p\");\n  itemSet.textContent = set;\n\n  const itemImage = document.createElement(\"img\");\n  itemImage.src = `images/menu/${imageName}.png`;\n  itemImage.alt = `${name}`;\n\n  menuItem.appendChild(itemImage);\n  menuItem.appendChild(itemName);\n  menuItem.appendChild(itemSet);\n\n  return menuItem;\n}\n\nfunction loadMenu() {\n  const main = document.getElementById(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createHeader() {\n  const header = document.createElement(\"div\");\n  header.classList.add(\"header\");\n\n  const restaurantName = document.createElement(\"h1\");\n  restaurantName.classList.add(\"restaurant-name\");\n  restaurantName.textContent = \"Georgetown Cupcake\";\n\n  header.appendChild(restaurantName);\n  header.appendChild(createNav());\n\n  return header;\n}\n\nfunction createNav() {\n  const nav = document.createElement(\"nav\");\n\n  const homeButton = document.createElement(\"button\");\n  homeButton.classList.add(\"button-nav\");\n  homeButton.textContent = \"Home\";\n  homeButton.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains(\"active\")) return;\n    setActiveButton(homeButton);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n  });\n\n  const menuButton = document.createElement(\"button\");\n  menuButton.classList.add(\"button-nav\");\n  menuButton.textContent = \"Menu\";\n  menuButton.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains(\"active\")) return;\n    setActiveButton(menuButton);\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\n  });\n\n  const contactButton = document.createElement(\"button\");\n  contactButton.classList.add(\"button-nav\");\n  contactButton.textContent = \"Contact\";\n  contactButton.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains(\"active\")) return;\n    setActiveButton(contactButton);\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)();\n  });\n\n  nav.appendChild(homeButton);\n  nav.appendChild(menuButton);\n  nav.appendChild(contactButton);\n\n  return nav;\n}\n\nfunction setActiveButton(button) {\n  const buttons = document.querySelectorAll(\".button-nav\");\n\n  buttons.forEach((button) => {\n    if (button !== this) {\n      button.classList.remove(\"active\");\n    }\n  });\n\n  button.classList.add(\"active\");\n}\n\nfunction createMain() {\n  const main = document.createElement(\"div\");\n  main.classList.add(\"main\");\n  main.setAttribute(\"id\", \"main\");\n  return main;\n}\n\nfunction createFooter() {\n  const footer = document.createElement(\"footer\");\n  footer.classList.add(\"footer\");\n\n  const copyright = document.createElement(\"p\");\n  copyright.textContent = \"Copyright © 2021 Eli Anway\"\n\n  footer.appendChild(copyright);\n\n  return footer;\n}\n\nfunction initializeWebsite() {\n  const content = document.getElementById(\"content\");\n\n  content.appendChild(createHeader());\n  content.appendChild(createMain());\n  content.appendChild(createFooter());\n\n  setActiveButton(document.querySelector(\".button-nav\"));\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;