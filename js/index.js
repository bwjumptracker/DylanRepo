

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

// Review stars

class StarSelect {
    constructor(star){

        // Star selected
        this.star = star;

        // Match star selected to star review panels
        this.starData = this.star.dataset.stars; 
        
        this.panels = (this.starData === "all") ? document.querySelectorAll(".reviewPanel") : document.querySelectorAll(`.reviewPanel[data-stars='${this.starData}']`);

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
        if (this.starData === "all") {
            const AllstarsSelected = document.querySelectorAll(".stars");
            AllstarsSelected.forEach(selection => selection.style.color = "goldenrod");
            }
        else {
            for(let i = 1; i <= this.starData ; i++) {
                let starSelected = document.querySelector(`.stars[data-stars='${i}']`);
                starSelected.style.color = "goldenrod";
            }
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
    }

    selectPanel(){
        this.panel.style.display = "inline-block";
    }
}

// Select all stars class
constructedStars = document.querySelectorAll(".stars")

// Loop through .stars elements and construct selector components
constructedStars.forEach(star => {

    star = new StarSelect(star)

    // Select 4 stars panels by default
    if (star.starData === "4") {
        star.selectStar();
    }

    return star;
});

// Add review stars to review panels
document.querySelectorAll(".reviewPanel").forEach(panel => {
    const stars = panel.dataset.stars;
    const starContainer = panel.querySelector(".starContainer")

    // Add a star for every star in dataset.stars
    for (let i = 0 ; i < panel.dataset.stars ; i++ ) {
            starContainer.innerHTML += '<i class="fas fa-star"></i>';
    }
    
});