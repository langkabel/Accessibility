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



class PlayState extends GameState {
    enter() {
        generateInteractionCommand()
        playScreenDOM.open()
        handicapTimer.startCountdown(handicapInterval, () => {}, () => game.changeState(new HandicapState))
        commandTimer.startCountdown(commandCountdown, () => {}, () => game.changeState(new GameOverState)) 
    }

    update() {    

    }

    exit() {
        playScreenDOM.close()

        commandTimer.stop()
        commandTimer.reset()

        handicapTimer.stop()
        handicapTimer.reset()
    }
}
 
class HandicapState extends GameState {
    enter() {
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
        upgradeScreenDOM.open()
        console.log("Upgrade Screen")

        handicapTimer.stop()
        handicapTimer.reset()
        
        commandTimer.stop()
        commandTimer.reset()
        
    }

    update() {
        //logic when updated
    }

    exit() {
        upgradeScreenDOM.close()
    }
}

class GameOverState extends GameState {
    enter() {
        gameOverScreenDOM.open()

        let restartButtonDOM = document.getElementById("restart-button")
        restartButtonDOM.onclick = function() {game.changeState(new CountdownState)}

        score = 0
        scoreDOM.innerText = score
    
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
        gameOverScreenDOM.close()
    }
}





