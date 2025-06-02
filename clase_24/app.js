const API_URL = "https://pokeapi.co/api/v2";
const getPoke = async (id = null) => {
  let url = `${API_URL}/pokemon/`;
  if (id) {
    url += id;
  }
  let respuesta = await fetch(url);
  return await respuesta.json();
};
getPoke().then((pokemones) => console.log(pokemones));

const DATA_URL = "/data.json";
let loading = true;
const getProductos = async () => {
  try {
    console.log(loading);
    let respuesta = await fetch(DATA_URL, {
      method: "GET",
      //   headers:{},
      //   data:{}
    });
    return await respuesta.json();
  } catch (error) {
    console.log(error.message);
  } finally {
    loading = false;
    console.log(loading);
  }
};

// getProductos().then((productos) => console.log(productos));
