import { IMAGE, TOPRATED, TRENDING, UPCOMING, LIMIT } from "./constants.js";
// Estados Globales
var currentPage = 0;
var totalCount = 12;
var currentUrl = TRENDING;

// Elementos
const list = document.querySelector("#list");
const filters = document.querySelectorAll("[name='filter']");
const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");
const outPage = document.querySelector("#outPage");

// Metodos
const getData = async () => {
  try {
    return [];
  } catch (error) {
    throw new Error(error.message);
  }
};
const renderMovies = async () => {
  try {
    let movies = await getData();
    console.log(movies);
  } catch (error) {
    throw new Error(error.message);
  }
};
const cardMovie = (movie) => {};
const nextPage = () => {};
const prevPage = () => {};
const setFilter = (filter) => {};

// Eventos
btnNext.addEventListener("click", nextPage);
btnPrev.addEventListener("click", prevPage);
filters.forEach((filter) =>
  filter.addEventListener("change", (e) => setFilter(e.target))
);

// Inicio
renderMovies();
