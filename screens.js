class Screen {
    constructor (id) {
        this.overlay = document.getElementById(`${id}`)
        this.id = id
    }

    open () {
        if (this.overlay.classList.contains("not-displayed")) {
            this.overlay.classList.remove("not-displayed")
        } else {
            console.log(`${this.id} is already opened.`)
        }
    }

    close () {
        if (!this.overlay.classList.contains("not-displayed")) {
            this.overlay.classList.add("not-displayed")
        } else {
            console.log(`${this.id} is closed.`)
        }
    }
}

let startScreen = new Screen("start-screen")
let countdownScreen = new Screen("countdown-screen")
let gameOverScreen = new Screen("game-over-screen")
let playScreen = new Screen("play-screen")
let handicapScreen = new Screen("handicap-screen")
let upgradeScreen = new Screen("upgrade-screen")

class DynamicText {
    constructor(id) {
        this.dynamicText = document.getElementById(`${id}`)
    }

    update (update) {
        this.dynamicText.innerText = update
    }
}


class Button {
    constructor(id, exec) {
        this.button = document.getElementById(`${id}`)  
        this.button.addEventListener("click", exec)
        this.exec = exec
    }

    deactivate() {
        if (this.button.addEventListener("click", exec)) {
            this.button.addEventListener("click", null)
        }  
    }

    activate() { 
        if (this.button.addEventListener("click", null)) {
            this.button.addEventListener("click", exec)
        }
    }
}

