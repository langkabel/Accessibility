class Upgrade {
    constructor(name, description, css) {
        this.name = name
        this.description = description
        this.css = css

        this.upgradeContainerDOM = document.getElementById("upgrade-container")

        this.upgradeDOM = document.createElement("div")
        this.upgradeDOM.classList.add("upgrade") 

        this.headlineNameDOM = document.createElement("h3")
        this.headlineNameDOM.classList.add("upgrade-name") 
        this.headlineNameDOM.innerHTML = this.name

        this.paragraphDescriptionDOM = document.createElement("p")
        this.paragraphDescriptionDOM.classList.add("upgrade-description")
        this.paragraphDescriptionDOM.innerHTML = this.description

        this.upgradeButtonDOM = document.createElement("button")
        this.upgradeButtonDOM.classList.add("upgrade-button")
        this.upgradeButtonDOM.innerHTML = "Choose"

        this.upgradeButtonDOM.onclick = () => {
            this.removeFromScreen()
            this.implement()
            
        }
   
        this.head = document.head || document.getElementsByTagName('head')[0]
        this.style = document.createElement("style")   
    }

    addToScreen() {
        this.upgradeDOM.appendChild(this.headlineNameDOM)
        this.upgradeDOM.appendChild(this.paragraphDescriptionDOM)
        this.upgradeDOM.appendChild(this.upgradeButtonDOM)
        this.upgradeContainerDOM.appendChild(this.upgradeDOM)       
    }

    removeFromScreen() {
        this.upgradeDOM.remove()
        console.log("removed")
    }

    implement() {
        this.head.appendChild(this.style) 
        this.style.type = 'text/css';
        this.style.appendChild(document.createTextNode(this.css))

        implementedUpgrades.push(this)

        this.firstIndex = allUpgrades.findIndex((element) => element.name === this.name)

        allUpgrades.splice(this.firstIndex, 1)
        upgradesToShow.splice(this.firstIndex, 1)

        upgradesToShow.forEach((element) => {
            allUpgrades.push(element)
        })

        game.changeState(new CountdownState)    
    }

    undoImplementation() {
        if (this.head && this.style.parentNode === this.head) {
            this.head.removeChild(this.style)
        }
    }
}

const biggerButtons = new Upgrade(
    "Bigger Buttons",
    "Make Buttons Bigger",
    `
    button {
        width: 100px;
        height: 50px;
    }`
)

const riggerButtons = new Upgrade(
    "rigger Buttons",
    "Make Buttons Bigger",
    `
    button {
        width: 100px;
        height: 50px;
    }`
)

const miggerButtons = new Upgrade(
    "migger Buttons",
    "Make Buttons Bigger",
    `
    button {
        width: 100px;
        height: 50px;
    }`
)

let allUpgrades = [biggerButtons, riggerButtons, miggerButtons]

//functions called in gamestates
function showRandomUpgrades() {
    for(let i = numberOfUpgradesToChooseFrom; i > 0 ; i--) {
        let indexOfElementToImplement = Math.floor(Math.random() * allUpgrades.length)
        if (allUpgrades[indexOfElementToImplement] === undefined) {
            return console.log("upgrade missing")
        } else {
            upgradesToShow.push(allUpgrades[indexOfElementToImplement])
            allUpgrades.splice(indexOfElementToImplement, 1)
            getLastObjectOfArray(upgradesToShow).addToScreen()
        }
    }       
}

function removeUpgradesFromScreen () {
    upgradesToShow.forEach((upgradeObject) => {
        upgradeObject.removeFromScreen()
    })
    upgradesToShow = []
}

