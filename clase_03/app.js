// Bucle | Ciclo For

// for (let contador = 0; contador < 7; contador += 1) {
//   console.log("contando", contador);
// }

// for (let contador = 0; contador < 7; contador += 1) {
//   if (contador == 5) break;
//   console.log("contando", contador);
// }

// for (let contador = 0; contador < 7; contador += 1) {
//   if (contador == 5) continue;
//   console.log("contando", contador);
// }

// Bucle | Ciclo While

// while = mientras

// var contador = 0;
// while (contador < 7) {
//   console.log("contando", contador);
//   contador += 1;
// }

// Bucle | Ciclo Do While

// do = hacer

/*
var contador = 0;
do {
  console.log("contando", contador);
  contador += 1;
} while (contador > 7);
*/

// let dado;
// do {
//   dado = Math.floor(Math.random() * 6) + 1;
//   console.log("Lanzaste un", dado);
// } while (dado !== 6);
// console.log("¡Obtuviste un 6! 🎉");

var nombres = [
  "Lucas",
  "Marcos",
  "Matias",
  "Juana",
  "Eduardo",
  "Mauro",
  "Cele",
];

console.table(nombres);
console.log("Primero:", nombres[0]);

console.log("Bucle For con Array");
for (let indice = 0; indice < nombres.length; indice += 1) {
  console.log(nombres[indice]);
}

console.log("Bucle While con Array");
var indice = 0;
while (indice < nombres.length) {
  console.log(nombres[indice]);
  indice += 1;
}

console.log("Bucle For Of con Array");
// of = para | por cada
for (const nombre of nombres) {
  console.log(nombre);
}
