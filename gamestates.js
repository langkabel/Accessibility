// gamesstates: start, end, pause, resume, 
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

class GameState {
    constructor (state) {
        this.state = state     
    }

    enter() {}
    update() {}
    exit() {}
}

class StartState extends GameState {
    enter() {
        startScreen.open()
    }

    update() {
        //logic when updated
    }

    exit() {
        startScreen.close()
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

class CountdownState extends GameState {
    enter() {
        countdownScreen.open()    
    }

    update() {
        //logic when updated
    }

    exit() {
        countdownScreen.close()
    }
}

class PlayState extends GameState {
    enter() {
        playScreen.open()
    }

    update() {
        //logic when updated
    }

    exit() {
        playScreen.close()
    }
}

class HandicapState extends GameState {
    enter() {
        handicapScreen.open()
        console.log("Handicap Screen")
    }

    update() {
        //logic when updated
    }

    exit() {
        handicapScreen.close()
    }
}

class UpgradeState extends GameState {
    enter() {
        upgradeScreen.open()
        console.log("Upgrade Screen")
    }

    update() {
        //logic when updated
    }

    exit() {
        upgradeScreen.close()
    }
}

class GameOverState extends GameState {
    enter() {
        
    }

    update() {
        //logic when updated
    }

    exit() {
        
    }
}





