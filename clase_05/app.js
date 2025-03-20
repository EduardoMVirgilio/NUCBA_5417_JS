// Operador Logico == vs ===

// var edad = String(28);
// var minimo = 28;

// edad == minimo; // true
// edad === minimo; // false comparación estricta
// typeof edad; // string
// typeof minimo; // number
// typeof true; // boolean

// Calculadora con Callbacks

// const suma = (a, b) => a + b;

// const resta = (a, b) => a - b;

// const multi = (a, b) => a * b;

// const divi = (a, b) => a / b;
// const operaciones = { "+": suma, "-": resta, x: multi, "/": divi };
// const calcular = (a, b, op) => {
//   let resultado = operaciones[op](Number(a), Number(b));
//   return alert("El resultado es: " + resultado);
// };

// calcular(8, 2, "+");

// var a = Number(prompt("Ingrese un numero")); // 8
// var b = Number(prompt("Ingrese otro numero")); // 2
// var operador = prompt("Ingrese la operación"); // suma
// var resultado = operaciones[operador](a, b); // 10
// alert("El resultado es: " + resultado); // El resultado es 10

10 / 2 == 5;
10 % 2 == 0; // true
7 % 2 == 0; // false

// 10 |_ 2
//  10   5
//   0

// 7 |_ 2
//  6   3
//   1

// var  variables globales.
// let  variables locales que mutan o cambian.
// const variables globales o locales que no van a cambiar nunca. si o si piden una inicialización.

// const caracteres = (palabra = "") => palabra.length;
// function verificarLogitud(palabra = "", min = 1, max = 8) {
//   let longitud = caracteres(palabra);
//   let esGrande = longitud > max;
//   let esCorta = longitud < min;
//   if (esCorta) return "Le faltan caracteres";
//   if (esGrande) return "Le sobran caracteres";
//   return "Es valida";
// }
