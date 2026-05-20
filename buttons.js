class Button {
    constructor(position, purpose, text, color){
        this.position = position;
        this.purpose = purpose;
        this.text = text;
        this.color = color;
    } 

    draw() {
        fill(this.color)
        square(this.position.x, this.position.y, 40)
    }
}