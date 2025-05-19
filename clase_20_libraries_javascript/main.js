import TypeIt from "typeit";
let typing = new TypeIt("#element", {
  speed: 50,
  startDelay: 900,
})
  .type("the mot versti", { delay: 100 })
  .move(-8, { delay: 100 })
  .type("s", { delay: 400 })
  .move(null, { to: "START", instant: true, delay: 300 })
  .move(1, { delay: 200 })
  .delete(1)
  .type("T", { delay: 225 })
  .pause(200)
  .move(2, { instant: true })
  .pause(200)
  .move(5, { instant: true })
  .move(5, { delay: 200 })
  .type("a", { delay: 350 })
  .move(null, { to: "END" })
  .type("le typing utlity")
  .move(-4, { delay: 150 })
  .type("i")
  .move(null, { to: "END" })
  .type(' on the <span class="place">internet</span>', { delay: 400 })
  .delete(".place", { delay: 800, instant: true })
  .type('<em><strong class="font-semibold">planet.</strong></em>', {
    speed: 100,
  });

let startButton = document.querySelector("#start");
startButton.addEventListener("click", () => {
  typing.go();
});

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  typing.reset();
});

// Scroll reveal
import ScrollReveal from "scrollreveal";

let list = document.querySelector("#list");

Array.from({ length: 10 }, (_, i) => {
  let li = document.createElement("li");
  li.textContent = `Item ${i + 1}`;
  list.appendChild(li);
});

document.querySelectorAll("#list li").forEach((li) => {
  new ScrollReveal().reveal(li, {
    duration: 500,
    distance: "50px",
    origin: "right",
    interval: 200,
    reset: false,
    useDelay: "always",
  });
});

// Splide
import Splide from "@splidejs/splide";

new Splide(".splide", {
  type: "loop",
  perPage: 1,
  perMove: 1,
  gap: "1rem",
  interval: 2000,
}).mount();
