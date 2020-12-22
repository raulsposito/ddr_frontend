
class Game{
    constructor(score, player_id){
        this.score = score;
        this.player_id = player_id
    }
}

// first fetch call to get previous Game Scores
const getGames = () => {
    fetch('http://localhost:3000/api/v1/game')
    .then(r => r.json())
    .then(data => renderGames(data))
}


const renderGames = (gameData) => {
    gameData.forEach(game => renderGameCard(game))
}

const main = () => {
    return document.querySelector('main')
}

const renderGameCard = (gameObj) => {
    let gameCard = document.createElement('div')
    gameCard.className = "card"
    gameCard.dataset.id = gameObj.id 
    gameCard.innerHTML = `Previous Scores: ${gameObj.score} by player ${gameObj.player_id}`
    main().appendChild(gameCard)
} 

function resumeGame() {
    counter.textContent = "Game Over";
    // let score = document.querySelector("#score");
}
