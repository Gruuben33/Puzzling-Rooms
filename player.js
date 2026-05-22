class Player {
    constructor(position, color, size) {
        this.position = position
        this.color = color
        this.size = size
        this.body = Bodies.circle(this.position.x, this.position.y, this.size, {
            restitution: 0.2,
            isStatic: false,
            friction: 0.05,
            render: {
                fillStyle: this.color
            }
        })
    }

    addToComposite(composite) {
        Composite.add(composite, this.body)
    }

    move(sign) {
        Body.setVelocity(this.body, createVector(sign*movementSpeed, 0))
    }
}