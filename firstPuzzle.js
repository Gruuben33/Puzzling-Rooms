function setupFirstPuzzle() {
    setupPuzzle()
    setupFirstPuzzleElements()
}

function setupFirstPuzzleElements() {
    // 9 rectangles, one seesaw, one triangle, complete puzzle square and puzzle ball to touch complete puzzle square
    let ground1 = Bodies.rectangle(275/2, windowHeight-125/2, 275, 125, {
        isStatic: true,
        friction: 0.05,
        render: {
            fillStyle: "#6C6A6A",
            lineWidth: 0
        }
    })
    puzzleSquare = Bodies.rectangle(400, windowHeight-50, 250, 100, {
        isStatic: true,
        friction: 0.05,
        render: {
            fillStyle: "#16BC00",
            lineWidth: 0
        }
    })
    let ground2 = Bodies.rectangle(1220, windowHeight-125/2, 1390, 125, {
        isStatic: true,
        friction: 0.05,
        render: {
            fillStyle: "#6C6A6A",
            lineWidth: 0
        }
    })
    let triangle = Bodies.polygon(1350, windowHeight-160, 3, 75, {
        isStatic: true,
        friction: PI,
        render: {
            fillStyle: "#6C6A6A",
            lineWidth: 0
        }
    })
    Body.rotate(triangle, Math.PI/2)
    let rightLedge = Bodies.rectangle(windowWidth-150, 600, 300, 150, {
        isStatic: true,
        friction: 0.05,
        render: {
            fillStyle: "#6C6A6A",
            lineWidth: 0
        }
    })
    let rightOverHang = Bodies.rectangle(windowWidth-150, 150, 300, 300, {
        isStatic: true,
        friction: 0.05,
        render: {
            fillStyle: "#6C6A6A",
            lineWidth: 0
        }
    })
    let leftLedge = Bodies.rectangle(75, 450, 150, 200, {
        isStatic: true,
        friction: 0.05,
        render: {
            fillStyle: "#6C6A6A",
            lineWidth: 0
        }
    })
    let seesaw = Bodies.rectangle(600, 490, 800, 25, {
        density: 0.001,
        render: {
            fillStyle: "#6C6A6A",
            lineWidth: 0
        }
    })
    let pivot = Bodies.circle(600, 490, 0, {
        isStatic: true,
        render: {
            fillStyle: "#6C6A6A",
            lineWidth: 0,
            visible: false
        }
    })
    let constraint = Constraint.create({
        bodyA: seesaw,
        pointA: {x: 0, y: 0},
        bodyB: pivot,
        pointB: {x: 0, y: 0},
        stiffness: 1,
        length: 0
    })
    let slit1 = Bodies.rectangle(300, 600, 150, 25, {
        isStatic: true,
        friction: 0.05,
        render: {
            fillStyle: "#6C6A6A",
            lineWidth: 0
        }
    })
    let slit2 = Bodies.rectangle(windowWidth/2, 620, 150, 25, {
        isStatic: true,
        friction: 0.05,
        render: {
            fillStyle: "#6C6A6A",
            lineWidth: 0
        }
    })
    let slit3 = Bodies.rectangle(1370, 450, 150, 25, {
        isStatic: true,
        friction: 0.05,
        render: {
            fillStyle: "#6C6A6A",
            lineWidth: 0
        }
    })
    let bigPlatform = Bodies.rectangle(880, 250, 1100, 70, {
        isStatic: true,
        friction: 0.05,
        render: {
            fillStyle: "#6C6A6A",
            lineWidth: 0
        }
    })
    puzzleBall = Bodies.circle(1200, 200, playerSize*3, {
        mass: 350,
        friction: 0,
        frictionAir: 0.02,
        restitution: 0,
        render: {
            fillStyle: "#16BC00",
            lineWidth: 0
        }
    })
    Composite.add(engine.world, [boundaries[0], boundaries[1], boundaries[2], ground1, puzzleSquare, ground2, triangle, rightLedge, rightOverHang, leftLedge, seesaw, pivot, constraint, slit1, slit2, slit3, bigPlatform, puzzleBall]);
}