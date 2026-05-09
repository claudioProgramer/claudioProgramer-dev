// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");
const body = document.body;

// =========================
// REVEAL ON SCROLL
// =========================

const reveals = document.querySelectorAll(".reveal");


function revealElements() {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 100;


        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}


window.addEventListener("scroll", revealElements);


revealElements();



// =========================
// TYPING EFFECT
// =========================

const typingText = document.getElementById("typing-text");


const words = [

    "Desarrollador Web",
    "Frontend Moderno",
    "Automatización",
    "Sistemas Técnicos",
    "Soluciones Reales"

];


let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];


    if (isDeleting) {

        typingText.textContent = currentWord.substring(0, charIndex--);

    } else {

        typingText.textContent = currentWord.substring(0, charIndex++);
    }


    let speed = isDeleting ? 50 : 100;


    if (!isDeleting && charIndex === currentWord.length + 1) {

        speed = 1500;

        isDeleting = true;

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;

        wordIndex = (wordIndex + 1) % words.length;
    }


    setTimeout(typeEffect, speed);
}


typeEffect();



// =========================
// PARTICLES BACKGROUND
// =========================

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


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("navbar-scroll");
        body.classList.add("navbar-active");

    } else {

        navbar.classList.remove("navbar-scroll");
        body.classList.remove("navbar-active");
    }

});



// =========================
// CURSOR GLOW EFFECT
// =========================

const glow = document.querySelector(".cursor-glow");


document.addEventListener("mousemove", (e) => {

    glow.style.left = `${e.clientX}px`;

    glow.style.top = `${e.clientY}px`;

});