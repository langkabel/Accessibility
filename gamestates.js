// game class definition to handle states and transitions
class Game {
    constructor () {
        this.currentState = null
    }

    changeState (newState) {
        if (this.currentState) {
            this.currentState.exit()
        }
        this.currentState = newState
        this.currentState.enter()
    }

    update() {
        if (this.currentState) {
            this.currentState.update()
        }
    }
}

// basic gamestate
class GameState {
    constructor (state) {
        this.state = state     
    }

    enter() {}
    update() {}
    exit() {}
}

// definition on gamestates and their specific function
// specific gamestates alsway open ond close their overlay on enter and exit
// buttons get declared on enter and deleted on exit to prevent bugs and cheating



class StartState extends GameState {
    enter() {
        startScreenDOM.open()
        implementStartingInteractionElements()

        let startButtonDOM = document.getElementById("start-button")
        startButtonDOM.onclick = function() {game.changeState(new CountdownState)}
    }

    update() {
        //logic when updated
    }

    exit() {
        startScreenDOM.close()
    }
}

class SettingsState extends GameState {
    enter() {
        
    }

    update() {
        //logic when updated
    }

    exit() {
        
    }
}

//Countdown State
//Helper Functions



class CountdownState extends GameState {
    enter() {
        countdownScreenDOM.open()
        countdownDOM.innerText = `3`
        countdownTimer.startCountdown(3, () => countdownDOM.innerText = countdownTimer.remainingTime, () => game.changeState(new PlayState()))
    }

    update() {
        //logic when updated
    }

    exit() {
        countdownScreenDOM.close()
    }
}

//Play State
//Helper Functions

let handicapTimerSave = 0
let remainingTime = 0
let handicapWasIntroduced = true

class PlayState extends GameState {
    enter() {
        generateInteractionCommand()
        endScoreDOM.innerText = score
        handicapbarDOM.style.width = (100 / (handicapInterval - 1)) * (remainingTime) + '%'
        playScreenDOM.open()
        handicapTimer.start()

        let handicapIntervalFunction = setInterval(() => {
            let timeInSeconds = Math.round(handicapTimer.getTime() / 1000);
            if (handicapWasIntroduced = true) {                 
                remainingTime = handicapInterval    
            }             
            
            if (remainingTime - timeInSeconds <= 0 ) { 
                clearInterval(handicapIntervalFunction)
                handicapWasIntroduced = true             
                game.changeState(new HandicapState())
            } else {
                handicapWasIntroduced = false
                console.log("test")
                let progress = (100 / (handicapInterval - 1)) * (Math.round(handicapTimer.getTime() / 1000))
                handicapbarDOM.style.width = progress + '%'
            }    
        }, 500) 

        commandTimer.startCountdown(commandCountdown, () => {}, () => game.changeState(new GameOverState))
    }

    update() {    

    }

    exit() {     
        playScreenDOM.close()

        commandTimer.stop()
        commandTimer.reset()

        handicapTimer.stop()  
    }
}
 
class HandicapState extends GameState {
    enter() {
        implementRandomHandicap()

        // open screen
        handicapScreenDOM.open()

        // stop and reset Timers
        handicapTimer.stop()
        handicapTimer.reset()
             
        commandTimer.stop()
        commandTimer.reset()

        let continueFromHandicapButtonDOM = document.getElementById("handicap-continue-button")
        continueFromHandicapButtonDOM.onclick = function() {game.changeState(new CountdownState)}
    }

    update() {
        //logic when updated
    }

    exit() {
        handicapScreenDOM.close()
    }
}

class UpgradeState extends GameState {
    enter() {
        console.log({allUpgrades})
        
        upgradeScreenDOM.open()
        console.log("Upgrade Screen")

        handicapTimer.stop()
        
        
        commandTimer.stop()
        commandTimer.reset()

        showRandomUpgrades()
        console.log({upgradesToShow})
        console.log({allUpgrades})
    }

    update() {
        //logic when updated
    }

    exit() {
        
        console.log({upgradesToShow})
        
        upgradeScreenDOM.close()
        removeUpgradesFromScreen()
        console.log({implementedUpgrades})
        
    }
}

class GameOverState extends GameState {
    enter() {
        gameOverScreenDOM.open()

        let restartButtonDOM = document.getElementById("restart-button")
        restartButtonDOM.onclick = function() {game.changeState(new CountdownState)}

        handicapTimer.stop()
        handicapTimer.reset()
    
        commandTimer.stop()
        commandTimer.reset()
    
        console.log("ende")
    }

    update() {
        //logic when updated
    }

    exit() {
        removeAllHandicaps()
        undoImplementationOfUpgrade()
        gameOverScreenDOM.close()
        

        score = 0
        scoreDOM.innerText = score

        upgradebarDOM.style.width = '0%'
    }
}

let game = new Game()
game.changeState(new StartState)



