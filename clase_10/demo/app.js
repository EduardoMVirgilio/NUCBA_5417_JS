var tareas = [];
const listaTareas = document.querySelector("ul");
const modal = document.querySelector("#modal");
const agregar = () => {
  //   console.log(modal);
  //   if (!modal.open) {
  //     modal.show();
  //   } else {
  //     modal.close();
  //   }

  let tarea = prompt("Ingrese su tarea");
  while (tarea.trim().length < 3) {
    tarea = prompt("Ingrese su tarea");
  }
  tareas.push({ tarea });
  const mostrar = () => {
    listaTareas.innerHTML = "";
    for (const tarea of tareas) {
      listaTareas.innerHTML += `<li>${tarea.tarea}</li>`;
    }
  };
  return mostrar();
};

window.addEventListener("keydown", (e) => {
  if (e.key == "Escape") return agregar();
});
