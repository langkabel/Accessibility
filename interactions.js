



class InteractionElement {
  constructor () {
    this.interactionContainerDOM = document.createElement("div")
  }

  _appendInteractionContainer (interactionElement) {
    this.interactionContainerDOM.class = "interaction-container"
    this.interactionContainerDOM.appendChild(interactionElement)
    document.getElementById("button-container").appendChild(this.interactionContainerDOM)
    
  }

  _generateRandomNumber(number) {
    return Math.round(Math.random * number)
  }

  implement() {}
  checkCommand() {}
  generateCommand() {}
  undoImplementation() {}
}

class Slider extends InteractionElement{
  constructor () {
    super()
    this.sliderContainerDOM = document.createElement('div') 
    this.inputSliderDOM = document.createElement('input')
    this.outputSliderDOM = document.createElement('div')
    this.outputSliderTextDOM = document.createElement('span')

    this.sliderContainerDOM.id = "slider-container"
           
    this.inputSliderDOM.id = "input-slider"
    this.inputSliderDOM.type = "range"
    this.inputSliderDOM.min = "1"
    this.inputSliderDOM.max = "10"
    this.inputSliderDOM.value = "5"


    this.outputSliderDOM.id = "output-slider"
    this.outputSliderDOM.innerHTML = this.inputSliderDOM.value

    // function addInput() {
    //   console.log("test")
    //   this.outputSliderTextDOM.innerText = this.inputSliderDOM.value
    // }
    
    // this.inputSliderDOM.oninput = addInput() 

    this.outputSliderDOM.appendChild(this.outputSliderTextDOM)
    this.sliderContainerDOM.appendChild(this.inputSliderDOM)
    this.sliderContainerDOM.appendChild(this.outputSliderDOM)  
  }

  implement() {
    this._appendInteractionContainer(this.sliderContainerDOM)
  }

  undoImplementation() {
    this.interactionContainerDOM.remove()
  }
}

class Button extends InteractionElement{
  constructor(id) {
    super()
    this.identification = id
    this.numberOfPresses = 0 
    
    this.name = "Button"

    this.buttonDOM = document.createElement("button")
    this.buttonDOM.class = "button"
    this.buttonDOM.innerHTML = `<h3>${this.identification}</h3>`

    this.buttonDOM.onclick = () => {
      this.numberOfPresses = this.numberOfPresses + 1
      commandTimer.reset()
      // console.log(this.numberOfPresses)
      this.checkCommand()
      generateInteractionCommand()
    } 
  }

  implement() {
    console.log(this.identification)
    this._appendInteractionContainer(this.buttonDOM)
  }

  generateCommand () {
    // this.targetForCommand = 2
    commandInteractionID = this.identification 
    commandToDisplay = `Press ${this.name} ${this.identification}.`
    console.log(`Command: ${this.identification}`)
    
  }

  checkCommand () {
    
    if (this.identification === commandInteractionID) {
      updateScore(() => {game.changeState(new UpgradeState())})
      console.log("command accepted")

      // if (this.numberOfPresses === this.targetForCommand) {
      //   console.log("score added")
        
      //   generateInteractionCommand()
      // } else {
      //   console.log("press more!")
      // }
    } else {
      game.changeState(new GameOverState())
    }  
  }  

  undoImplementation() {
    // this.targetForCommand = 0
    // this.numberOfPresses = 0
    this.interactionContainerDOM.remove()
  }
}

let button1 = new Button(1)
let button2 = new Button(2)
let button3 = new Button(3)
let slider1 = new Slider(4)

allInteractionElements = [button1, button2, button3]

function implementRandomInteractionElement() {
  let indexOfElementToImplement = Math.floor(Math.random() * allInteractionElements.length)
  implementedInteractionElements.push(allInteractionElements[indexOfElementToImplement])
  allInteractionElements.splice(indexOfElementToImplement, 1)
  return getLastObjectOfArray(implementedInteractionElements).implement()
}

function implementStartingInteractionElements() {
  for(let i = numberOfInteractionElementsAtBeginning; i > 0 ; i--) {
    implementRandomInteractionElement()
  }
}

function removeAllInteractionElements() {
  implementedInteractionElements.forEach((interactionElement) => {
    interactionElement.undoImplementation()
    allInteractionElements.push(interactionElement)
  })
}

function generateInteractionCommand() {
  // let indexOfCommandToGenerate = Math.floor(Math.random() * implementedInteractionElements.length)
  let indexOfCommandToGenerate = Math.floor(Math.random() * implementedInteractionElements.length)
  implementedInteractionElements[indexOfCommandToGenerate].generateCommand()
  commandDOM.innerText = commandToDisplay
  
  if (alzheimerBool === true) {
      console.log(alzheimerBool)
      
      var opacity = 1;
      var intervalTime = 10 // Interval time in milliseconds
      var decreaseStep = intervalTime / 300; // Step to decrease opacity
  
      var fadeInterval = setInterval(function () {
          opacity -= decreaseStep;
          if (opacity <= 0) {
              clearInterval(fadeInterval);
              commandDOM.style.opacity = 0;
          } else {
              commandDOM.style.opacity = opacity;
          }
      }, intervalTime);
  }
}

