// var,let,const
// Scope Global, Local

// var nombre;
// console.log(nombre);
// nombre = "Edu";
// console.log(nombre);

// () => {
//   let nombre;
//   console.log(nombre);
//   nombre = "Edu";
//   console.log(nombre);
// };

var nombre = "Edu";
// If
if (false) {
  let edad;
  edad = 28;
  console.log(nombre); // Edu
  nombre = "Eduardo";
}
console.log(nombre); // Eduardo

// const porcentajeDescuento = 0.25;
// const nombre = "Eduardo";
// console.log(nombre);

// Switch
var day = "lunes";
switch (day) {
  case "lunes":
  case "miercoles":
  case "viernes":
    console.log("Hay clases");
    break;

  default:
    console.log("No hay clases");
    break;
}

if (day == "lunes" || day == "miercoles" || day == "viernes") {
  console.log("Hay clases");
} else {
  console.log("No hay clases");
}

var edad;
// console.log(edad >= 18 ? "entra" : "no entra");
// console.log(edad ?? "entra");
