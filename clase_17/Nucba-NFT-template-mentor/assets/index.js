// Contenedor de productos
const productsContainer = document.querySelector(".products-container");
// Contenedor de productos del carrito
const productsCart = document.querySelector(".cart-container");
//El total en precio del carrito
const total = document.querySelector(".total");
// El contenedor de las categorías
const categoriesContainer = document.querySelector(".categories");
// Un htmlCollection de botones de todas las categorías (mostrar el dataset)
const categoriesList = document.querySelectorAll(".category");
// Botón de ver más
const showMoreBtn = document.querySelector(".btn-load");
// Botón de comprar
const buyBtn = document.querySelector(".btn-buy");
// Botón para abrir y cerrar carrito
//Burbuja de cantidad de productos en el carrito
const cartBubble = document.querySelector(".cart-bubble");
const cartBtn = document.querySelector(".cart-label");
// Botón para abrir y cerrar menú
const menuBtn = document.querySelector(".menu-label");
// Carrito
const cartMenu = document.querySelector(".cart");
//  Menú (Hamburguesa)
const barsMenu = document.querySelector(".navbar-list");
//  Overlay para tirar facha abajo del menú hamburguesa y el cart.
const overlay = document.querySelector(".overlay");
//  Modal de agregado al carrito.
const successModal = document.querySelector(".add-modal");
//  Modal de agregado al carrito.
const deleteBtn = document.querySelector(".btn-delete");

// Seteamos el carrito , vacío o lo que este en el localStorage según corresponda, igual que en los proyectos anteriores
let cart = JSON.parse(localStorage.getItem("cart")) || [];

//Función para guardar el carrito en el localStorage
const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

/*---------------------------------------------------------------------- */
/*---------------------- Lógica de productos---------------------------- */
/*---------------------------------------------------------------------- */

/**
 * Función para crear el html de un producto
 * IMPORTANTE: Hacer hincapie en los data-attributes del botón de agregar al carrito
 * @param {object} product  Objeto con la información del producto
 * @returns  {string}  html del producto
 */
const createProductTemplate = (product) => {
  const { id, name, bid, user, userImg, cardImg } = product;
  return ` 
    <div class="product">
        <img src=${cardImg} alt=${name} />
        <div class="product-info">

            <div class="product-top">
                <h3>${name}</h3>
                <p>Current Bid</p>
            </div>

            <div class="product-mid">
                <div class="product-user">
                    <img src=${userImg} alt="user" />
                    <p>@${user}</p>
                </div>
                <span>${bid} eTH</span>
            </div>


            <div class="product-bot">
                <div class="product-offer">
                    <div class="offer-time">
                        <img src="./assets/img/fire.png" alt="" />
                        <p>05:12:07</p>
                    </div>
                    <button class="btn-add"
                    data-id='${id}'
                    data-name='${name}'
                    data-bid='${bid}'
                    data-img='${cardImg}'>Add</button>
                </div>
            </div>
        </div>
    </div>`;
};

/**
 * Función para renderizar una lista de productos
 * @param {object[]} productsList  Array de productos
 */
const renderProducts = (productsList) => {
  productsContainer.innerHTML += productsList
    .map(createProductTemplate)
    .join("");
};

/*---------------------------------------------------------------------- */
/*---------------------- Lógica de "ver más"---------------------------- */
/*---------------------------------------------------------------------- */

/**
 * Función para saber si el índice actual renderizado de la lista de productos productos es igual al límite de productos
 * @returns {boolean}  true si el índice actual de productos es igual al límite de productos (Total de subarrays en el array de productos divididos), false en caso contrario
 */
const isLastIndexOf = () => {
  return appState.currentProductsIndex === appState.productsLimit - 1;
};

/**
 * Función para renderizar más productos cuando se apreta el botón de "ver más"
 * Si luego de renderizar se alcanza el límite de productos (Total de subarrays en el array de productos divididos), se oculta el botón
 */
const showMoreProducts = () => {
  appState.currentProductsIndex += 1;
  let { products, currentProductsIndex } = appState;
  renderProducts(products[currentProductsIndex]);
  if (isLastIndexOf()) {
    showMoreBtn.classList.add("hidden");
  }
};

/**
 *  Función para mostrar u ocultar el botón de "ver más" según corresponda
 */
const setShowMoreVisibility = () => {
  if (!appState.activeFilter) {
    showMoreBtn.classList.remove("hidden");
    return;
  }
  showMoreBtn.classList.add("hidden");
};

/*---------------------------------------------------------------------- */
/*------------------------ Lógica de filtros --------------------------- */
/*---------------------------------------------------------------------- */

/**
 * Función para cambiar el estado de los botones de categorías
 * NOTA: Se utiliza el operador spread para convertir el NodeList en un array y poder utilizar el método forEach
 * @param  {string} selectedCategory  Nombre de la categoría seleccionada
 */
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};

