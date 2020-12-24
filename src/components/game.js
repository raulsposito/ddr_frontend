
class Game{
    constructor(data){
        this.score = data.score;
        this.player_id = data.player_id
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
    // hideStage();
    // postScore();
    // let score = document.querySelector("#score");
}

function getArrowsInput() {
    let up = document.getElementById("button-up")
    let left = document.getElementById("button-left")
    let right = document.getElementById("button-right")
    let down = document.getElementById("button-down")

    document.addEventListener("keydown", (e) => {

        switch (e.code) {
            case 38:
                left;
                break;
            case 38: 
                up;
                break;
            case 39:
                right;
                break;
            case 40:
                down;
                break;
        }
    })
}


