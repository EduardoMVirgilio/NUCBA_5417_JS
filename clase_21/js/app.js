// Renderizado
const catalogo = document.querySelector("#catalogo");
let elementos = [
  { nombre: "Alimento", descripcion: "el mejor", price: 1100 },
  { nombre: "Alimento", descripcion: "el mejor", price: 1100 },
  { nombre: "Alimento", descripcion: "el mejor", price: 1100 },
  { nombre: "Alimento", descripcion: "el mejor", price: 1100 },
];
const render = () => {
  catalogo.innerHTML = null;
  elementos.forEach((elemento, index) =>
    catalogo.append(producto({ ...elemento, id: index + 1 }))
  );
};

const producto = (producto) => {
  const { nombre, descripcion, price } = producto;
  let elemento = document.createElement("li");
  elemento.innerHTML = `<h3>${nombre}</h3>`;
  elemento.innerHTML += `<p>${descripcion}</p>`;
  let btnPrice = document.createElement("button");
  btnPrice.type = "button";
  btnPrice.innerHTML = `AR$ ${price}`;
  btnPrice.addEventListener("click", (e) => {
    save(producto);
  });
  elemento.append(btnPrice);
  return elemento;
};
render();

// Storage

let items = JSON.parse(localStorage.getItem("items")) || [];

const save = (producto) => {
  items = JSON.parse(localStorage.getItem("items")) || [];
  items.push({ ...producto, cantidad: 1 });
  localStorage.setItem("items", JSON.stringify(items));
};

console.log(items);
