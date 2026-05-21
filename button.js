class Button {
    constructor(position, width, height, text, textSize, textColor, color, nextState, playerCount = null) {
        this.position = position;
        this.width = width;
        this.height = height;
        this.text = text;
        this.textSize = textSize;
        this.textColor = textColor;
        this.color = color;
        this.nextState = nextState;
        this.playerCount = playerCount;
    } 

    draw() {
        fill(this.color)
        rect(this.position.x, this.position.y, this.width, this.height)
        fill(this.textColor)
        textSize(this.textSize)
        text(this.text, this.position.x, this.position.y)
    }

    checkClicked(mouseX, mouseY) {
        if (mouseX > this.position.x - this.width/2 && mouseX < this.position.x + this.width/2 &&
            mouseY > this.position.y - this.height/2 && mouseY < this.position.y + this.height/2) {
                return true
        }
    }
}

function mouseClicked() {
    buttons.forEach((button) => {
        if (button.checkClicked(mouseX, mouseY)) {
            if (button.playerCount) {
                playerCount = button.playerCount
            }
            stateChange(button.nextState)
        }
    })
}