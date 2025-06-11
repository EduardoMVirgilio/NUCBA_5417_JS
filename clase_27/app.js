// Global Variables
const api = "https://pokeapi.co/api/v2/";
const assets = "https://raw.githubusercontent.com/PokeAPI/";
const sprites = "sprites/master/sprites/pokemon/other/dream-world/";
let url = "";
let loading = false;

// Elementos
const list = document.querySelector("#list");
const loader = document.querySelector("#loader");

// Funciones

const showLoading = () => {};
const hideLoading = () => {};
const loadData = async () => {};
const renderList = () => {};
const renderPokemon = () => {};
const scrolling = () => {
  // list.scrollTop
  // list.clientHeight
  // list.scrollHeight
};

// Carga Inicial
loadData();

// Scrolling
list.addEventListener("scroll", scrolling);
