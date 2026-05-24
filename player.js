class Player {
    constructor(position, color, size, density) {
        this.position = position
        this.color = color
        this.size = size
        this.density = density
        this.body = Bodies.circle(this.position.x, this.position.y, this.size, {
            restitution: 0.01,
            isStatic: false,
            friction: 0.4,
            airFriction: 0.02,
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
                x: movementSpeed * sign,
                y: 0
            })
        }
        Body.setVelocity(this.body, {
            x: Common.clamp(this.body.velocity.x, -movementSpeed, movementSpeed),
            y: this.body.velocity.y
        })
    }

    jump() {
        if (groundContacts > 0) {
            Body.applyForce(this.body, this.body.position, {
                x: 0,
                y: -jumpStrength * this.body.mass * 0.0025
            })
            console.log(this.body.mass, jumpStrength, -jumpStrength * this.body.mass * 0.0025)
        }
        Body.setVelocity(this.body, {
            x: this.body.velocity.x,
            y: Common.clamp(this.body.velocity.y, -jumpStrength * this.body.mass * 0.005, jumpStrength * this.body.mass * 0.005)
        })
    }

    descendingDark() {
        Body.applyForce(this.body, this.body.position, {
            x: 0,
            y: downStrength * this.body.mass * 0.0025
        });
    }
}