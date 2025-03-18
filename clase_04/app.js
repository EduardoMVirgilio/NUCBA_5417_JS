// function contarLetras(palabra = "") {
//   return palabra.length;
// }

const contarLetras = (palabra = "") => palabra.length;

var n1 = contarLetras("Edu"); // 3
var n2 = contarLetras("Luis"); // 4
var n3 = contarLetras(); // 0

// console.log(n1);
// console.log(n2);
// console.log(n3);
// console.log(contarLetras("palabra"));

function dividir(a, b = 0) {
  //   if (b == 0) throw new Error("No se puede divir por cero");
  if (b == 0) return;
  return a / b;
}

console.log(dividir(10, 2));
console.log(dividir(10));

const suma = (a, b) => a + b;

// function suma(a, b) {
//   return a + b;
// }

// 3!

// 1x2x3
// 12!
// 1x2x3x4x5x6x7x8x9x10x11x12

// function factorial(numero) {
//   if (numero <= 1) return 1;
//   return numero * factorial(numero - 1);
// }

// var resultado = factorial(3);
// // 3 es menor o igual que 1 ? NO => 3 * 2
// // 2 es menor o igual que 1 ? SI => 6 * 1

// const microndas = (segundos) => {
//   if (segundos == 0) {
//     console.log("la comida esta lista");
//     return;
//   }
//   console.log("Quedan", segundos, "segundos...");
//   microndas(segundos - 1);
// };

// microndas(3);

// const bienvenida = (persona = "") => "Bienvenid@ " + persona;
// const saludar = (callback) => callback(prompt("Nombre de la persona?"));
// console.log(saludar((persona) => "Adios " + persona));

// ["Luis", "Ana", "Mario", "Laura"].forEach((n) => console.log(n));

// const preparar = (accionSecundaria) => {
//   console.log("Preparando cafe");
//   setTimeout(() => accionSecundaria(), 1000);
// };
// const tomar = () => console.log("Tomar el cafe")
// preparar(tomar);
