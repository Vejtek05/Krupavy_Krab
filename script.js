const target = document.getElementById("target");
const squareSize = 500; 
const imagePaths = ['Mr._Krabs.svg.png', 'Plankton_stock_art.webp']; 
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