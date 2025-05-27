const formContact = document.querySelector("#contacto");
const inputNombre = document.querySelector("#nombre");
const feedNombre = document.querySelector("#feedback-nombre");
const inputCorreo = document.querySelector("#correo");
const feedCorreo = document.querySelector("#feedback-correo");
const textMsg = document.querySelector("#msg");
const feedmsg = document.querySelector("#feedback-msg");

const validarNombre = () => {
  let error = false;
  let valor = inputNombre.value.trim();
  feedNombre.classList.remove("success");
  feedNombre.classList.remove("error");
  if (valor.length < 3) {
    feedNombre.classList.add("error");
    feedNombre.innerHTML = "Complete su nombre";
    error = true;
  } else {
    feedNombre.classList.add("success");
    feedNombre.innerHTML = "Nombre correcto";
  }
  return error;
};

const validarCorreo = () => {
  let error = false;
  let valor = inputCorreo.value.trim();
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  feedCorreo.classList.remove("success");
  feedCorreo.classList.remove("error");
  if (valor.length < 7) {
    feedCorreo.classList.add("error");
    feedCorreo.innerHTML = "Complete su E-mail";
    error = true;
  } else if (!regex.test(valor)) {
    feedCorreo.classList.add("error");
    feedCorreo.innerHTML = "Su E-mail es invalido";
    error = true;
  } else {
    feedCorreo.classList.add("success");
    feedCorreo.innerHTML = "E-mail correcto";
  }
  return error;
};

const validarMensaje = () => {
  let error = false;
  let valor = textMsg.value.trim();
  feedmsg.classList.remove("success");
  feedmsg.classList.remove("error");
  if (valor.length < 10) {
    feedmsg.classList.add("error");
    feedmsg.innerHTML = "Escriba su mensaje";
    error = true;
  } else if (valor.length > 100) {
    feedmsg.classList.add("error");
    feedmsg.innerHTML = "Escriba su mensaje en menos de 100 caracteres";
    error = true;
  } else {
    feedmsg.classList.add("success");
    feedmsg.innerHTML = "Gracias por tu mensaje";
  }
  return error;
};

inputNombre.addEventListener("input", () => validarNombre());
inputCorreo.addEventListener("input", () => validarCorreo());
textMsg.addEventListener("input", () => validarMensaje());

formContact.addEventListener("submit", (e) => {
  e.preventDefault();
  let hasError = validarNombre();
  hasError = validarCorreo();
  hasError = validarMensaje();
  if (!hasError) {
    alert("Mensaje Enviado");
    e.target.reset();
    feedNombre.innerHTML = null;
    feedCorreo.innerHTML = null;
    feedmsg.innerHTML = null;
  }
});
