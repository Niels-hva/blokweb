
// stap 1: zoek de menu-button op en sla die op in een variabele
var openMenuButton = document.querySelector("header > section > ul > li:last-of-type");
var deNav = document.querySelector("header > nav");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openMenuButton.onclick = openMenu;

// stap 3: voeg in de functie een class toe aan de nav
function openMenu(){
  deNav.classList.add("toonMenu");
}

/************************************/
/* menu sluiten met de sluit button */
/************************************/

// stap 1 - zoek sluiten button op
var sluitButton = document.querySelector("header > nav button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu(){
  deNav.classList.remove("toonMenu");
}
