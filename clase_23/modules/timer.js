// setTimeout
// setInterval | clearInterval
// console.log("Hola");
// setTimeout(() => console.log("Nucba"), 1000);
// console.log("Bienvenido a");
// let contador = 0;
// let intervalo = setInterval(() => {
//   contador++;
//   console.log("Valor:", contador);
//   if (contador == 20) {
//     clearInterval(intervalo);
//   }
// }, 1000);

// Timer
const formTimer = document.querySelector("#timer");
const setting = document.querySelector("#timer > fieldset");
const outTime = document.querySelector("#time");
const inputMin = document.querySelector("#minutos");
const inputSec = document.querySelector("#segundos");
const btnStart = document.querySelector("#start");
const btnStop = document.querySelector("#stop");
let time = 0;
let intervalo = null;
btnStart.addEventListener("click", () => {
  let mins = Number(inputMin.value) * 60 * 1000;
  let secs = Number(inputSec.value) * 1000;
  time = mins + secs;
  setting.classList.remove("active");
  outTime.classList.remove("active");
  outTime.classList.add("active");
  intervalo = setInterval(() => {
    time -= 1000;
    let template = null;
    if (time < 60000) {
      template = `${time / 1000} segundos`;
    } else {
      template = `${Math.floor(time / 60000)
        .toString()
        .padStart(2, "0")} minutos`;
    }
    outTime.innerHTML = `${template}`;
    if (time == 0) {
      clearInterval(intervalo);
      setting.classList.remove("active");
      outTime.classList.remove("active");
      setting.classList.add("active");
    }
  }, 1000);
});
btnStop.addEventListener("click", () => {
  clearInterval(intervalo);
  setting.classList.remove("active");
  outTime.classList.remove("active");
  setting.classList.add("active");
  time = 0;
});
