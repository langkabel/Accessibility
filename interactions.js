



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
    this.buttonDOM.class = "interaction-button"
    this.buttonDOM.innerHTML = "Button"

    this.buttonDOM.onclick = () => {
      this.numberOfPresses ++
      console.log(this.numberOfPresses)
      this.checkCommand()
    } 
  }

  implement() {
    console.log(this.identification)
    this._appendInteractionContainer(this.buttonDOM)
  }

  generateCommand () {
    commandInteractionID = this.identification
    commandNumber = this.number

    this.number = 2

    commandToDisplay = `Press ${this.name} ${this.identification} ${this.number} times!`
    
    console.log(`${this.id}`)
  }

  checkCommand () {
    if (this.identification = commandInteractionID) {
      if (this.numberOfPresses = command.number) {
        console.log("score added")
        updateScore(new UpgradeState())
        generateInteractionCommand()
      } else {
        console.log("press more!")
      }
    } else {
      game.changeState(new GameOverState())
    }  
  }  

  undoImplementation() {
    this.interactionContainerDOM.remove()
  }
}

let button1 = new Button(1)
let button2 = new Button(2)
let button3 = new Button(3)
let slider1 = new Slider(4)

let allInteractionElements = [button1, button2, button3]

function generateInteractionCommand() {
  let indexOfCommandToGenerate = Math.floor(Math.random() * implementedInteractionElements.length)
  implementedInteractionElements[indexOfCommandToGenerate].generateCommand()
  commandDOM.innerText = commandToDisplay
}

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


