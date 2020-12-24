let timer;

const counter = document.querySelector("#counter");
const banner = document.querySelector("#banner");

document.addEventListener('DOMContentLoaded', () => {
    getGames()
})

banner.addEventListener("click", startGame);

function startGame() {
    timer = setInterval(decrementCounter, 1000);
    getArrowsInput()
}

function decrementCounter() {
    const currentCount = parseInt(counter.textContent, 10);
    if (currentCount > 0) {
        counter.textContent =  `${currentCount - 1}`;
    }
    else
    resumeGame()
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
