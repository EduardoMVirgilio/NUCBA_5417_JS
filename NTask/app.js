var tareas = JSON.parse(localStorage.getItem("tareas")) || [];
const render = () => {
  const lista = document.querySelector("#tareas");
  lista.innerHTML = null;
  for (const tarea of tareas) {
    const item = document.createElement("li");
    const itemTitle = document.createElement("p");
    const itemActions = document.createElement("form");
    const itemChange = document.createElement("button");
    const itemDelete = document.createElement("button");
    itemTitle.innerText = tarea.title;
    itemChange.setAttribute("type", "button");
    itemDelete.setAttribute("type", "button");
    itemChange.innerText = tarea.complete ? "Descompletar" : "Completar";
    itemDelete.innerText = "Borrar";
    itemChange.addEventListener("click", () => {
      modificar(tarea.id);
    });
    itemDelete.addEventListener("click", () => {
      eliminar(tarea.id);
    });
    itemActions.append(itemChange, itemDelete);
    item.append(itemTitle, itemActions);
    item.classList.add("tarea");
    if (tarea.complete) {
      item.classList.add("completa");
    }
    lista.append(item);
  }
  document.querySelector("#taskCompleted").innerText = `Tareas Completadas : ${
    tareas.filter((tarea) => tarea.complete).length
  }`;
  document.querySelector("#taskIncompleted").innerText = `Tareas Incompletas: ${
    tareas.filter((tarea) => !tarea.complete).length
  }`;
  return;
};
const agregar = () => {
  const input = document.querySelector("#tarea");
  const feed = document.querySelector("#feedback");
  let valor = input.value.trim();
  if (!valor || valor.length < 3) {
    feed.classList.add("error");
    feed.innerText = "Minimo 3 caracteres";
    return;
  }
  let nueva = { id: Date.now(), title: valor, complete: false };
  tareas.push(nueva);
  localStorage.setItem("tareas", JSON.stringify(tareas));
  feed.classList.remove("error");
  feed.innerText = "";
  input.value = "";
  return render();
};
const modificar = (id) => {
  tareas = tareas.map((tarea) => {
    if (tarea.id === id) {
      tarea.complete = !tarea.complete;
    }
    return tarea;
  });
  localStorage.setItem("tareas", JSON.stringify(tareas));
  return render();
};
const eliminar = (id) => {
  let confirmar = confirm("Desea eliminar la tarea");
  if (!confirmar) return;
  tareas = tareas.filter((tarea) => tarea.id != id);
  localStorage.setItem("tareas", JSON.stringify(tareas));
  return render();
};

document.querySelector("#add").addEventListener("submit", (e) => {
  e.preventDefault();
  agregar();
  return;
});

document.querySelector("#tarea").addEventListener("input", (e) => {
  const feed = document.querySelector("#feedback");
  let valor = e.target.value.trim();
  if (!valor || valor.length < 3) {
    feed.classList.add("error");
    feed.innerText = "Minimo 3 caracteres";
    return;
  }
  feed.classList.remove("error");
  feed.innerText = "";
});

render();
