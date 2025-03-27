// Closure
const saludar = () => {
  let nombre = "Edu";
  const darBienvenida = () => console.log("Hola " + nombre);
  return darBienvenida;
};
const bienvenida = saludar();
bienvenida(); // "Hola Edu"

// Callback
const despedir = (nombre) => console.log("Adios " + nombre);
const darBienvenida = (nombre) => console.log("Hola " + nombre);
const saludo = (nombre, accion) => accion(nombre);
saludo("Edu", darBienvenida); // "Hola Edu"
saludo("Edu", despedir); // "Adios Edu"

// Objetos Literales

var persona = { nombre: "Luis", edad: 29 };
// persona.edad = 29;
console.log(persona.nombre);
console.log(persona["nombre"]);

persona.esMayorDeEdad = function () {
  let minEdad = 18;
  return this.edad >= minEdad;
};

persona.esMayorDeEdad(); // true
persona.edad = 17;
persona.esMayorDeEdad(); // false

// Spread operator

var persona = { nombre: "Luis", edad: 29, ciudad: "CABA" };
var segundaPersona = { ...persona };
// segundaPersona.nombre // Luis

var listaUno = ["peras", "sandia", "melon"];
var listaDos = [...listaUno, "manzana", "mandarina"];

// listaDos // [ 'peras', 'sandia', 'melon', 'manzana', 'mandarina' ]

// Spread Operator en funciones
function sumatoria(...numeros) {
  let resultado = 0;
  for (const numero of numeros) {
    resultado += numero;
  }
  return resultado;
}

sumatoria(1, 2, 3, 4, 5, 6, 7);

// Destructuring

var { nombre, ...datos } = { nombre: "Luis", edad: 29, ciudad: "CABA" };
// console.log(nombre);

var [peras, ...frutas] = ["peras", "sandia", "melon"];
// console.log(peras);
