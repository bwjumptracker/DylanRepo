

// Banner text
const bannerBox = document.querySelector(".bannerText");

bannerBox.addEventListener("mouseenter", (event) => {
    event.target.style.boxShadow = "0px 0px 20px 10px rgba(0, 0, 0, 0.5)";
    event.target.style.transition = "box-shadow 0.5s ease-in-out";
    event.stopPropagation();
});

bannerBox.addEventListener('mouseleave', (event) => {
    event.target.style.boxShadow = "0px 0px 10px 5px rgba(0, 0, 0, 0.50)";
    event.target.style.transition = "box-shadow 0.5s ease-in-out";
    event.stopPropagation();
});

// Mobile menu

const mobileMenu = document.querySelector("#mobileMenu");

mobileMenu.addEventListener("click", (event) => {
    const nav = document.querySelector(".navLinks");
    nav.classList.toggle("activeMenu"); 

    const header = document.querySelector("header");
    header.classList.toggle("adjustHeight"); 
});
