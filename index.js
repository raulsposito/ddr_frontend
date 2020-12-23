let timer;

const counter = document.querySelector("#counter");
const start = document.querySelector("#button-start");
// const playerName = document.querySelector("#name");
// const form = document.querySelector("#name-form");
// const input = document.querySelector("#player");
// const createButton = document.querySelector("#create-button");

document.addEventListener('DOMContentLoaded', () => {
    getGames()
})

// form.addEventListener("submit", displayName);
// input.addEventListener("change", handleInput);

// function displayName(event) {
//     event.preventDefault();
//     input.style.display = 'none';
//     createButton.style.display = 'none';
// }

// function handleInput(event) {
//     const banner = document.querySelector("#banner");
//     banner.textContent = event.target.value;
// }

function startGame() {
    timer = setInterval(decrementCounter, 1000);
    getArrowsInput()
}

start.addEventListener("click", startGame);


function decrementCounter() {
    const currentCount = parseInt(counter.textContent, 10);
    if (currentCount > 0) {
        counter.textContent =  `${currentCount - 1}`;
    }
    else
    resumeGame()
    // else resume game
}


    // postGameScore(score)
    // postGameScore()here would go a post request to game to post the score
// function postGameScore(score) {
//     return fetch('http://localhost:3000/api/v1/game', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json", 
//             "Accept": "application/json"
//         },
//         body: JSON.stringify( {
//             score 
//         })
//     })
//     .then( function (response) {
//         return response.json()
//     })
//     .then( function ( object ) {
//         document.body.innerHTML = object["id"]
//     })
//     .catch( function (error) {
//         document.body.innerHTML = error.message
//     })
// }
