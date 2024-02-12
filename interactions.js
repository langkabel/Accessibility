



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
    this.randomNumber = Math.round(Math.random * number)
  }

  implement() {}
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

  generateCommand () {

  }

  undoImplementation() {
    this.interactionContainerDOM.remove()
  }
}

class Button extends InteractionElement{
  constructor() {
    super()
    this.name = "Button"
    this.buttonDOM = document.createElement("button")
    this.buttonDOM.class = "interaction-button"
    this.buttonDOM.innerHTML = "Button" 
  }

  implement() {
    console.log("test")
    this._appendInteractionContainer(this.buttonDOM)
  }

  generateCommand() {
    this.randomNumber = this._generateRandomNumber(5)
  }  

  undoImplementation() {
    this.interactionContainerDOM.remove()
  }
}

let button1 = new Button()
let button2 = new Button()
let button3 = new Button()
let slider1 = new Slider()

let allInteractionElements = [button1, button2, button3]
let allCommands = []
let implementedInteractionElements = []

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


