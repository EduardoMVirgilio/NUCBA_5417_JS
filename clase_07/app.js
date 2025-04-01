var caracter = "*";
var filas = 3;
var spacio = " ";

for (let i = 0; i < filas; i++) {
  let nSpacios = filas - 1 - i;
  console.log(nSpacios);
  let nCaracter = 2 * i + 1;
  console.log(nCaracter);
  let fila = spacio.repeat(nSpacios);
  fila += caracter.repeat(nCaracter);
  fila += spacio.repeat(nSpacios);
  console.log(fila);
}