/**
 * Función para cambiar el estado del filtro activo.
 * Recibe el botón que se apretó y guarda el dataset.category en el estado de la app como nuevo filtro actual.
 * Llama a la función changeBtnActiveState para cambiar el estado de los botones de categorías.
 * Llama a la función setShowMoreVisibility para mostrar u ocultar el botón de "ver más" según corresponda.
 * @param {object} btn  Botón que se apretó
 */
const changeFilterState = (btn) => {
  appState.activeFilter = btn.dataset.category;
  changeBtnActiveState(appState.activeFilter);
  setShowMoreVisibility(appState.activeFilter);
};

/**
 * Función para aplicar el filtro cuando se apreta un botón de categoría
 * Si el botón que se apretó no es un botón de categoría o ya está activo, no hace nada.
 * Llama a la función changeFilterState para cambiar el estado del filtro activo.
 * Limpia el html de los productos renderizados.
 * Si hay un filtro activo, llama a la función renderFilteredProducts para renderizar los productos filtrados.
 * Si se apreta el boton de todas, al no tener un dataset.category ese botón, el filtro activo se vuelve undefined y se renderizan todos los productos.
 * @param {event} event  Evento de click (usamos destructuring para tomar el target del evento)
 */
const applyFilter = ({ target }) => {
  if (!isInactiveFilterBtn(target)) return;
  changeFilterState(target);
  productsContainer.innerHTML = "";
  if (appState.activeFilter) {
    renderFilteredProducts();
    appState.currentProductsIndex = 0;
    return;
  }
  renderProducts(appState.products[0]);
};

/**
 * Función para saber si el elemento que se apretó es un botón de categoría y no está activo
 * @param {object} btn elemento que se apreto
 * @returns {boolean} true si el elemento es un botón de categoría y no está activo, false en caso contrario
 */
const isInactiveFilterBtn = (element) => {
  return (
    element.classList.contains("category") &&
    !element.classList.contains("active")
  );
};

/**
 * Función para filtrar los productos por categoría y renderizarlos.
 */
const renderFilteredProducts = () => {
  const filteredProducts = productsData.filter(
    (product) => product.category === appState.activeFilter
  );
  renderProducts(filteredProducts);
};

/*-----------------------------------------------------*/
/*--------------------Menu interface-------------------*/
/*-----------------------------------------------------*/

/**
 * Función para mostrar u ocultar el menú hamburguesa y el overlay según corresponda
 * Togglea el menu y si el carrito esta abierto , lo cierra. Finalmente, muestra el overlay si no había nada abierto se esta abriendo el menú
 */
const toggleMenu = () => {
  barsMenu.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return; // Si ya había algo abierto, no se togglea el overlay, por eso el return
  }
  overlay.classList.toggle("show-overlay");
};

/**
 * Función para mostrar u ocultar el carrito y el overlay según correspondaw
 * Togglea el cart y si el menu esta abierto , lo cierra. Finalmente, muestra el overlay si no había nada abierto y se esta abriendo el carrito
 */
const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (barsMenu.classList.contains("open-menu")) {
    barsMenu.classList.remove("open-menu");
    return; // Si ya había algo abierto, no se togglea el overlay, por eso el return
  }
  overlay.classList.toggle("show-overlay");
};

/**
 * Función para cerrar el menú hamburguesa y el overlay cuando se hace click en un link del menú
 * Al clickear un enlace del menú hamburguesa, lo cierra. Si lo que clickeemos dentro de el ul no contiene la clase "navbar-link" no pasa nada.
 * @param {event} e   Evento de click
 * @returns
 */
const closeOnClick = (e) => {
  if (!e.target.classList.contains("navbar-link")) return;
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
};

/**
 *  Función para cerrar el menú hamburguesa o el carrito y ocultar el overlay cuando se hace scroll
 * Al scrollear, si está abierto el menú o el carrito, ejecuta las funciones correspondientes para cerrarlos y ocultar el overlay.
 */
const closeOnScroll = () => {
  if (
    barsMenu.classList.contains("open-menu") ||
    cartMenu.classList.contains("open-cart")
  ) {
    barsMenu.classList.remove("open-menu");
    cartMenu.classList.remove("open-cart");
    overlay.classList.remove("show-overlay");
  }
};

/**
 * Función para cerrar el menú hamburguesa o el carrito y ocultar el overlay cuando se hace click en el overlay
 */
