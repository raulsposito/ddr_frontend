// function getArrowsInput() {
//     let up = document.getElementById("button-up")
//     let left = document.getElementById("button-left")
//     let right = document.getElementById("button-right")
//     let down = document.getElementById("button-down")
// 
//     document.addEventListener("keydown", (e) => {
//         switch (e.code) {
//             case 38:
//                 left();
//                 break;
//             case 38: 
//                 up();
//                 break;
//             case 39:
//                 right();
//                 break;
//             case 40:
//                 down();
//                 break;
//         }
//     })
// }

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
