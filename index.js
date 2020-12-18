let timer;

const counter = document.querySelector("#counter");
const start = document.querySelector("#start");
const playerName = document.querySelector("#name");
const form = document.querySelector("#name-form");
const input = document.querySelector("#player");
const createButton = document.querySelector("#create-button");

document.addEventListener('DOMContentLoaded', () => {
    getGames()
})

const getGames = () => {
    fetch('http://localhost:3000/api/v1/game')
    .then(r => r.json())
    .then(data => renderGames(data))
}

form.addEventListener("submit", displayName);
input.addEventListener("change", handleInput);

function displayName(event) {
    event.preventDefault();
    input.style.display = 'none';
    createButton.style.display = 'none';
}

function handleInput(event) {
    const banner = document.querySelector("#banner");
    banner.textContent = event.target.value;
}

start.addEventListener("click", startGame);

const main = () => {
    return document.querySelector('main')
}

const renderGames = (gameData) => {
    gameData.forEach(game => renderGameCard(game))
}

const renderGameCard = (gameObj) => {
    let gameCard = document.createElement('div')
    gameCard.className = "card"
    gameCard.dataset.id = gameObj.id 
    gameCard.innerHTML = `Previous Scores: ${gameObj.score} by player ${gameObj.player_id}`
    main().appendChild(gameCard)
} 

function startGame() {
    timer = setInterval(decrementCounter, 1000);
}

function decrementCounter() {
    const currentCount = parseInt(counter.textContent, 10);
    if (currentCount > 0) {
        counter.textContent =  `${currentCount - 1}`;
    }
    else
    resumeGame()
    // else resume game
}

function resumeGame() {
    counter.textContent = "Game Over";
    // here would go a post request to game to post the score
}