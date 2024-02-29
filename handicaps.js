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

//Tunnel Vision
let tunnelVisionDom = document.createElement('div')

const tunnelVisionObject = {
    name:"Tunnel Vision",
    description:"Tunnel vision, also known as peripheral vision loss, refers to a condition where a person experiences a significant reduction in their peripheral vision while maintaining central vision. This can occur due to various factors such as eye diseases (e.g., glaucoma, retinitis pigmentosa), neurological conditions, or physical trauma.",
    functionality:
        () => {
            tunnelVisionDom.id = 'tunnel-vision'
            document.body.appendChild(tunnelVisionDom)
            document.addEventListener('mousemove', function(event) {
            tunnelVisionDom.style.left = event.pageX - tunnelVisionDom.clientWidth / 2 + 'px'
            tunnelVisionDom.style.top = event.pageY - tunnelVisionDom.clientHeight / 2 + 'px'
            })
        },
    remove: 
        () => {tunnelVisionDom.remove()}
}

let tunnelVision = new Handicap(tunnelVisionObject)



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

//Tremor
let overlay = document.createElement("div")
let falseCursor = document.createElement("img")
let tremorStyle = document.createElement("style")

const tremorObject = {
    name:"Tremor",
    description:"Tremors are involuntary, rhythmic movements of one or more parts of the body. They can affect various parts of the body such as the hands, arms, head, vocal cords, trunk, and legs. Tremors can range from being barely noticeable to severe and debilitating. Tremors can significantly affect a person's ability to use the web.",
    functionality: () => {
        overlay.setAttribute("id", "overlay");
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.position = "absolute";
        overlay.style.zIndex = "2";

        // Create img element for false cursor
        falseCursor.setAttribute("id", "falsecursor");

        //Online Cursor
        falseCursor.setAttribute("src", "http://telcontar.net/Misc/screeniecursors/Cursor%20arrow%20white.png");
        falseCursor.style.position = "absolute";
        falseCursor.style.zIndex = "20";

        // Append elements to the body of the document
        document.body.appendChild(overlay);
        document.body.appendChild(falseCursor);

        let normal
                
        let tremorBasePx = 20;

        function sampleInt(magnitude) {
            return normal[Math.round(Math.random() * normal.length)] * magnitude;
        }

        $(document).ready(function () {
            var $cursor = $('#falsecursor');
            var lastCursor = {clientX:0, clientY:0}
            setInterval(function () {
                var randX = sampleInt(tremorBasePx);
                var randY = sampleInt(tremorBasePx);
                $cursor.css({
                    'top': lastCursor.clientY + randY,
                    'left': lastCursor.clientX + randX,
                    'transition': 'top 0.2s, left 0.2s linear'
                });
            }, 200);
            $(document).mousemove(function(e){lastCursor = e;});

            $('#overlay').click(function (e) {
                var x = parseInt($cursor.css('left'), 10);
                var y = parseInt($cursor.css('top'), 10);
                $(this).hide();
                $cursor.hide();
                var element = document.elementFromPoint(x, y);
                $(this).show();
                $cursor.show();
                $(element).click();
            });

            let clicks = 0;
            $('#button').click(function () {
                $(this).val('clicks: ' + (++clicks)).css({
                    'top': sampleInt(100) + 200,
                    'left': sampleInt(100) + 200
                });
            });
        });

        
        document.head.appendChild(tremorStyle)
        tremorStyle.type = 'text/css'
        tremorStyle.appendChild(document.createTextNode((`
        * {
            cursor: none;
        }
        #start-screen {
            cursor:default;
            * {
                cursor:default; 
            }          
        }
        #game-over-screen {
            cursor:default;
            * {
                cursor:default; 
            }
        }
        #handicap-screen {
            cursor:default;
            * {
                cursor:default; 
            }
        }
        #upgrade-screen {
            cursor: default;
            * {
                cursor:default; 
            }
        }
        `)))

        let normalToDevide = [-0.954486511205664, -0.390343505844172, 0.954967163741049, -0.741969088844115, 0.415498313809018, 1.11448864081483, 0.76051606293719, 0.737922868989143, -0.538210735151749, 2.95321369930028, 1.29722248593233, 0.879352418857219, -0.431491137709812, 0.907957414011492, 1.32937856972126, -2.06193940045371, 0.853924002501051, 0.644568387942851, 0.29585966062521, 0.029283909642257, -0.116309884538336, -0.21247946969567, 0.520679721081564, 1.40888714495192, -0.872289147256009, -0.895142161740987, -0.210110524304462, -1.09347050985988, -1.24695998274644, 0.108705615063444, -0.0299178988550738, 1.47641798733614, 0.489325530238317, -1.25614368071793, -0.265909415432471, 0.526102923817908, -0.10480962312103, -1.07215275189888, -0.383193549659934, 0.51002010941531, 0.944163306601511, -0.0321767673468271, -1.35144964116703, 0.263596823001421, 0.540427623567371, -1.04241902308392, -0.670516393824332, 0.158485972372211, 0.164154884035072, -1.93009734490646, 0.852783520922024, -1.34765702216979, -0.531800074686698, 0.280961008814437, 0.630531054720149, 0.343363294659579, -1.2170531471355, 1.58324901607691, -0.539584265875985, 0.311161618787563, -0.317124254762646, -0.260151494067805, -0.673509625719232, 0.136403271282643, 1.01258180403649, 0.575317947712617, 1.14868551793635, 0.327870722017452, 0.94293964636229, -1.22571566590562, 1.37854270548666, -0.0948946472840643, 0.966120915277423, -0.298859582000788, 1.67278530569779, -1.28203090996874, 0.296928115774355, -1.09044170966977, 1.46093203424296, -0.239098151446543, -1.51561000187031, -0.154811273589294, 0.0319192709941601, -0.527036227344993, -0.513927560425381, 0.579844345200166, -0.0747662994634585, 0.64628638844104, -0.321894061028443, -0.798643441029118, -2.02075744646756, -0.319258166115966, 0.0963191114713903, -0.794920474769472, 0.0610320023340435, 0.345931510365856, -1.31282275014755, -0.0968080218000676, 0.37646603364382, 1.82218271404721];
        normal = normalToDevide.map((e) => e / (Math.random() * 2 + 1) )
    },
    remove: 
        () => {
            overlay.remove()
            falseCursor.remove()
            tremorStyle.remove()
        }   
}

