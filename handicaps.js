//Handicap Class for Intergration
class Handicap {
    constructor(object) {
        this.remove = object.remove
        this.name = object.name
        this.description = object.description
        this.implementationRequirement = object.functionality    
    }

    implement() {  
        this.implementationRequirement()
        implementedHandicaps.push(this)
        
        handicapNameDOM.innerText = this.name
        handicapDescriptionDOM.innerText = this.description
        console.log(this.name + " implemented")    
    }

    undoImplementation() {
        this.remove()
        console.log(this.name + " removed") 
    }
}

//Macular Degeneration
let macularDegenerationDom = document.createElement('div')

const macularDegenerationObject = {
    name:"Macular Degeneration",
    description:"Macular degeneration, also known as age-related macular degeneration (AMD or ARMD), is a condition that can result in blurred or absent central vision. In the early stages, symptoms may not be noticeable, but over time, individuals may experience a gradual decline in vision in one or both eyes. While it doesn't lead to total blindness, the loss of central vision can make daily activities like recognizing faces, driving, and reading challenging",
    functionality:
        () => {
            macularDegenerationDom.id = 'macular-degeneration'
            document.body.appendChild(macularDegenerationDom)
            document.addEventListener('mousemove', function(event) {
            macularDegenerationDom.style.left = event.pageX - macularDegenerationDom.clientWidth / 2 + 'px'
            macularDegenerationDom.style.top = event.pageY - macularDegenerationDom.clientHeight / 2 + 'px'
            })
        },
    remove: 
        () => {macularDegenerationDom.remove()}
}

let macularDegeneration = new Handicap(macularDegenerationObject)

//Blurry Vision 
let blurryVisionDom = document.createElement('div')

const blurryVisionObject = {
    name:"Blurry Vision",
    description:"Blurred vision is a prevalent ocular symptom characterized by a sudden or gradual loss of clarity or sharpness of vision, accompanied by difficulty in perceiving fine details. It may manifest in one eye (unilateral) or both eyes (bilateral).",
    functionality: () => {
        blurryVisionDom.id = 'blurry-vision'
        document.body.appendChild(blurryVisionDom)
    },
    remove: 
        () => {blurryVisionDom.remove()}   
}

let blurryVision = new Handicap(blurryVisionObject)

//All Handicaps in Gamepool
arrayOfAllHandicaps = [macularDegeneration, blurryVision]

//Game Functions
function implementRandomHandicap() {
    if (arrayOfAllHandicaps.length > 0) {
        let randomIndexOfHandicapObject = Math.floor(Math.random() * arrayOfAllHandicaps.length) 
        implementedHandicaps.push(arrayOfAllHandicaps[randomIndexOfHandicapObject])    
        arrayOfAllHandicaps.splice(randomIndexOfHandicapObject, 1) 
        return getLastObjectOfArray(implementedHandicaps).implement()
    } else {
        handicapNameDOM.innerText = "All Handicaps used"
        handicapDescriptionDOM.innerText = ""
        console.log("u won")
    }    
}

function removeAllHandicaps() {
    implementedHandicaps.forEach((handicap) => {
        handicap.undoImplementation()
        arrayOfAllHandicaps.push(handicap)
    })
}
