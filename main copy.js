
//Set Variables in Settings
let handicapInterval = 10
let commandCountdown = 10
let upgradeThreshold = 10

//timer setup
let countdownTimer = new Timer()
let handicapIntervalTimer = new Timer()
let commandCountdownTimer = new Timer()

let arrayOfTimers = [countdownTimer, handicapIntervalTimer, commandCountdownTimer]

//timer helper functions
function stopAndResetTimer(timer) {
    timer.stop()
    timer.reset()
}

function stopAndResetTimers() {
    arrayOfTimers.forEach(stopAndResetTimer(timer))
}

//game definitions
const commands = ["Bop It", "Twist It", "Pull It"];
let score = 0
let highscore = 0

// DOM Elements
let countdownOverlayDom = document.getElementById("countdown-overlay")
let countdownDom = document.getElementById("countdown")

let startButtonDom = document.getElementById("start-button")
let startOverlayDom = document.getElementById("start-overlay")
let gameOverOverlayDom = document.getElementById("game-over-overlay")

let handicapOverlayDom = document.getElementById("handicap-overlay")
let progressbarDom = document.getElementById("progressbar")
let upgradeOverlayDom = document.getElementById("upgrade-overlay")

let highscoreDom = document.getElementById("highscore")
let scoreDom = document.getElementById("score")
let upgradebarDom = document.getElementById("upgradebar")




// Overlay Function
function triggerOverlay(element) {
    if (element.classList.contains("not-displayed")) {
        element.classList.remove("not-displayed")
    } else {
        element.classList.add("not-displayed")
    }
}

// Start or resume game => triggered from DOM
function startGame(element) {
    triggerOverlay(element)    
    startGameCountdown()
}

// Timer Functions

//General Countdown
function startGameCountdown() {    
    triggerOverlay(countdownOverlayDom)
    countdownTimer.start()   
    
    setInterval(() => {
        let timeInSeconds = Math.round(countdownTimer.getTime() / 1000);
        let remainingTime = 3 - timeInSeconds
        if (remainingTime <= 0 ) {
            triggerOverlay(countdownOverlayDom)
            stopAndResetTimer(countdownTimer)
            playGame()
            startHandicapInterval()
            startCommandCountdownTimer()
        } else {
            countdownDom.innerText = remainingTime
        }    
    }, 100)   
}

//Handicap Interval
function startHandicapInterval() {  
    
    handicapIntervalTimer.start()
    
    setInterval(() => {
        let timeInSeconds = Math.round(handicapIntervalTimer.getTime() / 1000);
        let remainingTime = handicapInterval - timeInSeconds

        //Progressbar Update
        

        if (remainingTime <= 0 ) {
            
            triggerOverlay(handicapOverlayDom)
            
            implementRandomHandicap()

            stopAndResetTimer(handicapIntervalTimer)
            stopAndResetTimer(commandCountdownTimer)
            
        } else {
            let progress = (100 / (handicapInterval - 1)) * (timeInSeconds)
            progressbarDom.style.width = progress + '%'
        }    
         
    }, 100)   
}

//Command Countdown
function startCommandCountdownTimer() {    
    commandCountdownTimer.start()
    setInterval(() => {
        let timeInSeconds = Math.round(commandCountdownTimer.getTime() / 1000);
        let remainingTime = commandCountdown - timeInSeconds
        if (remainingTime <= 0 ) {
            endGame()
            stopAndResetTimer(commandCountdownTimer)
        } else {
            // function for blinking
        }    
    }, 100)   
}

function chooseRandomCommand() {
    return commands[Math.floor(Math.random() * commands.length)];
}

function updateScoreBoard() {
    score++;
    scoreDom.textContent = score;

    let progress = (100 / (upgradeThreshold - 1)) * (score % upgradeThreshold)
    upgradebarDom.style.width = progress + '%'

    if (score > highscore) {
        highscore = score
    } 
    if (score % upgradeThreshold === 0) {
        triggerOverlay(upgradeOverlayDom)
        stopAndResetTimer(commandCountdownTimer)

        handicapIntervalTimer.stop()
    }
}

function endGame() {
    score = 0;
    document.getElementById("score").textContent = score;
    upgradebarDom.style.width = '0%'

    stopAndResetTimer(handicapIntervalTimer)
    stopAndResetTimer(commandCountdownTimer)

    triggerOverlay(gameOverOverlayDom) 
    removeAllHandicaps()
}

function playGame() {
    
    commandCountdownTimer.reset()
    const command = chooseRandomCommand();
    document.getElementById('command').innerText = command

    speak(command)
    
    inputSliderDom.oninput = function () {
        outputSliderDom.innerHTML = this.value
        if (command[0] === "slider" && command[1] === inputSliderDom.value ) {
            updateScoreBoard();
            playGame()
        } else if (command[0] != "slider") {
            endGame()
        }
        
    }
    

    document.getElementById("bopIt").onclick = function () {
        if (command === "Bop It") {
        updateScoreBoard();
        
        playGame();
        } else {
        endGame();
        }
    };

    document.getElementById("twistIt").onclick = function () {
        if (command === "Twist It") {
        updateScoreBoard();
        
        playGame();
        } else {
        endGame();
        }
    };

    document.getElementById("pullIt").onclick = function () {
        if (command === "Pull It") {
        updateScoreBoard();
        playGame();
        } else {
        endGame();
        }
    };
}






