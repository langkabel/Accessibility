//function to trigger wich implement handicaps
let handicapNameDom = document.getElementById("handicap-name")
let handicapDescriptionDom = document.getElementById("handicap-description")

let implementedHandicaps = []

let arrayOfAllHandicaps = [
    // Macular Degeneration
    {
        implement: 
            () => {
                let macularDegenerationDom = document.createElement('div')
                macularDegenerationDom.id = 'macular-degeneration'
                document.body.appendChild(macularDegenerationDom)
                document.addEventListener('mousemove', function(event) {
                    macularDegenerationDom.style.left = event.pageX - macularDegenerationDom.clientWidth / 2 + 'px'
                    macularDegenerationDom.style.top = event.pageY - macularDegenerationDom.clientHeight / 2 + 'px'
                })
            },
        remove: 
            () => {macularDegenerationDom.remove()},
        name: 
            "Macular Degeneration",
        description: 
            "Macular degeneration, also known as age-related macular degeneration (AMD or ARMD), is a condition that can result in blurred or absent central vision. In the early stages, symptoms may not be noticeable, but over time, individuals may experience a gradual decline in vision in one or both eyes. While it doesn't lead to total blindness, the loss of central vision can make daily activities like recognizing faces, driving, and reading challenging",     
    },
    // Blurry Vision
    {
        implement: 
            () => {
                let blurryVisionDom = document.createElement('div')
                blurryVisionDom.id = 'blurry-vision'
                document.body.appendChild(blurryVisionDom)
            },
        remove: 
            () => {blurryVisionDom.remove()},
        name: 
            "Blurry Vision",
        description: 
            "Blurred vision is a prevalent ocular symptom characterized by a sudden or gradual loss of clarity or sharpness of vision, accompanied by difficulty in perceiving fine details. It may manifest in one eye (unilateral) or both eyes (bilateral)."
    }
]

function getLastObjectOfArray(array) {
    return array[array.length - 1]
}

function implementRandomHandicap() {
    if (arrayOfAllHandicaps.length > 0) {
        let randomIndexOfHandicapObject = Math.floor(Math.random() * arrayOfAllHandicaps.length) 
        implementedHandicaps.push(arrayOfAllHandicaps[randomIndexOfHandicapObject])    
        arrayOfAllHandicaps.splice(randomIndexOfHandicapObject, 1) 
        handicapNameDom.innerText = getLastObjectOfArray(implementedHandicaps).name
        handicapDescriptionDom.innerText = getLastObjectOfArray(implementedHandicaps).description
        return getLastObjectOfArray(implementedHandicaps).implement()
    } else {
        // Function to trigger when all Handicaps have been used
        console.log("u won")
    }    
}


function removeAllHandicaps() {
    implementedHandicaps.forEach((handicap) => {
        handicap.remove()
        arrayOfAllHandicaps.push(handicap)
    })
}