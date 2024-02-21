// timer class definition

class Timer {
    constructor () {
        this.isRunning = false
        this.startTime = 0
        this.overallTime = 0
        this.remainingTime = 0       
    }
  
    _getTimeElapsedSinceLastStart () {
        if (!this.startTime) {
            return 0;
        }
        return Date.now() - this.startTime;
    }
  
    start () {
        if (this.isRunning) {
            return console.error('Timer is already running');
        }   
        this.isRunning = true;    
        this.startTime = Date.now();
    }
  
    stop () {
        if (!this.isRunning) {
            return console.error('Timer is already stopped');
        }
        this.isRunning = false; 
        this.overallTime = this.overallTime + this._getTimeElapsedSinceLastStart();
        clearInterval(this.intervalFunction)
    }
  
    reset () {
        this.overallTime = 0;
    
        if (this.isRunning) {
            this.startTime = Date.now();
            return;
        }
        this.startTime = 0;
    }
  
    getTime () {
        if (!this.startTime) {
        return 0;
        }
        if (this.isRunning) {
            return this.overallTime + this._getTimeElapsedSinceLastStart();
        }
        return this.overallTime;
    }
    
    startCountdown(timeInSeconds,onUpdate, onFinish) {
        this.remainingTime = timeInSeconds
        this.start()
        this.intervalFunction = setInterval(() => {            
            this.remainingTime = timeInSeconds - Math.round(this._getTimeElapsedSinceLastStart() / 1000)        
            if (this.remainingTime <= 0) {
                this.stop()
                this.reset() 
                if (typeof onFinish === "function") {
                    onFinish()      
                } else {
                    console.log({onFinish} + "is not a function.")
                }
                clearInterval(this.intervalFunction)
            } else {
                console.log(this.remainingTime)
                if (typeof onUpdate === "function") {
                    onUpdate()
                           
                } else {
                    console.log({onUpdate} + "is not a function.")
                }
            }
            
        }, 1000)
    }
}


// timer init
let countdownTimer = new Timer()
let handicapTimer = new Timer()
let commandTimer = new Timer()