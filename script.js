// ===== CLOCK =====
function showTime() {
  const now = new Date();
  const timeBox = document.getElementById("timeBox");
  if (timeBox) timeBox.textContent = now.toLocaleTimeString();
}
setInterval(showTime, 1000);
showTime();

// ===== SCROLL REVEAL =====
const scrollElements = document.querySelectorAll(".scroll-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.18 }
);

scrollElements.forEach((el) => observer.observe(el));

// ===== PROJECT DATA =====
import { animes } from "./data.js";

const container = document.getElementById("container");

if (container && Array.isArray(animes)) {
  animes.forEach((anime) => {
    const card = document.createElement("div");
    card.className = "anime_div scroll-up";
    card.onclick = () => alert(anime.description);

    const ep = document.createElement("div");
    ep.className = "episode_amount";
    ep.textContent = `${anime.episode_amount} ตอน`;

    const img = document.createElement("img");
    img.src = anime.anime_url;

    const p = document.createElement("p");
    p.textContent = anime.name;

    card.append(ep, img, p);
    container.appendChild(card);

    observer.observe(card);
  });
}
