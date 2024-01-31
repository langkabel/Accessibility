
//Set Variables in Settings
let handicapInterval = 5
let commandCountdown = 4
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
let upgradeOverlayDom = document.getElementById("upgrade-overlay")

let highscoreDom = document.getElementById("highscore")
let scoreDom = document.getElementById("score")


// Overlay Function
function triggerOverlay(element) {
    element.classList.toggle("not-displayed")
}

// Start or resume game => triggered from DOM
function startGame(element) {
    triggerOverlay(element)
    startGameCountdown()
}

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

function startHandicapInterval() {    
    handicapIntervalTimer.start()
    setInterval(() => {
        let timeInSeconds = Math.round(handicapIntervalTimer.getTime() / 1000);
        let remainingTime = handicapInterval - timeInSeconds
        if (remainingTime <= 0 ) {
            triggerOverlay(handicapOverlayDom)
            implementRandomHandicap()
            stopAndResetTimer(handicapIntervalTimer)
            stopAndResetTimer(commandCountdownTimer)
        } else {
            document.getElementById("handicapTimer").innerText = remainingTime
        }    
    }, 100)   
}

function startCommandCountdownTimer() {    
    commandCountdownTimer.start()
    setInterval(() => {
        let timeInSeconds = Math.round(commandCountdownTimer.getTime() / 1000);
        let remainingTime = commandCountdown - timeInSeconds
        if (remainingTime <= 0 ) {
            endGame()
            stopAndResetTimer(commandCountdownTimer)
        } else {
            document.getElementById("commandTimer").innerText = remainingTime
        }    
    }, 100)   
}

function chooseRandomCommand() {
    return commands[Math.floor(Math.random() * commands.length)];
}

function updateScoreBoard() {
    score++;
    scoreDom.textContent = score;
    if (score > highscore) {
        highscore = score
        highscoreDom.textContent = highscore
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
    stopAndResetTimer(handicapIntervalTimer)
    // removeAllHandicaps()
    triggerOverlay(gameOverOverlayDom) 
}

function playGame() {
    
    commandCountdownTimer.reset()
    const command = chooseRandomCommand();
    document.getElementById('command').innerText = command

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





