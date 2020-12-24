function getArrowsInput() {
    let up = document.getElementById("button-up")
    let left = document.getElementById("button-left")
    let right = document.getElementById("button-right")
    let down = document.getElementById("button-down")

    document.addEventListener("keydown", (e) => {
        switch (e.code) {
            case 38:
                left();
                break;
            case 38: 
                up();
                break;
            case 39:
                right();
                break;
            case 40:
                down();
                break;
        }
    })
}