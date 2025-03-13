var contactos = [
  ["eduardo", "virgilio", "eduardomiguelvirgilio@gmail.com", 29],
  ["luis", "spineta", "luis@gmail.com", 23],
  ["charly", "garcia", "charly@garcia.com", 54],
];

for (let indice = 0; indice < contactos.length; indice += 1) {
  const contacto = contactos[indice];
  let nombreCompleto, correo, edad;
  nombreCompleto = "";
  for (let info = 0; info < contacto.length; info += 1) {
    if (info < 2) {
      nombreCompleto += contacto[info];
      nombreCompleto += " ";
    }
    if (info == 2) {
      correo = contacto[info];
    }
    if (info == 3) {
      edad = contacto[info];
    }
  }
  console.log("nombre:", nombreCompleto);
  console.log("correo:", correo);
  console.log("edad:", edad);
}
