// variables to balance game
let handicapInterval = 6
let commandCountdown = 7
let upgradeThreshold = 3
let numberOfInteractionElementsAtBeginning = 3

// variables to define 
let score = 0
let highscore = 0

// variables for command checking
let commandInteractionID = 0
let commandNumber = 0

let commandToDisplay = ""

//
let implementedInteractionElements = []

// DOM buttons
let continueFromUpgradeButtonDOM = document.getElementById("upgrade-continue-button")

// Screen Class
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

//

let startScreenDOM = new Screen("start-screen")
let countdownScreenDOM = new Screen("countdown-screen")
let gameOverScreenDOM = new Screen("game-over-screen")
let playScreenDOM = new Screen("play-screen")
let handicapScreenDOM = new Screen("handicap-screen")
let upgradeScreenDOM = new Screen("upgrade-screen")

// text Definition
let scoreDOM = document.getElementById(`score`)
let commandDOM = document.getElementById(`command`)
let countdownDOM = document.getElementById(`countdown`)
let highscoreDOM = document.getElementById(`highscore`)

// helper functions
function updateScore(onUpgrade) {
    score++;
    scoreDOM.innerText = score

    // let progress = (100 / (upgradeThreshold - 1)) * (score % upgradeThreshold)
    // upgradebarDom.style.width = progress + '%'

    if (score > highscore) {
        highscore = score
        highscoreDOM.innerText = highscore
    } 
    if (score % upgradeThreshold === 0) {
        onUpgrade()   
    }
}

function getLastObjectOfArray(array) {
    return array[array.length - 1]
}

