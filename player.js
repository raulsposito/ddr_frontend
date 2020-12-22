class Player{
    constructor(name){
        this.name = name
    }

    renderPlayer(){
        let playerDiv = document.getElementById("name-container")
    
        playerDiv.innerHTML +=
        `
        <h2>Player: ${this.name}</h2>
        <button class="delete" data-id=${this.id}>Delete</button>
        `
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createForm()
})

function createForm(){
    let playerForm = document.getElementById("name-form")

    playerForm.innerHTML += 
    `
    <form>
        <input type="text" id="name"><br>
        <input type="submit" value="Create Player"><br>
    </form>
    `

    playerForm.addEventListener("submit", playerFormSubmission)
}

function playerFormSubmission(){
    event.preventDefault();
    let name = document.getElementById("name").value   

    let player = {
        name: name
    }

    fetch('http://localhost:3000/api/v1/player', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(player)
    })
    .then(resp => resp.json())
    .then(player => {
        let p = new Player(player.name)
        p.renderPlayer();
    })
}

