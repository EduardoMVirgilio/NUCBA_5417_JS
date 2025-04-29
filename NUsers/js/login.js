if (localStorage.getItem("usuario")) {
  location.assign("welcome.html");
}

var users = [];
if (localStorage.getItem("usuarios")) {
  users = JSON.parse(localStorage.getItem("usuarios"));
}

if (users.length == 0) {
  location.assign("register.html");
}

const loginForm = document.querySelector("#loginForm");
const email = document.querySelector("#email");
const feedbackEmail = document.querySelector("#feedbackEmail");
const password = document.querySelector("#password");
const feedbackPassword = document.querySelector("#feedbackPassword");

// Validar Email
email.addEventListener("input", (e) => {
  let valor = e.target.value.trim();
  if (valor.length < 7) {
    feedbackEmail.classList.remove("error");
    feedbackEmail.classList.remove("success");
    feedbackEmail.classList.add("error");
    e.target.classList.remove("error");
    e.target.classList.remove("success");
    e.target.classList.add("error");
    feedbackEmail.innerHTML = "Debes completar el email";
    return;
  }
  let expresion =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!expresion.test(valor)) {
    feedbackEmail.classList.remove("error");
    feedbackEmail.classList.remove("success");
    feedbackEmail.classList.add("error");
    e.target.classList.remove("error");
    e.target.classList.remove("success");
    e.target.classList.add("error");
    feedbackEmail.innerHTML = "No es un patron valido";
    return;
  }
  let emails = users.map((user) => user.email);
  if (!emails.includes(valor)) {
    feedbackEmail.classList.remove("error");
    feedbackEmail.classList.remove("success");
    feedbackEmail.classList.add("error");
    e.target.classList.remove("error");
    e.target.classList.remove("success");
    e.target.classList.add("error");
    feedbackEmail.innerHTML = "Este correo no está registrado";
    return;
  }
  feedbackEmail.classList.remove("error");
  feedbackEmail.classList.remove("success");
  feedbackEmail.classList.add("success");
  e.target.classList.remove("error");
  e.target.classList.remove("success");
  e.target.classList.add("success");
  feedbackEmail.innerHTML = "Correo Valido";
});

// Validar Password
password.addEventListener("input", (e) => {
  let valor = e.target.value.trim();
  if (valor.length < 8) {
    feedbackPassword.classList.remove("error");
    feedbackPassword.classList.remove("success");
    feedbackPassword.classList.add("error");
    e.target.classList.remove("error");
    e.target.classList.remove("success");
    e.target.classList.add("error");
    feedbackPassword.innerHTML = "Minimo 8 caracteres";
    return;
  }
  let expresion =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
  if (!expresion.test(valor)) {
    feedbackPassword.classList.remove("error");
    feedbackPassword.classList.remove("success");
    feedbackPassword.classList.add("error");
    e.target.classList.remove("error");
    e.target.classList.remove("success");
    e.target.classList.add("error");
    feedbackPassword.innerHTML =
      "Al menos una letra mayúscula, un dígito y un caracter especial.";
    return;
  }
  feedbackPassword.classList.remove("error");
  feedbackPassword.classList.remove("success");
  feedbackPassword.classList.add("success");
  e.target.classList.remove("error");
  e.target.classList.remove("success");
  e.target.classList.add("success");
  feedbackPassword.innerHTML = "Contraseña Valida";
});

// Validar Formulario

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let errores = false;
  // Validar el Email
  let valorEmail = email.value.trim();
  let expresion =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let emails = users.map((user) => user.email);
  if (valorEmail.length < 7) {
    feedbackEmail.classList.remove("error");
    feedbackEmail.classList.remove("success");
    feedbackEmail.classList.add("error");
    email.classList.remove("error");
    email.classList.remove("success");
    email.classList.add("error");
    feedbackEmail.innerHTML = "Debes completar el email";
    errores = true;
  } else if (!expresion.test(valorEmail)) {
    feedbackEmail.classList.remove("error");
    feedbackEmail.classList.remove("success");
    feedbackEmail.classList.add("error");
    email.classList.remove("error");
    email.classList.remove("success");
    email.classList.add("error");
    feedbackEmail.innerHTML = "No es un patron valido";
    errores = true;
  } else if (!emails.includes(valorEmail)) {
    feedbackEmail.classList.remove("error");
    feedbackEmail.classList.remove("success");
    feedbackEmail.classList.add("error");
    email.classList.remove("error");
    email.classList.remove("success");
    email.classList.add("error");
    feedbackEmail.innerHTML = "Este correo no está registrado";
    errores = true;
  } else {
    feedbackEmail.classList.remove("error");
    feedbackEmail.classList.remove("success");
    feedbackEmail.classList.add("success");
    email.classList.remove("error");
    email.classList.remove("success");
    email.classList.add("success");
    feedbackEmail.innerHTML = "Correo Valido";
  }
  let valorPassword = password.value.trim();
  expresion =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
  if (valorPassword.length < 8) {
    feedbackPassword.classList.remove("error");
    feedbackPassword.classList.remove("success");
    feedbackPassword.classList.add("error");
    e.target.classList.remove("error");
    e.target.classList.remove("success");
    e.target.classList.add("success");
    feedbackPassword.innerHTML = "Minimo 8 caracteres";
    errores = true;
  } else if (!expresion.test(valorPassword)) {
    feedbackPassword.classList.remove("error");
    feedbackPassword.classList.remove("success");
    feedbackPassword.classList.add("error");
    e.target.classList.remove("error");
    e.target.classList.remove("success");
    e.target.classList.add("error");
    feedbackPassword.innerHTML =
      "Al menos una letra mayúscula, un dígito y un caracter especial.";
    errores = true;
  } else {
    feedbackPassword.classList.remove("error");
    feedbackPassword.classList.remove("success");
    feedbackPassword.classList.add("success");
    e.target.classList.remove("error");
    e.target.classList.remove("success");
    e.target.classList.add("success");
    feedbackPassword.innerHTML = "Contraseña Valida";
  }

  let findUser = users.find((user) => user.email == valorEmail);

  if (findUser?.password != valorPassword) {
    feedbackPassword.classList.remove("error");
    feedbackPassword.classList.remove("success");
    feedbackPassword.classList.add("error");
    e.target.classList.remove("error");
    e.target.classList.remove("success");
    e.target.classList.add("error");
    feedbackPassword.innerHTML = "Contraseña Incorrecta";
    errores = true;
  }

  if (!errores) {
    localStorage.setItem("usuario", JSON.stringify(findUser));
    location.assign("welcome.html");
  }
});
