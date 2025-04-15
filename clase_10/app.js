const h1 = document.querySelector("h1");
const hs = document.querySelectorAll("h1");
h1.textContent = "WOW";
console.log(hs);
hs[1].innerText = "INCREIBLE";
const listas = document.getElementsByTagName("ul");
console.log(listas);
const primeraLista = document.getElementById("first");
console.log(primeraLista);
const segundaLista = document.getElementById("second");
console.log(segundaLista);
const items = document.getElementsByClassName("item");
console.log(items);

// Primera lista dinamica
primeraLista.innerHTML = "";
for (let i = 1; i <= 10; i++) {
  primeraLista.innerHTML += `<li>${i} x 5 = ${i * 5}</li>`;
}

// Segunda Lista dinamica
segundaLista.innerHTML = "";
const usuarios = [];
usuarios.push({ id: 1, nombre: "Luis", email: "luis.dev@gmail.com" });
usuarios.push({ id: 2, nombre: "German", email: "german.dev@gmail.com" });
usuarios.push({ id: 3, nombre: "Carlo", email: "carlo.dev@gmail.com" });
usuarios.push({ id: 4, nombre: "Delfi", email: "delfi.dev@gmail.com" });
usuarios.push({ id: 5, nombre: "Edu", email: "edu.dev@gmail.com" });
console.clear();
console.log(usuarios);
for (const usuario of usuarios) {
  segundaLista.innerHTML += `<li>${usuario.nombre} - ${usuario.email}</li>`;
}
