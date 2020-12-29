class Player{
    constructor(name, id){
        this.name = name
        this.id = id
    }

    renderPlayer(){
    
        banner.innerHTML =
        `
        <h2>Welcome ${this.name}!</h2>
        `
        const input = document.querySelector("#name-form");
        input.style.display = 'none';

        // let btn = document.getElementById("dlt-btn")
        // btn.addEventListener("click", deletePlayer)
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
        let p = new Player(player.name, player.id)
        Player.currenPlayer = p 
        p.renderPlayer();
    })
}

// function deletePlayer(e) {
//     // debugger
//     e.preventDefault()
//     fetch(`http://localhost:3000/api/v1/player/${e.target.dataset.id}`, {
//         method: 'DELETE'
//     })
//     .then(resp => resp.json())
//     .then(()=> {
//         alert("Player deleted")
//         // this.location.reload()
//         removePlayer()
//     }) 
//     .catch(error => alert(`Couldn't delete player and ${error}`))
// }
// 
// const removePlayer = () => {
//     banner.innerHTML = 
//     `
//     Thank you for playing!
//     `
// }