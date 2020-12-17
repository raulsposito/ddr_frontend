document.addEventListener('DOMContentLoaded', () => {
    getPlayers()
})

const main = () => {
    return document.querySelector('main')
}

const getPlayers = () => {
    fetch('http://localhost:3000/api/v1/player')
    .then(r => r.json())
    .then(data => renderPlayers(data))
}

const renderPlayers = (playersData) => {
    playersData.forEach(player => renderPlayerCard(player))
}

const renderPlayerCard = (playerObj) => {
    let playerCard = document.createElement('div')
    playerCard.className = "card"
    playerCard.dataset.id = playerObj.id 
    playerCard.innerHTML = `<p>${playerObj.name}</p>`
    main().appendChild(playerCard)
    let playerList = document.createElement('ul')
    playerCard.appendChild(playerList)
}