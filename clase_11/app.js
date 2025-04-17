//
const showAlert = () => {
  alert("Hola desde JS");
};
const showMessage = (e) => {
  console.log("Clickeo", e.clientX, e.clientY);
};
// document.body.onclick = showAlert;
// document.body.onclick = showMessage;
// document.body.addEventListener("click", showAlert);
document.body.addEventListener("click", showMessage);
// document.body.addEventListener("mousemove", (e) => {
//   console.log("Posicion", e.clientX, e.clientY);
// });

window.addEventListener("keydown", (e) => {
  switch (e.key.toLowerCase()) {
    case "escape":
      document.body.style.backgroundColor = "#fafafa";
      break;
    case "a":
      document.body.style.backgroundColor = "tomato";
      break;
    case "s":
      document.body.style.backgroundColor = "teal";
      break;

    default:
      document.body.style.backgroundColor = "#131415";
  }
});

document.querySelector("#faq h2").addEventListener("click", (e) => {
  e.stopPropagation();

  const titulo = e.target;
  const section = titulo.closest("section");
  const lista = section.querySelector("ul");
  lista.classList.toggle("active");
  //   const isActive = lista.classList.contains("active");
  //   if (!isActive) {
  //     lista.classList.add("active");
  //   } else {
  //     lista.classList.remove("active");
  //   }
});

const imgBig = document.querySelector("#big");

const minis = document.querySelectorAll("#gallery ul li img");

minis.forEach((mini) =>
  mini.addEventListener("click", (e) => {
    e.stopPropagation();
    let newSrc = e.target.src;
    newSrc = newSrc.slice(0, newSrc.indexOf("?"));
    imgBig.src = newSrc;
  })
);
