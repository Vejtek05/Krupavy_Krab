const MINIMUM = 75;
const MAXIMUM = 100;
const jmenoUzivatele = window.prompt('Jak ti mám říkat?', );
window.alert(`Ahoj, ${jmenoUzivatele}!`);
const jeHrac = window.confirm('Jsi hráč?');

if (jeHrac) {
    const rokNarozeni = window.confirm('Tak vítej ve hře');
}

const target = document.getElementById("target");
const clickCountDisplay = document.getElementById("clickCount");
const missedCountDisplay = document.getElementById("missedCount");
const squareSize = 500; 
const imagePaths = ['Mr._Krabs.svg.png', 'Plankton_stock_art.webp', 'Patrick_Star.svg.png' ,'Sandy_in_bikini.webp','spongebob.png','larry-foto.png']; 
let currentImageIndex = 0; 
let clickCount = 0;
let missedCount = 0;

function getRandomPosition() {
    const maxX = squareSize - target.offsetWidth;
    const maxY = squareSize - target.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    return { x: randomX, y: randomY };
}

function moveTarget() {
    console.log("Funguju!");
    const newPosition = getRandomPosition();
    target.style.left = newPosition.x + "px";
    target.style.top = newPosition.y + "px";

    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    target.style.backgroundImage = `url(${imagePaths[currentImageIndex]})`;
}

document.addEventListener("click", (event) => {
    const rect = target.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    if (clickX >= 0 && clickY >= 0 && clickX <= target.offsetWidth && clickY <= target.offsetHeight) {
        moveTarget();
        clickCount++;
        clickCountDisplay.textContent = `Hit: ${clickCount}`;
    } else {
        missedCount++;
        missedCountDisplay.textContent = `Miss: ${missedCount}`;
    }
});

moveTarget();

const JMENO = '----';
const HESLO = '----';
let prihlaseny = false;
let jeRobot = false;
let pocetPokusu = 0;

do {
  if (pocetPokusu >= 3) {
    jeRobot = window.confirm('Jsi trouba?');
  }
  const uzivatelskeHeslo = window.prompt(`Chceš vážně hrát? Odpověz ano/ne`);
  if (uzivatelskeHeslo === HESLO && !jeRobot) {
    prihlaseny = true;
  }
  else {
    pocetPokusu ++;
  }
} while (!prihlaseny && !jeRobot && pocetPokusu < 6);

if (prihlaseny) {
  window.alert('Jsi si jistý?');
}

else {
  window.alert('Tak si to užij!');
}
