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
        
        this.upgradeButtonDOM.onclick = () => {
            this.removeFromScreen()
            this.implement()   
        }
   
        this.head = document.head || document.getElementsByTagName('head')[0]
        this.style = document.createElement("style")   
    }

    addToScreen() {
        this.upgradeButtonDOM.appendChild(this.headlineNameDOM)
        this.upgradeButtonDOM.appendChild(this.paragraphDescriptionDOM)
        
        this.upgradeContainerDOM.appendChild(this.upgradeButtonDOM)       
    }

    removeFromScreen() {
        this.upgradeButtonDOM.remove()
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
        padding: 20px;
    }
    `
)

const visibleHover = new Upgrade(
    "Buttons: Visible Hover",
    " If the button's appearance changes on hover (e.g., color, border, background), ensure that there is enough contrast between the original state and the hover state. This is important for users with low vision or color blindness who may have difficulty distinguishing between colors with low contrast.",
    `
    button:hover::before {
        left: -10px;
        top: -10px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 20px;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        -ms-border-radius: 20px;
        -o-border-radius: 20px;
      }
    `
)

const visibleClick = new Upgrade(
    "Buttons: Visible Click",
    "A click response refers to the reaction or action that occurs when a user interacts with an element, typically by clicking on it with a mouse or tapping on it with a touchscreen device. In user interface design, a click response is crucial for providing feedback to the user, confirming that their input has been recognized and processed.",
    `
    button:active::before {
        left: -15px;
        top: -15px;
        width: calc(100% + 20px);
        height: calc(100% + 20px);
        border-radius: 20px;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        -ms-border-radius: 20px;
        -o-border-radius: 20px;
      }
    `
)

const darkMode = new Upgrade(
    "Dark Mode",
    "Dark mode, increasingly popular in software and websites, offers essential accessibility benefits. It reduces eye strain, particularly for those with light sensitivity or visual impairments, and enhances readability through high-contrast text on a dark background.",
    `
    :root {
        --primary-color: #2B1E33;
        --secondary-color: #F4F3EC;
    }
    `
)

const headingStructure = new Upgrade(
    "Text: Heading Structure",
    "Use visual styling (e.g., font size, weight, color) to differentiate headings from body text and provide visual hierarchy.",
    `
    h0 {
        font-size: 4rem;
        font-family: "Noto Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 900;
        font-style: normal;
        font-variation-settings:
          "wdth" 100;
    }
    
    h1 {
        color: var(--secondary-color);
        font-size: 3rem;
        font-family: "Noto Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
        font-variation-settings:
          "wdth" 100;
    }
    
    h2 {
        color: var(--secondary-color);
        font-size: 2.5rem;
        font-family: "Noto Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;;
        font-variation-settings:
          "wdth" 100;
    }
    
    h3 {
        color: var(--secondary-color);
        font-size: 1.5rem;
        font-family: "Noto Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
        font-variation-settings:
          "wdth" 100;
    }
    
    p {
        color: var(--secondary-color);
        font-size: 1rem;
        font-family: "Noto Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        line-height: 150%; 
        font-variation-settings:
          "wdth" 100;
    }
    `
)

const letterSpacing = new Upgrade(
    "Text: Letter Spacing",
    "Adjusting the letter spacing in text can improve readability and accessibility for individuals with visual impairments or cognitive challenges.",
    `
    h0 { 
       letter-spacing: 0.24rem;

    }
    
    h1 {
        letter-spacing: 0.15rem;
    }
    
    h2 {
        letter-spacing: 0.24rem;
    }
    
    h3 {
        letter-spacing: 0.09rem;
    }
    
    p { 
        letter-spacing: 0.03rem;
    }
    `
)

let allUpgrades = [biggerButtons, visibleHover, darkMode, headingStructure, letterSpacing, visibleClick]

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

