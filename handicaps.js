//function to trigger wich implement handicaps

// function integrateMilacularDegeneration() {
//     document.addEventListener('mousemove', function(event) {
//         this.handicapDOM.style.left = event.pageX - this.handicapDOM.clientWidth / 2 + 'px'
//         this.handicapDOM.style.top = event.pageY - this.handicapDOM.clientHeight / 2 + 'px'
//     })
// }

//id, name, description, functionality

class Handicap {
    constructor(object) {
        this.handicapDOM = document.createElement("div")
        this.name = object.name
        this.description = object.description
        this.implementationRequirement = object.functionality    
    }
    
    _appendHandicapContainer () {
        document.getElementById("handicap-container").appendChild(this.handicapDOM)
    }

    implement() {  
        this._appendHandicapContainer()
        this.implementationRequirement(this.handicapDOM)
        implementedHandicaps.push(this)
        console.log(this.description)
        handicapNameDOM.innerText = `${this.name}`
        handicapDescriptionDOM.innerText = this.description
        console.log(this.name + " implemented")    
    }

    undoImplementation() {
        this.handicapDOM.remove()
        console.log(this.name + "removed") 
    }
}

// macular Degeneration
const macularDegenerationObject = {
    name:"Macular Degeneration",
    description:"Macular degeneration, also known as age-related macular degeneration (AMD or ARMD), is a condition that can result in blurred or absent central vision. In the early stages, symptoms may not be noticeable, but over time, individuals may experience a gradual decline in vision in one or both eyes. While it doesn't lead to total blindness, the loss of central vision can make daily activities like recognizing faces, driving, and reading challenging",
    functionality:
        (containerObject) => {
            document.addEventListener('mousemove', (event) => {
            containerObject.style.left = event.pageX - containerObject.clientWidth / 2 + 'px'
            containerObject.style.top = event.pageY - containerObject.clientHeight / 2 + 'px'
        })
    }
}

let macularDegeneration = new Handicap(macularDegenerationObject)

const blurryVisionObject = {
    name:"Blurry Vision",
    description:"Blurred vision is a prevalent ocular symptom characterized by a sudden or gradual loss of clarity or sharpness of vision, accompanied by difficulty in perceiving fine details. It may manifest in one eye (unilateral) or both eyes (bilateral).",
    functionality: () => {}   
}

let blurryVision = new Handicap(blurryVisionObject)

arrayOfAllHandicaps = [macularDegeneration, blurryVision]


// let arrayOfAllHandicaps = [
//     // Macular Degeneration
//     {
//         implement: 
//             () => {
//                 let macularDegenerationDom = document.createElement('div')
//                 macularDegenerationDom.id = 'macular-degeneration'
//                 document.body.appendChild(macularDegenerationDom)
//                 document.addEventListener('mousemove', function(event) {
//                     macularDegenerationDom.style.left = event.pageX - macularDegenerationDom.clientWidth / 2 + 'px'
//                     macularDegenerationDom.style.top = event.pageY - macularDegenerationDom.clientHeight / 2 + 'px'
//                 })
//             },
//         remove: 
//             () => {macularDegenerationDom.remove()},
//         name: 
//             "Macular Degeneration",
//         description: 
//             "Macular degeneration, also known as age-related macular degeneration (AMD or ARMD), is a condition that can result in blurred or absent central vision. In the early stages, symptoms may not be noticeable, but over time, individuals may experience a gradual decline in vision in one or both eyes. While it doesn't lead to total blindness, the loss of central vision can make daily activities like recognizing faces, driving, and reading challenging",     
//     },
//     // Blurry Vision
//     {
//         implement: 
//             () => {
//                 let blurryVisionDom = document.createElement('div')
//                 blurryVisionDom.id = 'blurry-vision'
//                 document.body.appendChild(blurryVisionDom)
//             },
//         remove: 
//             () => {blurryVisionDom.remove()},
//         name: 
//             "Blurry Vision",
//         description: 
//             "Blurred vision is a prevalent ocular symptom characterized by a sudden or gradual loss of clarity or sharpness of vision, accompanied by difficulty in perceiving fine details. It may manifest in one eye (unilateral) or both eyes (bilateral)."
//     }
// ]



function implementRandomHandicap() {
    if (arrayOfAllHandicaps.length > 0) {
        let randomIndexOfHandicapObject = Math.floor(Math.random() * arrayOfAllHandicaps.length) 
        implementedHandicaps.push(arrayOfAllHandicaps[randomIndexOfHandicapObject])    
        arrayOfAllHandicaps.splice(randomIndexOfHandicapObject, 1) 
        return getLastObjectOfArray(implementedHandicaps).implement()
    } else {
        // Function to trigger when all Handicaps have been used
        console.log("u won")
    }    
}


function removeAllHandicaps() {
    implementedHandicaps.forEach((handicap) => {
        handicap.undoImplementation()
        arrayOfAllHandicaps.push(handicap)
    })
}
implementRandomHandicap()
implementRandomHandicap()