let timer;

const counter = document.querySelector("#counter");
const start = document.querySelector("#start");

 document.addEventListener('DOMContentLoaded', () => {
     getGames()
})

const getGames = () => {
    fetch('http://localhost:3000/api/v1/game')
    .then(r => r.json())
    .then(data => renderGames(data))
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
    gameCard.innerHTML = `${gameObj.score}`
    main().appendChild(gameCard)
    let gameList = documentCreate('ul')
    gameCard.appendChild(gameList)
} 
// const renderPlayerCard = (playerObj) => {
//     let playerCard = document.createElement('div')
//     playerCard.className = "card"
//     playerCard.dataset.id = playerObj.id 
//     playerCard.innerHTML = `<p>${playerObj.name}</p>`
//     main().appendChild(playerCard)
//     let playerList = document.createElement('ul')
//     playerCard.appendChild(playerList)
// }

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