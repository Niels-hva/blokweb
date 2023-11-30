

// stap 1: zoek de menu-button op en sla die op in een variabele
var openMenuButton = document.querySelector ("header > button");
var deNav = document.querySelector("header nav");


// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openMenuButton.onclick = openMenu;

// stap 3: voeg in de functie een class toe aan de nav
function openMenu(){
  deNav.classList.add("toonMenu");
}



var sluitButton = document.querySelector("header nav button");
sluitButton.onclick = sluitMenu;

function sluitMenu(){
  deNav.classList.remove("toonMenu");
  
}


var sluitMenuButton = document.querySelector("nav button");


