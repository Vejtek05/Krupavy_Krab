const MINIMUM = 75;
const MAXIMUM = 100;
const jmenoUzivatele = window.prompt('Jak ti mám říkat?', );
window.alert(`Ahoj, ${jmenoUzivatele}!`);
const jeZena = window.confirm('Jsi hráč?');

if (jeZena) {
  const rokNarozeni = window.confirm('Tak vítej ve hře');
}
const target = document.getElementById("target");
const squareSize = 500; 
const imagePaths = ['Mr._Krabs.svg.png', 'Plankton_stock_art.webp', 'Patrick_Star.svg.png' ,'Sandy_in_bikini.webp' ]; 
let currentImageIndex = 0; 
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
    });
    
    moveTarget();
