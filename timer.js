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
        setInterval(() => {            
            this.remainingTime = timeInSeconds - Math.round(this._getTimeElapsedSinceLastStart() / 1000)        
            if (this.remainingTime <= 0) {
                this.stop()
                this.reset()
                if (typeof onFinish === "function") {
                    onFinish       
                }
            } else {
                console.log(this.remainingTime)
                if (typeof onUpdate === "function") {
                    onUpdate       
                }
            }
        }, 500)
    }
}
  
function startCountdownAndExecute(timer, excecute) {
    timer.start()
    setInterval(() => {
        let timeInSeconds = Math.round(timer.getTime() / 1000);
        let remainingTime = 3 - timeInSeconds
        if (remainingTime <= 0 ) {
            excecute
            
            startHandicapInterval()
            startCommandCountdownTimer()
        } else {
            countdownDom.innerText = remainingTime
        }    
    }, 100)
}