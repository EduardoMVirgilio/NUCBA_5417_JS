// E1: Condicionales, Ciclos y Funciones
// Buenas!

// Llego el momento de poner en practica los conceptos vistos hasta ahora con la primera entrega del módulo.

// Deberán realizar los siguientes ejercicios:

// 1 - Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
// 2 - Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
// 3 - Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
// 4 - Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

// const esPar = (a = 0) => console.log(a % 2 == 0 ? "Es par" : "Es impar");
// function esMayor(a = 0, b = 0) {
//   if (a === b) return "Son Iguales";
//   if (a > b) return a + " es mayor que " + b;
//   return b + " es mayor que " + a;
// }
// console.log(esMayor());
// console.log(esMayor(0, 1));
// console.log(esMayor(1, 0));
// const esMultiplo = (a = 0) => console.log(a % 5 == 0 ? "Es multiplo de 5" : "No es multiplo de 5");
// function contarHasta(a = 1) {
//   for (let inicio = 0; inicio <= a; inicio++) {
//     console.log("Inicio:", inicio);
//   }
// }
// function imprimirHasta(veces = 1, palabra="") {
//   for (let inicio = 0; inicio <= veces; inicio++) {
//     console.log(palabra);
//   }
// }

// function saltandoElQuinto(numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
//   for (let position = 0; position < numeros.length; position++) {
//     if (position == 5) {
//       continue;
//     }
//     console.log(numeros[position]);
//   }
// }

// function saltandoElQuinto(numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9], numero = 1) {
//   for (let position = 0; position < numeros.length; position++) {
//     console.log(numeros[position] * numero);
//   }
// }
