// variables to balance game
let handicapInterval = 6
let commandCountdown = 7
let upgradeThreshold = 7
let numberOfInteractionElementsAtBeginning = 3

// variables to define 
let score = 0
let highscore = 0

//

// DOM buttons
let continueFromUpgradeButtonDOM = document.getElementById("upgrade-continue-button")

// Screen Definitions
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


// text Definition
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

// helper functions
score++;

let dynamicText = document.getElementById(`score`)
dynamicText.innerText = score

// let progress = (100 / (upgradeThreshold - 1)) * (score % upgradeThreshold)
// upgradebarDom.style.width = progress + '%'

if (score > highscore) {
    highscore = score
} 
if (score % upgradeThreshold === 0) {
    game.changeState(new UpgradeState())   
}


function getLastObjectOfArray(array) {
    return array[array.length - 1]
}