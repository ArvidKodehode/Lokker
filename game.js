let health = 100;
const healthDisplay = document.getElementById('health');
const messageDisplay = document.getElementById('message');
const rollButton = document.getElementById('rollButton');
let gameRunning = true;

// Oppdaterer UI med helse og melding
function updateUI(message) {
  healthDisplay.textContent = Math.max(health, 0); // Unngå negativ helse
  messageDisplay.textContent = message;
}

// Utfører ett terningkast
function playTurn() {
  const diceRoll = Math.floor(Math.random() * 6) + 1; // 1-6
  let message = `Du kastet ${diceRoll}!`;

  if (diceRoll === 1) {
    health -= 20;
    message += " Du mistet 20 helsepoeng!";
  } else if (diceRoll === 6) {
    health += 30;
    message += " Du fikk 30 helsepoeng!";
  } else {
    message += " Ingen endring i helse.";
  }

  updateUI(message);

  // Sjekker om spillet er over
  if (health <= 0) {
    gameRunning = false;
    rollButton.textContent = "Start på nytt";
    updateUI("Spillet er over! Trykk på knappen for å starte på nytt.");
  }
}

// Starter spillet
rollButton.addEventListener('click', () => {
  if (!gameRunning) {
    restartGame();
  } else {
    playTurn(); // Utfør ett kast
  }
});

// Starter spillet på nytt
function restartGame() {
  health = 100;
  gameRunning = true;
  rollButton.textContent = "Kast Terning";
  updateUI("Trykk på 'Kast Terning' for å starte!");
}
