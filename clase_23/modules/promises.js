// Promesas || new Promise

// const data = async () => {};

const loader = (sucess = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ msg: "Hola desde una promesa" }), 1000);
    if (!sucess) {
      reject(new Error("Promesa rechazada, no tenes los datos"));
    }
  });
};

loader(false)
  .then((res) => console.log(res))
  .catch((e) => console.log(e.message));
