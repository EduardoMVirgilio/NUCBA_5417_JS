// Modulos
// Import & Export
import { $ } from "./modules/dom.js";
import { tareas } from "./modules/var.js";

const body = $("body");
const element = document.createElement("pre");
// element.style.color = "snow";
element.innerText = `${JSON.stringify(tareas, null, 2)}`;
body.append(element);
