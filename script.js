const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav a");

// cria a barra flutuante
const bar = document.createElement("div");
bar.classList.add("nav-indicator");
nav.appendChild(bar);

// função para posicionar a barra
function moveBar(link) {
    bar.style.width = link.offsetWidth + "px";
    bar.style.left = link.offsetLeft + "px";
}

// inicializa no link ativo
const active = document.querySelector("nav a.ativo");
moveBar(active);

// animação no hover
links.forEach(link => {
    link.addEventListener("mouseenter", () => moveBar(link));
    link.addEventListener("mouseleave", () => moveBar(active));
});


