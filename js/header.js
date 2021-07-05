
// Mobile menu

const header = document.querySelector("header");
const mobileMenu = document.querySelector("#mobileMenu");
const nav = document.querySelector(".navLinks");


mobileMenu.addEventListener("click", (event) => {
    const nav = document.querySelector(".navLinks");
    header.style.transition = "all 0.25s ease-in-out";
    header.classList.toggle("adjustHeight"); 
});

// fix for mobile menu height

const media = window.matchMedia("(min-width: 700px)");

media.addListener(mobileFix);
mobileFix(media);
    
function mobileFix(query) {
    if (query.matches) {
        header.classList.remove("adjustHeight");
        header.style.transition = "all 0s linear";
    }
}