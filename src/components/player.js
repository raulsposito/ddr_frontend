class Player{
    constructor(name){
        this.name = name
    }

    renderPlayer(){
    
        banner.innerHTML =
        `
        <h2>Welcome ${this.name}!</h2>
        <button id="dlt-btn" data-id=${this.name}>Delete</button>
        `
        const input = document.querySelector("#name-form");
        input.style.display = 'none';
        let btn = document.getElementById("dlt-btn")
        btn.addEventListener("click", this.deletePlayer)
    }
    
    deletePlayer(){
        debugger  // here I need the value of the player id
        let deleteObj = event.target.dataset.id
        fetch("http://localhost:3000/api/v1/player", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(deleteObj),
        })
        .then(resp => resp.json())
        .then(()=> {
            alert("Player deleted")
            this.location.reload()
        }) 
        .catch(error => alert(`Couldn't delete player and ${error}`))
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
    // second fetch call to post players 
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

