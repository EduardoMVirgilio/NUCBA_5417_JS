var datos = ["A", "B", "C"];
// Propiedades
datos.length;
datos[0];
datos[1];
datos[2];
// Metodos I
datos.indexOf("A");
datos.indexOf("a");
datos.includes("A");
datos.includes("a");
datos = datos.concat(["D", "E"]);
datos.length;
datos;
datos.push("F");
datos;
datos.pop();
datos;
datos.unshift("Z");
datos;
datos.shift();
datos;
var letras = datos.join(" ");
letras;
datos.reverse();
datos.reverse();
var secuencia = Array.from({ length: 12 }, (_, i) => i + 1);
secuencia;
secuencia.slice(0, 3);
secuencia.slice(0, 6);
secuencia.slice(0, 9);
secuencia.slice(0, 12);

secuencia.slice(0, 3);
secuencia.slice(3, 6);
secuencia.slice(6, 9);
secuencia.slice(9, 12);

// Con Callbacks

console.log("forEach");
secuencia.forEach((elemento, indice, original) =>
  console.log(elemento, indice, original)
);
console.log("Map");
secuencia.map((elemento) => elemento * 4);
var contactos = [
  { id: 3, email: "jose@gmail.com" },
  { id: 2, email: "luis@gmail.com" },
  { id: 6, email: "ana@gmail.com" },
];
contactos.map((elemento) => elemento.email);
console.log("Filter");
secuencia.filter((elemento) => elemento % 2 != 0);
secuencia.filter((elemento) => elemento % 2 == 0);
secuencia.filter((_, indice) => indice != 4);
contactos.filter((elemento) => elemento.id != 2);
console.log("Reduce");
secuencia;
secuencia.reduce((acumulador, elemento) => (acumulador += elemento), 0);
secuencia.reduce((acumulador, elemento) => (acumulador += elemento), "0");
console.log("Sort");
contactos;
contactos.sort((actual, posterior) => actual.id - posterior.id);
contactos.sort((actual, posterior) => posterior.id - actual.id);
contactos;
console.log("Find");
contactos.find((elemento) => elemento.id == 2).email = "edu@gmail.com";
contactos.find((elemento) => elemento.id == 2).edad = 29;
contactos;
