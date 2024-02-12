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

let startScreenDOM = new Screen("start-screen")
let countdownScreenDOM = new Screen("countdown-screen")
let gameOverScreenDOM = new Screen("game-over-screen")
let playScreenDOM = new Screen("play-screen")
let handicapScreenDOM = new Screen("handicap-screen")
let upgradeScreenDOM = new Screen("upgrade-screen")

class DynamicText {
    constructor(id) {
        this.dynamicText = document.getElementById(`${id}`)
        
    }

    update(change) {
        this.dynamicText.innerText = `${change}`
        this.dynamicText.textContent = `${change}`
    }
}

let countdownDOM = new DynamicText("countdown")
let scoreDOM = new DynamicText("score")
let highscoreDOM = new DynamicText("highscore")


