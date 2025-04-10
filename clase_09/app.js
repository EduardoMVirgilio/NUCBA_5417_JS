var usuarios = [];
var usuario = null;
const registrar = () => {
  let alias = prompt("Ingrese su alias");
  while (alias.trim().length < 3) {
    alert("Debes ingresar minimo 3 caracteres");
    alias = prompt("Ingrese su alias");
  }
  let clave = prompt("Ingrese su clave");
  while (clave.trim().length < 4) {
    alert("Debes ingresar minimo 4 caracteres");
    clave = prompt("Ingrese su clave");
  }

  if (usuarios.length == 0) {
    usuarios.push({ alias, clave, active: true });
    return alert("Usuario registrado con exito");
  }

  let existe = usuarios.find(
    (usuario) => usuario.alias.toLowerCase() === alias.toLowerCase()
  );

  if (existe) {
    return alert("El alias ya esta registrado");
  }

  usuarios.push({ alias, clave, active: true });
  return alert("Usuario registrado con exito");
};
const verificar = () => {
  let alias = prompt("Ingrese su alias");
  while (alias.trim().length < 3) {
    alert("Debes ingresar minimo 3 caracteres");
    alias = prompt("Ingrese su alias");
  }
  let clave = prompt("Ingrese su clave");
  while (clave.trim().length < 4) {
    alert("Debes ingresar minimo 4 caracteres");
    clave = prompt("Ingrese su clave");
  }
  if (usuarios.length == 0) {
    return alert("No hay usuario registrados");
  }
  let existe = usuarios.find(
    (usuario) => usuario.alias.toLowerCase() === alias.toLowerCase()
  );
  if (!existe) {
    return alert("El usuario no esta registrado");
  }
  if (existe.clave != clave) {
    return alert("La clave es incorrecta");
  }
  if (!existe.active) {
    return alert("Usuario inhabilitado");
  }
  usuario = existe;
  return alert(`Bienvenid@ ${usuario.alias}`);
};
const actualizar = (alias, datos) => {
  let existe = usuarios.find(
    (usuario) => usuario.alias.toLowerCase() === alias.toLowerCase()
  );
  if (!existe) {
    return alert("El usuario no esta registrado");
  }
  usuarios = usuarios.map((usuario) => {
    if (usuario.alias.toLowerCase() === alias.toLowerCase()) {
      usuario = { ...usuario, ...datos };
    }
    return usuario;
  });
  if (usuario) {
    usuario = usuarios.find(
      (usuario) => usuario.alias.toLowerCase() === alias.toLowerCase()
    );
  }
  return alert("Usuario Actualizado");
};
const eliminar = (alias) => {
  let existe = usuarios.find(
    (usuario) => usuario.alias.toLowerCase() === alias.toLowerCase()
  );
  if (!existe) {
    return alert("El usuario no esta registrado");
  }
  // Opcion 1
  // usuarios = usuarios.filter((usuario) => usuario.alias != alias);
  // Opcion 2
  existe.active = false;

  if (usuario.alias === alias) {
    usuario = null;
  }
};
