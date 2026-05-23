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
    let puzzleSquare = Bodies.rectangle(400, windowHeight-50, 250, 100, {
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
        friction: 0.05,
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
    let rightOverHang = Bodies.rectangle(windowWidth-150, 175, 300, 350, {
        isStatic: true,
        friction: 0.05,
        render: {
            fillStyle: "#6C6A6A",
            lineWidth: 0
        }
    })
    Composite.add(engine.world, [ground1, puzzleSquare, ground2, triangle, rightLedge, rightOverHang]);
}