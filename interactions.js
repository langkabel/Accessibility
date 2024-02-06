let allCommands = []



class interactionElement {
  constructor () {
    this.interactionContainerDom = document.createElement("div")
  }

  _appendInteractionContainer (interactionElement) {
    this.interactionContainerDom.class = "interaction-container"
    this.interactionContainerDom.appendChild(interactionElement)
    document.getElementById("button-container").appendChild(this.interactionContainerDom)
  }

  _generateRandomNumber(number) {
    this.randomNumber = Math.round(Math.random * number)
  }

  implement() {}
  generateCommand() {}
  undoImplementation() {}

}

class slider extends interactionElement{
  constructor () {
    super()
    this.sliderContainerDom = document.createElement('div') 
    this.inputSliderDom = document.createElement('input')
    this.outputSliderDom = document.createElement('div')
  }

  implement() {
    this.sliderContainerDom.id = "slider-container"
           
    this.inputSliderDom.id = "input-slider"
    this.inputSliderDom.type = "range"
    this.inputSliderDom.min = "1"
    this.inputSliderDom.max = "10"
    this.inputSliderDom.value = "5"

    this.outputSliderDom.id = "output-slider"
    this.outputSliderDom.innerHTML = inputSliderDom.value

    this.sliderContainerDom.appendChild(inputSliderDom)
    this.sliderContainerDom.appendChild(outputSliderDom)

    this._appendInteractionContainer(this.sliderContainerDom)
  }

  generateCommand () {
    
  }

  undoImplementation() {
    
  }
}