let tremor = new Handicap(tremorObject)

//Color Blindness Handicaps
let overlayColorblindness = document.createElement("div")

const fullColorBlindnessObject = {
    name:"Full Color Blindness",
    description:"Achromatopsia is a rare, non-progressive visual disorder characterized by a complete absence of color vision. People with achromatopsia typically see the world in shades of gray, with little to no ability to distinguish colors. This condition is caused by the absence or dysfunction of cone cells in the retina, which are responsible for color perception under normal circumstances.",
    functionality: () => {
        overlayColorblindness.id = 'full-color-blindness'
        document.body.appendChild(overlayColorblindness)
    },
    remove: 
        () => {overlayColorblindness.remove()}   
}

let fullColorBlindness = new Handicap(fullColorBlindnessObject)


//Color Blindness Handicaps
let alzheimerBool = false

const alzheimersObject = {
    name:"Alzheimers",
    description:"Alzheimer's disease is a progressive neurological disorder characterized by cognitive decline and memory loss. It is the most common cause of dementia, a syndrome affecting memory, thinking, orientation, comprehension, calculation, learning capacity, language, and judgment. Alzheimer's disease typically progresses through stages, starting with mild memory loss and confusion and eventually leading to severe impairment in cognitive function and daily living activities.",
    functionality: () => {
        alzheimerBool = true
    },
    remove: 
        () => {alzheimerBool = false}   
}

let alzheimers = new Handicap(alzheimersObject)

//All Handicaps in Gamepool 
 
arrayOfAllHandicaps = [alzheimers, fullColorBlindness, tremor, blurryVision, tunnelVision, macularDegeneration]

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
