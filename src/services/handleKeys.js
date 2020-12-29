
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        let left = document.getElementById("left").style.visibility = 'hidden'
    }
    if (e.key === "ArrowRight") {
        let right = document.getElementById("right").style.visibility = 'hidden'
    }
    if (e.key === "ArrowUp") {
        let up = document.getElementById("up").style.visibility = 'hidden'
    }
    if (e.key === "ArrowDown") {
        let down = document.getElementById("down").style.visibility = 'hidden'
    }
})

document.addEventListener("keyup", function(e) {
    if (e.key === "ArrowLeft") {
        let left = document.getElementById("left").style.visibility = 'visible'
    }
    if (e.key === "ArrowRight") {
        let right = document.getElementById("right").style.visibility = 'visible'
    }
    if (e.key === "ArrowUp") {
        let up = document.getElementById("up").style.visibility = 'visible'
    }
    if (e.key === "ArrowDown") {
        let down = document.getElementById("down").style.visibility = 'visible'
    }
})

