// Elementos
const searchForm = document.querySelector("#search");
const cityInput = document.querySelector("#city");
const feedCity = document.querySelector("#feed");
const weatheContainer = document.querySelector("#weather");

// Constantes
const API_KEY = "";
const API_URL = "https://api.openweathermap.org";
const GEO_ENDPOINT = "/geo/1.0/direct";
const WEATHER_ENDPOINT = "/data/2.5/weather";
const ICON_URL = "https://openweathermap.org/img/wn/";

// Variables
let loading = false;
let city = null;

// Funciones
const obtenerCoodenadas = async () => {};
const obtenerClima = async () => {};
const renderClima = (clima) => {
  weatheContainer.innerHTML = null;
  const { weather, main, name } = clima;
  let template = `<dl id="data"><dt>Buenos Aires</dt><dd>nubes</dd><dd>17°<span>17° ST</span></dd></dl>`;
  template += `<picture id="icono"><img src="https://openweathermap.org/img/wn/04d@4x.png" alt="icono de clima nubes"/></picture>`;
  template += `<ul id="extra"> <li>Max: 18º</li> <li>Min: 16º</li> <li>77% Humedad</li> </ul>`;
  weatheContainer.innerHTML = template;
  return;
};

const validarCity = () => {
  let value = cityInput.value.trim();
  let success = true;
  feedCity.innerHTML = "";
  feedCity.classList.remove("invalid");
  if (value.length < 4) {
    success = false;
    feedCity.innerHTML = "Completar el nombre de la ciudad";
    feedCity.classList.add("invalid");
  }
  return success;
};

// Eventos

cityInput.addEventListener("input", () => {});
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
