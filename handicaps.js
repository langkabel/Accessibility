//function to trigger wich implement handicaps

//circle on Cursor
let implementedHandicaps = []

function implementRandomHandicap() {
    implementedHandicaps.push(arrayOfAllHandicaps[Math.floor(Math.random() * arrayOfAllHandicaps.length)])
    return implementedHandicaps[implementedHandicaps.length - 1].implement()
}

// function removeAllHandicaps() {
//     implementedHandicaps.forEach((handicap) => {
//         handicap.remove()
//     })
// }


let cursorCircle = document.createElement('div')

arrayOfAllHandicaps = [
    {
        implement: 
            function implementMacularDegeneration() {
                cursorCircle.id = 'cursor-circle'
                document.body.appendChild(cursorCircle)
                document.addEventListener('mousemove', function(event) {
                    // Update the circle position to follow the mouse cursor
                    cursorCircle.style.left = event.pageX - cursorCircle.clientWidth / 2 + 'px'
                    cursorCircle.style.top = event.pageY - cursorCircle.clientHeight / 2 + 'px'
                })
            },
        remove: cursorCircle.remove(),
        name: 
            "Macular Degeneration",
        description: 
            "Test Test",     
}
]