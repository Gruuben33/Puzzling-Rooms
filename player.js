class Player {
    constructor(position, color, size, density) {
        this.position = position
        this.color = color
        this.size = size
        this.density = density
        this.body = Bodies.circle(this.position.x, this.position.y, this.size, {
            restitution: 0.2,
            isStatic: false,
            friction: 0.05,
            density: this.density,
            render: {
                fillStyle: this.color
            }
        })
    }

    addToComposite(composite) {
        Composite.add(composite, this.body)
    }

    move(sign) {
        if (sign) {    
            Body.applyForce(this.body, this.body.position, {
                x: movementSpeed*sign,
                y: 0
            })
            Body.setVelocity(this.body, {
                x: Common.clamp(this.body.velocity.x, -movementSpeed, movementSpeed),
                y: this.body.velocity.y
            })
        }
    }
}