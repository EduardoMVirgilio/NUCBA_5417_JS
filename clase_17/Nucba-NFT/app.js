// Init Set Up
var catalogo = [];
var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
var filtro = null;
var page = 1;

// Elementos del DOM
const listProducts = document.querySelector("#products > ul");
const btnMore = document.querySelector("#btnMore");
const cart = document.querySelector("#cart");
const listCart = document.querySelector("#cart > ul");
const navbar = document.querySelector("#navbar");
const btnMenu = document.querySelector("#btnMenu");
const btnCarrito = document.querySelector("#btnCarrito");
const inputCategories = document.querySelectorAll("[ name='categoria']");

// Productos
const leerArchivo = async () => await (await fetch("/nfts.json")).json();
const mostrarProductos = () => {
  let lista = [];
  if (filtro == null) {
    lista = catalogo.slice(0, page * 3);
  } else {
    lista = catalogo.filter((producto) => producto.category == filtro);
  }
  listProducts.innerHTML = null;
  lista.forEach((producto) => listProducts.append(tarjetaProducto(producto)));
};
const tarjetaProducto = (producto) => {
  const { id, name, bid, user, category, userImg, cardImg } = producto;
  const elemento = document.createElement("li");
  const dataElemento = document.createElement("ul");
  const carritoItem = document.createElement("li");
  const carritoForm = document.createElement("form");
  const carritoButton = document.createElement("button");
  let templateImage = `<picture><img src="${cardImg}" alt="" /></picture>`;
  let templateData = `<li class="info"><h3>${name}</h3><p>Current Bid</p></li>`;
  templateData += ` <li class="user"><picture><img src="${userImg}" alt="" /></picture>
              <dl class="user_data">
                <dt>user</dt>
                <dd>@${user}</dd>
              </dl>
              <dl class="user_price">
                <dt>valor</dt>
                <dd>${bid} ETH</dd>
              </dl>
            </li>`;
  let templateCarrito = `<picture><img src="img/fire.png" alt="" /></picture><p>05:12:07</p>`;

  elemento.innerHTML = templateImage;
  dataElemento.innerHTML = templateData;
  carritoItem.classList.add("cart");
  carritoItem.innerHTML = templateCarrito;
  carritoButton.innerText = "Add";
  carritoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Acá agregamos el producto al carrito (TODO)
  });
  carritoForm.append(carritoButton);
  carritoItem.append(carritoForm);
  dataElemento.append(carritoItem);
  elemento.append(dataElemento);

  return elemento;
};
const setearFiltro = (e) => {
  filtro = e.target.value;
  let allLabels = document.querySelectorAll("label[for*='c-']");
  allLabels.forEach((label) => label.classList.remove("active"));
  let currentLabel = document.querySelector(`[for='c-${filtro}']`);
  currentLabel.classList.add("active");
  if (filtro == "todas") {
    filtro = null;
    // page = 1;
    btnMore.style.display = "flex";
  } else {
    btnMore.style.display = "none";
  }
  mostrarProductos();
};
const verMas = (e) => {
  e.preventDefault();
  page += 1;
  if (page == 5) {
    page = 5;
    btnMore.style.display = "none";
  }
  mostrarProductos();
};

catalogo = await leerArchivo();

mostrarProductos();

btnMore.addEventListener("click", verMas);

inputCategories.forEach((input) =>
  input.addEventListener("change", setearFiltro)
);

// Actions Header
btnMenu.addEventListener("click", (e) => {
  e.preventDefault();
  cart.classList.remove("active");
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  } else {
    navbar.classList.add("active");
  }
});
btnCarrito.addEventListener("click", (e) => {
  e.preventDefault();
  navbar.classList.remove("active");
  if (cart.classList.contains("active")) {
    cart.classList.remove("active");
  } else {
    cart.classList.add("active");
  }
});
