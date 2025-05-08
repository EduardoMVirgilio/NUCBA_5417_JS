// Array de productos
// Mostrar que propiedades tiene cada producto y que se va a hacer con ellos
const productsData = [
  {
    id: 1,
    name: "Golden Messi",
    bid: 6.89,
    user: "Robert10",
    category: "futbol",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/goldenmessi.png",
  },
  {
    id: 2,
    name: "Diego Maradona",
    bid: 5.89,
    user: "kirik8",
    category: "futbol",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/diego.png",
  },
  {
    id: 3,
    name: "L10nel Messi",
    bid: 4.89,
    user: "FD10S",
    category: "futbol",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/beardedmessi.png",
  },
  {
    id: 4,
    name: "M. Schumacher",
    bid: 3.67,
    user: "Urastream",
    category: "autos",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/schumacher.png",
  },
  {
    id: 5,
    name: "Fernando Alonso",
    bid: 4.52,
    user: "ToxicM",
    category: "autos",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/alonso.png",
  },
  {
    id: 6,
    name: "Dominic Toretto",
    bid: 7.33,
    user: "HardGold",
    category: "autos",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/toretto.png",
  },
  {
    id: 7,
    name: "Donald Trump",
    bid: 2.2,
    user: "CookieMonster",
    category: "politicos",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/trump.png",
  },
  {
    id: 8,
    name: "Xi Jinping",
    bid: 1.12,
    user: "NickyG",
    category: "politicos",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/jinping.png",
  },
  {
    id: 9,
    name: "Vladimir Putin",
    bid: 0.5,
    user: "DemolitionMan",
    category: "politicos",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/Putin.png",
  },
  {
    id: 10,
    name: "Michael Jackson",
    bid: 8.35,
    user: "LilKenny",
    category: "musica",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/jackson.png",
  },
  {
    id: 11,
    name: "Bruno Mars",
    bid: 8.65,
    user: "Sharkenetta",
    category: "musica",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/mars.png",
  },
  {
    id: 12,
    name: "Bad Bunny",
    bid: 9.29,
    user: "MachineGun",
    category: "musica",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/bunny.png",
  },
  {
    id: 13,
    name: "Keanu Reeves",
    bid: 8.27,
    user: "MrMoustache",
    category: "peliculas",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/reeves.png",
  },
  {
    id: 14,
    name: "Jason Stathan",
    bid: 5.55,
    user: "PasquSaw",
    category: "peliculas",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/stathan.png",
  },
  {
    id: 15,
    name: "Angelina Jolie",
    bid: 7.46,
    user: "CamiCrow",
    category: "peliculas",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/Jolie.png",
  },
];

/**
 * Función para dividir los productos en arrays de "size" productos.
 * Usaremos este array dividido en subarrays para manejar la paginación con el boton "ver más".
 * @param {number} size tamaño de los arrays que se van a crear al dividir los productos.
 * @returns {array} array de arrays con los productos divididos.
 */
const DivideProductsInParts = (size) => {
  let productsList = [];
  for (let i = 0; i < productsData.length; i += size)
    productsList.push(productsData.slice(i, i + size));
  return productsList;
};

//Función para dividir los productos en arrays de 6 productos y manejar la páginación
const appState = {
  products: DivideProductsInParts(6),
  currentProductsIndex: 0,
  productsLimit: DivideProductsInParts(6).length,
  activeFilter: null,
};
