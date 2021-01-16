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
    }

    static createForm(){
        let playerForm = document.getElementById("name-form")

        playerForm.innerHTML += 
        `
        <form>
            <input type="text" id="name"><br>
            <input type="submit" value="Create Player"><br>
        </form>
        `
    
        playerForm.addEventListener("submit", this.FormSubmission)
    }

    static FormSubmission(){
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
}

document.addEventListener('DOMContentLoaded', () => {
    Player.createForm()
})