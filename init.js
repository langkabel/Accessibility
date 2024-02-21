// variables to balance game
let handicapInterval = 10
let commandCountdown = 3
let upgradeThreshold = 3
let numberOfInteractionElementsAtBeginning = 3
const numberOfUpgradesToChooseFrom = 3

// variables to define 
let score = 0
let highscore = 0

// variables for command checking
let commandInteractionID = 0
let commandNumber = 0
let commandToDisplay = ""

// Arrays of implementation
let allInteractionElements = []
let implementedInteractionElements = []

let arrayOfAllHandicaps = []
let implementedHandicaps = []

let upgradesToShow = []
let implementedUpgrades = []

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
let endScoreDOM = document.getElementById(`end-score`)
let commandDOM = document.getElementById(`command`)
let countdownDOM = document.getElementById(`countdown`)
let highscoreDOM = document.getElementById(`highscore`)
let handicapNameDOM = document.getElementById("handicap-name")
let handicapDescriptionDOM = document.getElementById("handicap-description")

// progress bars
let upgradebarDOM = document.getElementById("upgradebar")
let handicapbarDOM = document.getElementById("progressbar")

// helper functions
function updateScore(onUpgrade) {
    score = score + 1;
    console.log({score})
    scoreDOM.innerText = score

    let progress = (100 / (upgradeThreshold - 1)) * (score % upgradeThreshold)
    upgradebarDOM.style.width = progress + '%'

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



