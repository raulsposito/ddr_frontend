class Game{
    constructor(data){
        this.score = data.score;
        this.player_id = data.player_id
    }

    static getAll() {
        fetch('http://localhost:3000/api/v1/game')
        .then(r => r.json())
        .then(data => {
            data.forEach(game => {
                let newGameHtml = `
                <div className="card" data-id=${game.id}>
                <p>Previous Score: ${game.score}</p>
                `
                const container = document.querySelector(".container")
                container.innerHTML += newGameHtml;
            })
        })
    }

    static decrementCounter(){
        const currentCount = parseInt(counter.textContent, 10);
        if (currentCount > 0) {
            counter.textContent =  `${currentCount -1}`;
        }
        else
        Game.resume()
    }

    static resume() {
        counter.textContent = "Game Over";
        Game.postScore();
    }

    static start(){
        setInterval(Game.decrementCounter, 1000);
    }

    static postScore(){
        let score = document.querySelector("#score").innerHTML
 
        fetch('http://localhost:3000/api/v1/game', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                game: {
                    score: score
                }
            })
        })
    }
}

start.addEventListener("click", Game.start);