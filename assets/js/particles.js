/* ========================= */
/* PARTICLES BACKGROUND */
/* ========================= */

const particlesContainer = document.querySelector(".particles");


function createParticle() {

    const particle = document.createElement("div");

    particle.classList.add("particle");


    const size = Math.random() * 8 + 2;

    particle.style.width = `${size}px`;

    particle.style.height = `${size}px`;


    particle.style.left = `${Math.random() * 100}%`;


    const duration = Math.random() * 10 + 10;

    particle.style.animationDuration = `${duration}s`;


    particle.style.opacity = Math.random();


    particlesContainer.appendChild(particle);


    setTimeout(() => {

        particle.remove();

    }, duration * 1000);
}


setInterval(createParticle, 300);
