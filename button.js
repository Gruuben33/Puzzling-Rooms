class Button {
    constructor(action, position, width, height, text, textSize, textColor, color) {
        this.action = action
        this.position = position;
        this.width = width;
        this.height = height;
        this.text = text;
        this.textSize = textSize;
        this.textColor = textColor;
        this.color = color;
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
                this.action()
        }
    }
}

function mouseClicked() {
    buttons.forEach((button) => {
        (button.checkClicked(mouseX, mouseY))
    })
}