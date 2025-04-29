if (localStorage.getItem("usuario")) {
  location.assign("welcome.html");
}

var users = [];
if (localStorage.getItem("usuarios")) {
  users = JSON.parse(localStorage.getItem("usuarios"));
}

// Selecionar elementos del DOM
const registerForm = document.querySelector("#registerForm");
const username = document.querySelector("#username");
const feedbackUsername = document.querySelector("#feedbackUsername");
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
    email.classList.remove("error");
    email.classList.remove("success");
    email.classList.add("error");
    feedbackEmail.innerHTML = "Debes completar el email";
    return;
  }
  let expresion =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!expresion.test(valor)) {
    feedbackEmail.classList.remove("error");
    feedbackEmail.classList.remove("success");
    feedbackEmail.classList.add("error");
    email.classList.remove("error");
    email.classList.remove("success");
    email.classList.add("error");
    feedbackEmail.innerHTML = "No es un patron valido";
    return;
  }
  let emails = users.map((user) => user.email);
  if (emails.includes(valor)) {
    feedbackEmail.classList.remove("error");
    feedbackEmail.classList.remove("success");
    feedbackEmail.classList.add("error");
    email.classList.remove("error");
    email.classList.remove("success");
    email.classList.add("error");
    feedbackEmail.innerHTML = "Este correo ya esta en uso";
    return;
  }
  feedbackEmail.classList.remove("error");
  feedbackEmail.classList.remove("success");
  feedbackEmail.classList.add("success");
  email.classList.remove("error");
  email.classList.remove("success");
  email.classList.add("success");
  feedbackEmail.innerHTML = "Correo Valido";
});

// Validar username

username.addEventListener("input", (e) => {
  let valor = e.target.value.trim();
  if (valor.length < 3) {
    feedbackUsername.classList.remove("error");
    feedbackUsername.classList.remove("success");
    feedbackUsername.classList.add("error");
    username.classList.remove("error");
    username.classList.remove("success");
    username.classList.add("error");
    feedbackUsername.innerHTML = "Minimo 3 caracteres";
    return;
  }
  feedbackUsername.classList.remove("error");
  feedbackUsername.classList.remove("success");
  feedbackUsername.classList.add("success");
  username.classList.remove("error");
  username.classList.remove("success");
  username.classList.add("success");
  feedbackUsername.innerHTML = "Usuario Valido";
});

// Validar Password

password.addEventListener("input", (e) => {
  let valor = e.target.value.trim();
  if (valor.length < 8) {
    feedbackPassword.classList.remove("error");
    feedbackPassword.classList.remove("success");
    feedbackPassword.classList.add("error");
    password.classList.remove("error");
    password.classList.remove("success");
    password.classList.add("error");
    feedbackPassword.innerHTML = "Minimo 8 caracteres";
    return;
  }
  let expresion =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
  if (!expresion.test(valor)) {
    feedbackPassword.classList.remove("error");
    feedbackPassword.classList.remove("success");
    feedbackPassword.classList.add("error");
    password.classList.remove("error");
    password.classList.remove("success");
    password.classList.add("error");
    feedbackPassword.innerHTML =
      "Al menos una letra mayúscula, un dígito y un caracter especial.";
    return;
  }
  feedbackPassword.classList.remove("error");
  feedbackPassword.classList.remove("success");
  feedbackPassword.classList.add("success");
  password.classList.remove("error");
  password.classList.remove("success");
  password.classList.add("success");
  feedbackPassword.innerHTML = "Contraseña Valida";
});

registerForm.addEventListener("submit", (e) => {
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
  } else if (emails.includes(valorEmail)) {
    feedbackEmail.classList.remove("error");
    feedbackEmail.classList.remove("success");
    feedbackEmail.classList.add("error");
    email.classList.remove("error");
    email.classList.remove("success");
    email.classList.add("error");
    feedbackEmail.innerHTML = "Este correo ya esta en uso";
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

  // Validar Username

  let valorUsername = username.value.trim();
  if (valorUsername.length < 3) {
    feedbackUsername.classList.remove("error");
    feedbackUsername.classList.remove("success");
    feedbackUsername.classList.add("error");
    username.classList.remove("error");
    username.classList.remove("success");
    username.classList.add("error");
    feedbackUsername.innerHTML = "Minimo 3 caracteres";
    errores = true;
  } else {
    feedbackUsername.classList.remove("error");
    feedbackUsername.classList.remove("success");
    feedbackUsername.classList.add("success");
    username.classList.remove("error");
    username.classList.remove("success");
    username.classList.add("success");
    feedbackUsername.innerHTML = "Usuario Valido";
  }

  // Validar Password

  let valorPassword = password.value.trim();
  expresion =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
  if (valorPassword.length < 8) {
    feedbackPassword.classList.remove("error");
    feedbackPassword.classList.remove("success");
    feedbackPassword.classList.add("error");
    password.classList.remove("error");
    password.classList.remove("success");
    password.classList.add("error");
    feedbackPassword.innerHTML = "Minimo 8 caracteres";
    errores = true;
  } else if (!expresion.test(valorPassword)) {
    feedbackPassword.classList.remove("error");
    feedbackPassword.classList.remove("success");
    feedbackPassword.classList.add("error");
    password.classList.remove("error");
    password.classList.remove("success");
    password.classList.add("error");
    feedbackPassword.innerHTML =
      "Al menos una letra mayúscula, un dígito y un caracter especial.";
    errores = true;
  } else {
    feedbackPassword.classList.remove("error");
    feedbackPassword.classList.remove("success");
    feedbackPassword.classList.add("success");
    password.classList.remove("error");
    password.classList.remove("success");
    password.classList.add("success");
    feedbackPassword.innerHTML = "Contraseña Valida";
  }

  if (!errores) {
    users.push({
      username: valorUsername,
      email: valorEmail,
      password: valorPassword,
    });
    localStorage.setItem("usuarios", JSON.stringify(users));
    location.assign("login.html");
  }
});
