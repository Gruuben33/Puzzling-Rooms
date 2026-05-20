class Button {
    constructor(position, text, color, nextState, playerCount = null) {
        this.position = position;
        this.text = text;
        this.color = color;
        this.nextState = nextState;
        this.playerCount = playerCount;
    } 

    draw() {
        fill(this.color)
        square(this.position.x, this.position.y, 40)
    }
}