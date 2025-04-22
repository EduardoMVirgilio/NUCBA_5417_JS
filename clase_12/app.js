// document.createElement() vs innerHTML

var usuarios = [];

usuarios.push("Luis");
usuarios.push("German");
usuarios.push("Carlo");
usuarios.push("Emi");

/*
document.body.innerHTML += `<ul>${usuarios
  .map((usuario) => `<li>${usuario}</li>`)
  .join("")}</ul>`;
document
  .querySelectorAll("li")
  .forEach((usuario) =>
    usuario.addEventListener("click", (e) => console.log(e.target.innerText))
  );
  
*/

// const lista = document.createElement("ul");
// for (const usuario of usuarios) {
//   let item = document.createElement("li");
//   item.innerText = usuario;
//   item.onclick = (e) => console.log(e.target.innerText);
//   lista.append(item);
// }
// document.body.append(lista);

// JSON - Parse || Stringify

// JavaScript Object Notation

// JSON.parse(); // Tranforma de Texto a JS
// JSON.stringify(); // Tranforma de JS a Texto

// LocalStorage
// localStorage.setItem('nombre',"edu")
// localStorage.getItem('nombre') // 'edu'
// localStorage.removeItem('nombre')

// SessionStorage
// sessionStorage.setItem("nombre", "edu");
// sessionStorage.getItem('nombre') // 'edu'
// sessionStorage.removeItem('nombre')

// localStorage.setItem("datos",JSON.stringify([1,2,3,4]))
// JSON.parse(localStorage.getItem('datos'))
