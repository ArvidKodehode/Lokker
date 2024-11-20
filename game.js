// Spillvariabler
let health;
let isPlaying;

// HTML-elementer
const output = document.getElementById("game-output");
const startButton = document.getElementById("start-game");

// Funksjon for å logge meldinger til spillvinduet
function logMessage(message) {
    output.innerHTML += `<p>${message}</p>`;
    output.scrollTop = output.scrollHeight; // Rull til bunn
}

// Funksjon for å starte spillet
function startGame() {
    health = 100; // Start helse
    isPlaying = true; // Spillstatus

    output.innerHTML = ""; // Tømmer spillvinduet
    logMessage("Spillet har startet! Helsen din er 100.");

    // Start while-løkke for spillmekanikk
    while (health > 0 && isPlaying) {
        let dice = Math.floor(Math.random() * 6) + 1; // Kast en terning
        logMessage(`Du kastet terningen og fikk: ${dice}`);

        if (dice === 6) {
            logMessage("Du fant en helse-pakke! Helsen din øker med 20.");
            health += 20; // Øk helse
        } else if (dice === 1) {
            logMessage("Du møtte en fiende! Du mistet 30 helse.");
            health -= 30; // Reduser helse
        } else {
            logMessage("Ingen store hendelser denne gangen.");
        }

        logMessage(`Nåværende helse: ${health}`);

        if (health <= 0) {
            logMessage("Du har tapt spillet! Trykk 'Start Spill' for å prøve igjen.");
            isPlaying = false; // Avslutt spillet
        }

        break; // Avslutt én iterasjon av løkken for å vente på spilleren
    }
}

// Funksjon for å fortsette spillet
function continueGame() {
    if (!isPlaying || health <= 0) return;

    while (health > 0 && isPlaying) {
        let dice = Math.floor(Math.random() * 6) + 1; // Kast en terning
        logMessage(`Du kastet terningen og fikk: ${dice}`);

        if (dice === 6) {
            logMessage("Du fant en helse-pakke! Helsen din øker med 20.");
            health += 20; // Øk helse
        } else if (dice === 1) {
            logMessage("Du møtte en fiende! Du mistet 30 helse.");
            health -= 30; // Reduser helse
        } else {
            logMessage("Ingen store hendelser denne gangen.");
        }

        logMessage(`Nåværende helse: ${health}`);

        if (health <= 0) {
            logMessage("Du har tapt spillet! Trykk 'Start Spill' for å prøve igjen.");
            isPlaying = false; // Avslutt spillet
        }

        break; // Simuler en pause for å vente på brukeren
    }
}

// Hendelse: Start spill ved å klikke på knappen
startButton.addEventListener("click", startGame);

// La spiller trykke "Mellomrom" for å fortsette spillet
document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && isPlaying) {
        continueGame();
    }
});
