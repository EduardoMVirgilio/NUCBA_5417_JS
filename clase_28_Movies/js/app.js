import { IMAGE, TOPRATED, TRENDING, UPCOMING, LIMIT } from "./constants.js";
// Estados Globales
var currentPage = 1;
var currentUrl = TOPRATED;

// Elementos
const list = document.querySelector("#list");
const filters = document.querySelectorAll("[name='filter']");
const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");
const outPage = document.querySelector("#outPage");

// Metodos
const getData = async () => {
  try {
  } catch (error) {
    throw new Error(error.message);
  }
};
const renderMovies = async () => {
  try {
  } catch (error) {
    throw new Error(error.message);
  }
};
const cardMovie = (movie) => {};
const nextPage = () => {};
const prevPage = () => {};
const setFilter = (value) => {};

// Eventos

renderMovies();

btnNext.addEventListener("click", nextPage);
btnPrev.addEventListener("click", prevPage);
filters.forEach((filter) =>
  filter.addEventListener("change", (e) => setFilter(e.target))
);
