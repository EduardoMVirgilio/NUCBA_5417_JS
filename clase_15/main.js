// Profile
const profile = {
  image:
    "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png",
  name: "Eduardo Virgilio",
  location: "CABA - Buenos Aires | Argentina 🇦🇷",
  role: "💻 Full Stack Dev | NodeJS 🚀",
  links: [
    { alias: "Github 🐈", link: "https://github.com/EduardoMVirgilio" },
    {
      alias: "LinkedIn 👜",
      link: "https://linkedin.com/in/eduardomiguelvirgilio",
    },
    {
      alias: "YouTube 🔴",
      link: "https://www.youtube.com/@front_edu",
    },
    {
      alias: "Twitch 🎮",
      link: "https://www.twitch.tv/front_edu",
    },
    {
      alias: "Cafecito ☕",
      link: "https://cafecito.app/front_edu",
    },
  ],
};

const avatar = document.querySelector("#avatar");
const name = document.querySelector("#name");
const location = document.querySelector("#location");
const role = document.querySelector("#role");
const links = document.querySelector("#links");

if (avatar) {
  const image = document.createElement("img");
  image.src = profile.image;
  avatar.append(image);
}

name.innerHTML = profile.name;
location.innerHTML = profile.location;
role.innerHTML = profile.role;

for (const link of profile.links) {
  const hyperlink = document.createElement("a");
  hyperlink.href = link.link;
  hyperlink.innerHTML = link.alias;
  hyperlink.target = "_blank";
  links.append(hyperlink);
}