const closeOnOverlayClick = () => {
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

/*-----------------------------------------------------------------------------*/
/*--------------------Logica de agregar al carrito (CLASE 2)-------------------*/
/*-----------------------------------------------------------------------------*/

/**
 * Función para crear el template de un producto del carrito
 * @param {object} cartProduct  Objeto con la información del producto que se quiere agregar al carrito
 * @returns {string}  Template del producto del carrito
 */
const createCartProductTemplate = (cartProduct) => {
  const { id, name, bid, img, quantity } = cartProduct;
  return `    
    <div class="cart-item">
      <img src=${img} alt="Nft del carrito" />
      <div class="item-info">
        <h3 class="item-title">${name}</h3>
        <p class="item-bid">Current bid</p>
        <span class="item-price">${bid} ETH</span>
      </div>
      <div class="item-handler">
        <span class="quantity-handler down" data-id=${id}>-</span>
        <span class="item-quantity">${quantity}</span>
        <span class="quantity-handler up" data-id=${id}>+</span>
      </div>
    </div>`;
};

/**
 * Función para renderizar los productos del carrito o el mensaje de  "No hay productos en el carrito"
 * Revisa si el array del carrito está vacío, si lo está, renderiza el mensaje de "No hay productos en el carrito", sino, renderiza los productos del carrito
 */
const renderCart = () => {
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito.</p>`;
    return;
  }
  productsCart.innerHTML = cart.map(createCartProductTemplate).join("");
};

/**
 * Función para obtener el total de la compra
 * @returns  {number} Total de la compra
 */
const getCartTotal = () => {
  return cart.reduce((acc, cur) => acc + Number(cur.bid) * cur.quantity, 0);
};

/**
 * Función para mostrar el total de la compra
 * Se utiliza el método "toFixed" para que el total tenga solo 2 decimales
 */
const showCartTotal = () => {
  total.innerHTML = `${getCartTotal().toFixed(2)} eTH`;
};

/**
 * Función para actualizar la burbuja de cantidad con el número de productos en el carrito
 */
const renderCartBubble = () => {
  cartBubble.textContent = cart.reduce((acc, cur) => acc + cur.quantity, 0);
};

/**
 * Función para habilitar o deshabilitar un botón segun corresponda
 * @param {object} btn Botón que se quiere deshabilitar
 */
const disableBtn = (btn) => {
  if (!cart.length) {
    btn.classList.add("disabled");
  } else {
    btn.classList.remove("disabled");
  }
};

/**
 * Función que ejecuta las funciones necesarias para actualizar el estado del carrito. Esto incluye renderizar los productos del carrito, mostrar el total de la compra, deshabilitar el botón de comprar y el botón de eliminar si corresponde y actualizar la burbuja de cantidad.
 * La creamos ya que todas esas funciones las vamos a necesitar en distintos momentos, por lo que es más práctico tenerlas todas juntas en una sola función.
 */
const updateCartState = () => {
  saveCart();
  renderCart();
  showCartTotal();
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
  renderCartBubble();
};

/**
 * Función para crear un objeto con la información del producto que se quiere agregar al carrito o bien agregar una unidad a un producto que ya este en el carrito.
 * Se tomará la data del producto del dataset del botón clickeado para crear el objeto del producto.
 * Si el producto ya existe en el carrito, se le suma una unidad y se muestra el modal con el mensaje correspondiente.
 * Si el producto no existe en el carrito, se agrega al array del carrito agregandole la propiedad quantit y se muestra el modal con el mensaje correspondiente.
 * @param {event} e evento click
 */
const addProduct = (e) => {
  if (!e.target.classList.contains("btn-add")) return;
  const product = createProductData(e.target.dataset);
  if (isExistingCartProduct(product)) {
    addUnitToProduct(product);
    showSuccessModal("Se agregó una unidad del producto al carrito");
  } else {
    createCartProduct(product);
    showSuccessModal("El producto se ha agregado al carrito");
  }

  updateCartState();
};

/**
 * Función para agregar una unidad a un producto que ya este en el carrito.
 * Se recorre el array del carrito y se busca el producto que se quiere agregar una unidad.
 * Si el producto pasado como parámetro es igual al producto que se está recorriendo, se le suma una unidad a la propiedad "quantity" y se actualiza el array del carrito. Si eso no ocurre, se retorna el producto que se esta recorriendo tal cual está.
 * @param {object} product Objeto con la información del producto que se quiere agregar una unidad al carrito
 */
const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) =>
    cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct
  );
};

/**
 * Función para crear un objeto con la información del producto que se quiere agregar al carrito.
 * @param {object} product Objeto con la información del producto que se quiere agregar al carrito
 */
const createCartProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }];
};

/**
 * Función para saber si un producto ya existe en el carrito.
 * @param {object} product  Objeto con la información del producto que se quiere agregar al carrito
 * @returns {object} Objeto con la información del producto que se quiere agregar al carrito. Undefined en caso de que no exista.
 */
const isExistingCartProduct = (product) => {
  return cart.find((item) => item.id === product.id);
};

/**
 * Función para crear un objeto con la información del producto que se quiere eliminar del carrito.
 * @param {object} product data del producto a crear o a agregar una unidad.
 * @returns {object} Objeto con la data del producto.
 */
const createProductData = (product) => {
  const { id, name, bid, img } = product;
  return { id, name, bid, img };
};

/**
 * Función para mostrar el modal de éxito al agregar o añadir un producto.
 * @param {string} msg  Mensaje que se quiere mostrar en el modal
 */
const showSuccessModal = (msg) => {
  successModal.classList.add("active-modal");
  successModal.textContent = msg;
  setTimeout(() => {
    successModal.classList.remove("active-modal");
  }, 1500);
};

/**
 * Función para manejar el evento click del botón de más de cada producto del carrito.
 * @param {string} id Id del producto que se quiere agregar una unidad al carrito
 */
const handlePlusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);
  addUnitToProduct(existingCartProduct);
};

/**
 * Función para manejar el evento click del botón de menos de cada producto del carrito.
 * @param {string} id Id del producto que se quiere eliminar una unidad al carrito
 */
const handleMinusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);

  // Si se toco en un item con uno solo de cantidad
  if (existingCartProduct.quantity === 1) {
    if (window.confirm("¿Desea Eliminar el producto del carrito?")) {
      removeProductFromCart(existingCartProduct);
    }
    return; // Si no termino confirmando la eliminación, no hace nada, ya que sino la cantidad quedaría en 0, así que cortamos la ejecución.
  }
  substractProductUnit(existingCartProduct);
};

/**
 * Función para quitar una unidad de producto.
 * Se recorre el array del carrito y se busca el producto que se quiere eliminar una unidad. Si el producto pasado como parámetro es igual al producto que se está recorriendo, se le resta una unidad a la propiedad "quantity" y se actualiza el array del carrito. Si eso no ocurre, se retorna el producto que se esta recorriendo tal cual está.
 * @param {object} existingProduct Objeto con la información del producto que se quiere eliminar una unidad al carrito
 */
const substractProductUnit = (existingProduct) => {
  cart = cart.map((product) => {
    return product.id === existingProduct.id
      ? { ...product, quantity: Number(product.quantity) - 1 }
      : product;
  });
};

/**
 * Función para eliminar un producto del carrito.
 * @param {object} existingProduct Objeto con la información del producto que se quiere eliminar del carrito
 */
const removeProductFromCart = (existingProduct) => {
  cart = cart.filter((product) => product.id !== existingProduct.id);
  updateCartState();
};

/**
 * Función que maneja los eventos de apretar el botón de más o de menos según corresponda.
 * @param {event} e evento click
 */
const handleQuantity = (e) => {
  if (e.target.classList.contains("down")) {
    handleMinusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains("up")) {
    handlePlusBtnEvent(e.target.dataset.id);
  }
  //Para todos los casos
  updateCartState();
};

/**
 * Función para vaciar el carrito.
 */
const resetCartItems = () => {
  cart = [];
  updateCartState();
};

/**
 * Función para completar la compra o vaciar el carrito.
 * @param {string} confirmMsg   Mensaje de pregunta para confirmar la acción.
 * @param {*} successMsg   Mensaje de éxito para mostrar al completar la acción.
 */
const completeCartAction = (confirmMsg, successMsg) => {
  if (!cart.length) return; //Si el carrito está vacío, no hace nada.
  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};

/**
 * Función para disparar el mensaje de compra exitosa y su posterior mensaje de exito en caso de darse la confirmación.
 */
const completeBuy = () => {
  completeCartAction("¿Desea completar su compra?", "¡Gracias por su compra!");
};

/**
 * Función para disparar el mensaje de vaciado de carrito y su posterior mensaje de exito en caso de darse la confirmación.
 */
const deleteCart = () => {
  completeCartAction(
    "¿Desea vaciar el carrito?",
    "No hay productos en el carrito"
  );
};

const init = () => {
  renderProducts(appState.products[0]);
  showMoreBtn.addEventListener("click", showMoreProducts);
  categoriesContainer.addEventListener("click", applyFilter);
  cartBtn.addEventListener("click", toggleCart);
  menuBtn.addEventListener("click", toggleMenu);
  window.addEventListener("scroll", closeOnScroll);
  barsMenu.addEventListener("click", closeOnClick);
  overlay.addEventListener("click", closeOnOverlayClick);
  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("DOMContentLoaded", showCartTotal);
  productsContainer.addEventListener("click", addProduct);
  productsCart.addEventListener("click", handleQuantity);
  buyBtn.addEventListener("click", completeBuy);
  deleteBtn.addEventListener("click", deleteCart);
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
  renderCartBubble(cart);
};

init();
