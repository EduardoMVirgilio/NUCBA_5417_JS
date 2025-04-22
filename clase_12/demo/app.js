const langs = ["es", "us"];
const links = { es: [], us: [] };
// Links Español
links.es.push({ target: "#inicio", label: "Inicio" });
links.es.push({ target: "#servicios", label: "Servicios" });
links.es.push({ target: "#nosotros", label: "Nosotros" });
links.es.push({ target: "#contacto", label: "Contacto" });
// Links Ingles
links.us.push({ target: "#start", label: "Home" });
links.us.push({ target: "#services", label: "Services" });
links.us.push({ target: "#aboutus", label: "About Us" });
links.us.push({ target: "#contact", label: "Contact" });

var defaultLang = localStorage.getItem("lang") || "es";
const showLinks = () => {
  const navbar = document.querySelector("#links");
  navbar.innerHTML = null;
  for (const link of links[defaultLang]) {
    let a = document.createElement("a");
    a.href = link.target;
    a.innerText = link.label;
    navbar.append(a);
  }
};

showLinks();

// Show traducciones
const formLangs = document.querySelector("#lang");

for (const lang of langs) {
  let optionLang = document.createElement("input");
  optionLang.setAttribute("value", lang);
  optionLang.name = "langs";
  optionLang.id = `langs-${lang}`;
  optionLang.type = "radio";
  if (defaultLang === lang) {
    optionLang.checked = true;
  }
  let labelLang = document.createElement("label");
  labelLang.setAttribute("for", `langs-${lang}`);
  labelLang.innerHTML = `<img src='https://raw.githubusercontent.com/lipis/flag-icons/refs/heads/main/flags/1x1/${lang}.svg'/>`;
  formLangs.append(labelLang, optionLang);
  optionLang.onchange = (e) => {
    e.preventDefault();
    defaultLang = e.target.value;
    localStorage.setItem("lang", defaultLang);
    showLinks();
  };
}
