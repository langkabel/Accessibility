let game = new Game()
game.changeState(new StartState)


let countdownText = new DynamicText("countdown")

let testButton = new Button("start-button", game.changeState(new CountdownState))
testButton.activate()
let countdown = new Timer()

countdown.startCountdown(3, function() {
    console.log(test)
})