import {
  KEY,
  IMAGE,
  TOPRATED,
  TRENDING,
  UPCOMING,
  LIMIT,
} from "./constants.js";
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
    const search = new URLSearchParams({
      api_key: KEY,
      language: "es_AR",
      page: currentPage + 1,
    });
    const res = await fetch(`${currentUrl}${search.toString()}`);
    const data = await res.json();
    totalCount = data.total_pages;
    // let start = currentPage * LIMIT;
    // let end = start + LIMIT;
    return data.results;
  } catch (error) {
    throw new Error(error.message);
  }
};
const renderMovies = async () => {
  try {
    let movies = await getData();
    list.innerHTML = null;
    outPage.innerHTML = `${currentPage + 1}`;
    movies.forEach((movie) => cardMovie(movie));
    return;
  } catch (error) {
    throw new Error(error.message);
  }
};
const cardMovie = (movie) => {
  const { title, popularity, poster_path, release_date } = movie;
  let element = document.createElement("li");
  let template = ` <img loading="lazy" src="${IMAGE}${poster_path}" alt="Poster ${title}"/>`;
  template += `<p>${Math.round(popularity)}% de popularidad</p>`;
  template += `<dl><dt>${title}</dt><dd>Fecha de estreno: ${new Date(
    release_date
  ).toLocaleDateString("es")}</dd></dl>`;
  element.innerHTML = template;
  list.append(element);
  return;
};
const nextPage = () => {
  currentPage += 1;
  let maxPage = Math.floor(totalCount / LIMIT);
  if (currentPage >= 1) {
    btnPrev.removeAttribute("disabled");
  }
  if (currentPage < maxPage) {
    return renderMovies();
  }
  if (currentPage == maxPage) {
    btnNext.setAttribute("disabled", "true");
  }
};
const prevPage = () => {
  currentPage -= 1;
  if (currentPage <= 0) {
    currentPage = 0;
    btnPrev.setAttribute("disabled", "true");
  }
  return renderMovies();
};
const setFilter = (filter) => {
  let value = filter.value;
  let collections = {
    top_rated: TOPRATED,
    trending: TRENDING,
    upcoming: UPCOMING,
  };
  currentUrl = collections[value];
  currentPage = 0;
  return renderMovies();
};

// Eventos
btnNext.addEventListener("click", nextPage);
btnPrev.addEventListener("click", prevPage);
filters.forEach((filter) =>
  filter.addEventListener("change", (e) => setFilter(e.target))
);

// Inicio
renderMovies();
