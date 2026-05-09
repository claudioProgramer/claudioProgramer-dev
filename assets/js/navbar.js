/* ========================= */
/* NAVBAR SCROLL EFFECT */
/* ========================= */

const navbar = document.querySelector(".navbar");
const body = document.body;


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("navbar-scroll");
        body.classList.add("navbar-active");

    } else {

        navbar.classList.remove("navbar-scroll");
        body.classList.remove("navbar-active");
    }

});
