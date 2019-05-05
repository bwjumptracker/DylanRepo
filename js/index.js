

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

const header = document.querySelector("header");
const mobileMenu = document.querySelector("#mobileMenu");
const nav = document.querySelector(".navLinks");


mobileMenu.addEventListener("click", (event) => {
    const nav = document.querySelector(".navLinks");
    nav.classList.toggle("activeMenu"); 
    header.classList.toggle("adjustHeight"); 
});

// fix for mobile menu height

const media = window.matchMedia("(min-width: 700px)");

media.addListener(mobileFix);
mobileFix(media);
    
function mobileFix(query) {
    if (query.matches) {
        header.classList.remove("adjustHeight");
        nav.classList.remove("activeMenu"); 
    }
}

// Review stars

class StarSelect {
    constructor(star){

        // Star selected
        this.star = star;

        // Match star selected to star review panels
        this.starData = this.star.dataset.stars; 
        this.panels = document.querySelectorAll(`.reviewPanel[data-stars='${this.starData}']`);

        // create new panel objects using the StarPanel constructor
        this.panels = Array.from(this.panels).map(panel => panel = new StarPanel(panel));

        // Event for selecting star review shown
        this.star.addEventListener("click", _ => this.selectStar());
    }
  
    selectStar(){


        // Select all StarSelect objects
        const stars = document.querySelectorAll(".stars");
        
        // remove starSelected and change color to darkgrey when not selected
        stars.forEach(star => {
             star.classList.remove('starSelected');
             star.style.color = "darkgrey";
        });

        // Loop through the stars up to the star selected and change color to goldenrod.
        for(let i = 1; i <= this.starData ; i++) {
            let starSelected = document.querySelectorAll(`.stars[data-stars='${i}']`);
            starSelected.forEach(selection => selection.style.color = "goldenrod")
        }
        
        // Select all reviewPanels and hide them
        const panels = document.querySelectorAll(".reviewPanel");
        panels.forEach(panel => panel.style.display = "none");

        // Select clicked StarSelect object
        this.star.classList.add("starSelected");

        // Select panels that correspond with the star selected
        this.panels.forEach(panel => panel.selectPanel());
    }
}
  
class StarPanel {
    constructor(panel){
    
        // select this review panel
        this.panel = panel;

        // Select the starContainer contained within the review panel
        const starContainer = this.panel.querySelector(".starContainer")
        
        // Loop x amount of times and add a star for every star in the stars dataset 
        for (let i = 0 ; i < this.panel.dataset.stars ; i++ ) {
            starContainer.innerHTML += '<i class="fas fa-star"></i>';
        }
    }

    selectPanel(){
        this.panel.style.display = "inline-block";
    }
  }

document.querySelectorAll(".stars").forEach(star => star = new StarSelect(star));

