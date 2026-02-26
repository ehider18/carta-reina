function abrirCofre() {
    const music = document.getElementById('musica');
    music.play().catch(() => console.log("Audio interactivo activado"));
    
    // Animación de apertura
    const lid = document.querySelector('.lid');
    lid.style.transformOrigin = "bottom";
    lid.style.transform = "translateY(-50px) rotateX(-110deg)";
    
    // Confeti de lujo
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#ffffff', '#a50016']
    });

    // Activar modo mágico en fondo
    document.getElementById('floatingElements').classList.add('active');

    // Transición de pantallas
    setTimeout(() => {
        const chestScreen = document.getElementById('chest-screen');
        chestScreen.style.opacity = '0';
        
        setTimeout(() => {
            chestScreen.classList.add('hidden');
            const mainContent = document.getElementById('main-content');
            mainContent.classList.remove('hidden');
            window.scrollTo(0, 0);
        }, 500);
    }, 1500);
}


// 🌸 PETALOS DORADOS AL HACER SCROLL
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        crearPetalos(6);
    }

    lastScroll = currentScroll;
});


function crearPetalos(cantidad) {
    for (let i = 0; i < cantidad; i++) {

        const petalo = document.createElement("div");
        petalo.innerHTML = "✨";
        petalo.classList.add("petalo");

        petalo.style.left = Math.random() * 100 + "vw";
        petalo.style.fontSize = (Math.random() * 10 + 15) + "px";
        petalo.style.animationDuration = (Math.random() * 2 + 3) + "s";

        document.body.appendChild(petalo);

        setTimeout(() => {
            petalo.remove();
        }, 4000);
    }
}


// CONTADOR
const target = new Date(2026, 1, 28, 18, 0, 0).getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = target - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (diff > 0) {
        document.getElementById('countdown').innerHTML =
            `Faltan ${hours}h y ${mins}m para nuestro encuentro... 🌹`;
    } else {
        document.getElementById('countdown').innerHTML =
            "¡Hoy es el gran día! 😍";
    }
}, 1000);