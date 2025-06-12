// Global Variables
const api = "https://pokeapi.co/api/v2";
const assets = "https://raw.githubusercontent.com/PokeAPI/";
const sprites = "sprites/master/sprites/pokemon/other/dream-world/";
let url = `${api}/pokemon?offset=0&limit=90`;
let loading = false;

// Elementos
const list = document.querySelector("#list");
const loader = document.querySelector("#loader");

// Funciones

const showLoading = () => {
  loading = true;
  loader.classList.add("loading");
};
const hideLoading = () => {
  loader.classList.remove("loading");
  loading = false;
};
const loadData = async () => {
  if (!url) return;
  showLoading();
  try {
    let respuesta = await fetch(url);
    let info = await respuesta.json();
    url = info.next;
    let pokemons = await Promise.all(
      info.results.map(async ({ url: pokeURL }) => {
        let res = await fetch(pokeURL);
        let pokemon = await res.json();
        return pokemon;
      })
    );
    renderList(pokemons);
  } catch (error) {
    console.error(error.message);
  } finally {
    hideLoading();
    console.log(url);
  }
};
const renderList = (pokemons) => {
  pokemons.map((pokemon) => renderPokemon({ ...pokemon }));
};
const renderPokemon = (data) => {
  const { id, name, types, stats, sprites } = data;
  let element = document.createElement("li");
  let src = sprites;
  let template = `<picture> <img src="${src.front_default}" alt=""/></picture>`;
  template += `<dl class="pokeData"><dt>${name}</dt><dd>${types
    .map(({ type }) => `<span>${type.name}</span>`)
    .join("")}</dd></dl>`;
  let statsList = stats.filter(({ stat }) =>
    ["hp", "attack", "defense", "speed"].includes(stat.name)
  );
  statsList = statsList.map((stat) => ({
    value: stat?.base_stat,
    attr: stat?.stat?.name, // attribute
  }));
  template += `<dl class="pokeStats">${statsList
    .map(({ attr, value }) => `<dt>${attr}</dt><dd>${value}</dd>`)
    .join("")}</dl>`;
  element.innerHTML = template;
  element.classList.add("pokemon");
  list.append(element);
  //     <dt>hp</dt>
  //     <dd>45</dd>
  //     <dt>attack</dt>
  //     <dd>49</dd>
  //     <dt>defense</dt>
  //     <dd>49</dd>
  //     <dt>speed</dt>
  //     <dd>45</dd>
  //   `;
};
const scrolling = () => {
  let scroll = Math.floor(list.clientHeight + list.scrollTop);
  let middle = list.clientHeight * 2;
  let bottom = Math.floor(list.scrollHeight - middle);
  if (loading) return;
  if (scroll >= bottom) {
    loadData();
  }
  console.log(scroll, bottom);
  //   console.log("altura de la lista", list.clientHeight);
  //   console.log("el desplazamiento del scroll", list.scrollTop);
  //   console.log("altura del scroll total", list.scrollHeight);
};

// Carga Inicial
loadData();

// Scrolling
list.addEventListener("scroll", scrolling);
