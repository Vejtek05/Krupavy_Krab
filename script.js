const MINIMUM = 75;
const MAXIMUM = 100;
const jmenoUzivatele = window.prompt('Jak ti mám říkat?', );
window.alert(`Ahoj, ${jmenoUzivatele}!`);
const jeHrac = window.confirm('Jsi hráč?');

if (jeHrac) {
    const vitejvehre = window.confirm('Tak vítej ve hře');
}

const target = document.getElementById("target");
const clickCountDisplay = document.getElementById("clickCount");
const squareSize = 500; 
const imagePaths = ['Mr._Krabs.svg.png', 'Plankton_stock_art.webp', 'Patrick_Star.svg.png' ,'Sandy_in_bikini.webp','spongebob.png','larry-foto.png']; 
let currentImageIndex = 0; 
let clickCount = 0; 

function getRandomPosition() {
    const maxX = squareSize - target.offsetWidth;
    const maxY = squareSize - target.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    return { x: randomX, y: randomY };
}

function moveTarget() {
    console.log("FUnguju!");
    const newPosition = getRandomPosition();
    target.style.left = newPosition.x + "px";
    target.style.top = newPosition.y + "px";

    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    target.style.backgroundImage = `url(${imagePaths[currentImageIndex]})`;
}

target.addEventListener("click", () => {
    moveTarget();
    clickCount++;
    clickCountDisplay.textContent = `Trefil jsi se: ${clickCount}`;
});

moveTarget();