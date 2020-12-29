document.addEventListener('DOMContentLoaded', () => {
    let timer;
    const counter = document.querySelector("#counter");
    const start = document.querySelector("#start");
    getGames()
})

start.addEventListener("click", startGame);

function startGame() {
    timer = setInterval(decrementCounter, 1000);
}
