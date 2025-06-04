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
const obtenerCoodenadas = async (ciudad) => {
  const data = {
    q: ciudad,
    limit: 1,
    appid: API_KEY,
  };
  const params = new URLSearchParams(data);
  let url = `${API_URL}${GEO_ENDPOINT}?${params.toString()}`;
  const respuesta = await fetch(url);
  const coordenadas = await respuesta.json();
  return { latitud: coordenadas[0].lat, longitud: coordenadas[0].lon };
};
const obtenerClima = async (latitud, longitud) => {
  const data = {
    lat: latitud,
    lon: longitud,
    units: "metric",
    lang: "es",
    appid: API_KEY,
  };
  const params = new URLSearchParams(data);
  let url = `${API_URL}${WEATHER_ENDPOINT}?${params.toString()}`;
  const respuesta = await fetch(url);
  const clima = await respuesta.json();
  return clima;
};
const renderClima = (cuidad, clima) => {
  weatheContainer.innerHTML = null;
  const { weather, main } = clima;
  let template = `<dl id="data"><dt>${cuidad}</dt><dd>${
    weather[0].description
  }</dd><dd>${Math.round(main.temp)}°<span>${Math.round(
    main.feels_like
  )}° ST</span></dd></dl>`;
  template += `<picture id="icono"><img src="${ICON_URL}${weather[0].icon}@4x.png" alt="icono de clima ${weather[0].description}"/></picture>`;
  template += `<ul id="extra"> <li>Max:${Math.round(
    main.temp_max
  )}º</li> <li>Min: ${Math.round(main.temp_min)}º</li> <li>${
    main.humidity
  }% Humedad</li> </ul>`;
  weatheContainer.innerHTML = template;
  return;
};

const validarCity = () => {
  let value = cityInput.value.trim();
  let success = true;
  feedCity.innerHTML = null;
  feedCity.classList.remove("invalid");
  if (value.length < 4) {
    success = false;
    feedCity.classList.add("invalid");
    feedCity.innerHTML = "Completa el nombre de la Cuidad";
  } else {
    feedCity.innerHTML = `Así está el clima en ${value}, ¿Querés ver el clima de otra ciudad?`;
  }
  return success;
};

// Eventos

cityInput.addEventListener("input", validarCity);
searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const coordenadas = await obtenerCoodenadas(cityInput.value.trim());
  const clima = await obtenerClima(coordenadas.latitud, coordenadas.longitud);
  renderClima(cityInput.value.trim(), clima);
});

// console.log(Object.fromEntries(new URLSearchParams(location.search).entries()));
