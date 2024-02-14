class Upgrade {
    constructor(css) {
        this.css = css
        this.head = document.head || document.getElementsByTagName('head')[0]
        this.style = document.createElement("style")   
    }

    implement() {
        this.head.appendChild(this.style) 
        this.style.type = 'text/css';
        this.style.styleSheet.cssText = this.css
    }

    undoImplement() {
        this.style.styleSheet.cssText = ""
    }
}

let biggerButtons = new Upgrade("")
