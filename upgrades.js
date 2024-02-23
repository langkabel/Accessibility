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

        this.firstIndex = upgradesToShow.findIndex((element) => element.name === this.name)

        upgradesToShow.splice(this.firstIndex, 1)
        upgradesToShow.forEach((element) => {
            allUpgrades.push(element)
        })

        implementedUpgrades.push(this)
   
        game.changeState(new CountdownState)    
    }

    undoImplementation() {
        this.style.parentNode.removeChild(this.style)
        allUpgrades.push(this)
    }
}

const biggerButtons = new Upgrade(
    "Buttons: Minimal Size",
    "Buttons should have a size that makes them easy to click or tap, especially for users with mobility impairments or those using touchscreens. A general rule of thumb is to make buttons at least 44x44 pixels in size.",
    `
    button {
        height: 44px;
        min-width: 44px;
    }
    `
)

const visibleHover = new Upgrade(
    "Buttons: Visible Hover",
    " If the button's appearance changes on hover (e.g., color, border, background), ensure that there is enough contrast between the original state and the hover state. This is important for users with low vision or color blindness who may have difficulty distinguishing between colors with low contrast.",
    `
    button:hover {
        color: var(--primary-color);
        border-color: var(--primary-color);
        background-color: var(--secondary-color);
        border-radius: 5px;
        padding: 2px;
    }
    `
)

const darkMode = new Upgrade(
    "Dark Mode",
    ">:D",
    `
    :root {
        --primary-color: black;
        --secondary-color: white;
    }
    `
)

const headingStructure = new Upgrade(
    "Text: Heading Structure",
    "Use visual styling (e.g., font size, weight, color) to differentiate headings from body text and provide visual hierarchy.",
    `
    h0 {
        color: var(--secondary-color);
        font-size: 48px;
    }
    
    h1 {
        color: var(--secondary-color);
        font-size: 36px;
    }
    
    h2 {
        color: var(--secondary-color);
        font-size: 28px;
    }
    
    h3 {
        color: var(--secondary-color);
        font-size: 20px;
    }
    
    p {
        color: var(--secondary-color);
        font-size: 16px;
    }
    `
)

let allUpgrades = [biggerButtons, visibleHover, darkMode, headingStructure]

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

function undoImplementationOfUpgrade () {
    implementedUpgrades.forEach((element) => {
        element.undoImplementation()       
    }) 
    implementedUpgrades = []
}

