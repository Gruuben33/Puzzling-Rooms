function leavePuzzle(nextState) {
    Composite.clear(engine.world, true)
    players = []
    buttons = []
    stateChange(nextState)
}

let collisionHandlersRegistered = false
let jumpKeyPreviouslyDown = false

function isGroundContact(pair, Player) {
    const playerBody = Player.body;
    const otherBody = pair.bodyA === playerBody ? pair.bodyB : pair.bodyA;
    if (otherBody === puzzleBall) return false;

    const normal = pair.bodyA === playerBody
        ? pair.collision.normal
        : { x: -pair.collision.normal.x, y: -pair.collision.normal.y };

    // Only return true when normal is pointing upward (player is on top)
    return normal.y < -0.9;
}

function setupCollisionHandlers() {
    if (collisionHandlersRegistered) return
    collisionHandlersRegistered = true

    Events.on(engine, 'collisionStart', (event) => {
        event.pairs.forEach(pair => {
            players.forEach((Player) => {
                if (pair.bodyA === Player.body || pair.bodyB === Player.body) {
                    if (isGroundContact(pair, Player)) {
                        groundContacts++
                    }
                }
            })
        })
    })

    Events.on(engine, 'collisionEnd', (event) => {
        event.pairs.forEach(pair => {
            players.forEach((Player) => {
                if (pair.bodyA === Player.body || pair.bodyB === Player.body) {
                    if (isGroundContact(pair, Player)) {
                        groundContacts = Math.max(0, groundContacts - 1)
                    }
                }
            })
        })
    })
}

function setupPuzzle() {
    buttons = []
    buttons.push(
        new Button(
            () => {leavePuzzle(state_mainMenu)},
            createVector(pauseButtonWidth, pauseButtonHeight),
            pauseButtonWidth,
            pauseButtonHeight,
            "Pause",
            pauseButtonTextSize,
            mainMenuButtonTextColor,
            mainMenuButtonColor
        )
    )
    if (playerCount == 1) {
        players.push(
            new Player(
                createVector(windowWidth/2 - 70, windowHeight/2 - 70),
                player1Color,
                playerSize,
                playerDensity
            )
        )
    } else if (playerCount == 2) {
        players.push(
            new Player(
                createVector(windowWidth/2 - 70, windowHeight/2 - 70),
                player1Color,
                playerSize,
                playerDensity
            ),
            new Player(
                createVector(windowWidth/2 - 70, windowHeight/2 - 100 - 70),
                player2Color,
                playerSize,
                playerDensity
            )
            )
    }
    players.forEach((Player) => {
        Player.addToComposite(engine.world)
    })
    groundContacts = 0
    setupCollisionHandlers()
    timeSincePuzzleStart = 0
    puzzleStartTime = engine.timing.timestamp/1000
}

function start() {
    now = engine.timing.timestamp/1000
    secondsSincePuzzleStart = Math.round((now - puzzleStartTime) * 100) / 100
    if (secondsSincePuzzleStart >= 0.00) {
        play()
    } else {
        displayControls()
    }
}

function play() {
    if (keyIsDown(87) && engine.timing.timeScale > 0) {
        engine.timing.timeScale -= 0.01
    }
    if (keyIsDown(83) && engine.timing.timeScale < 1) {
        engine.timing.timeScale += 0.01
    }
    if (keyIsDown(39) && keyIsDown(37)) {
        players[0].move(null)
    } else if (keyIsDown(39)) {
        players[0].move(1)
    } else if (keyIsDown(37)) {
        players[0].move(-1)
    }

    if (keyIsDown(38)) {
        players[0].jump()
    }
    if (keyIsDown(40)) {
        players[0].descendingDark()
    }
    buttons.forEach((Button) => {
        Button.draw()
    })
    if (Collision.collides(puzzleBall, puzzleSquare)) {
        leavePuzzle(state_mainMenu)
    }
}

function displayControls() {
    console.log(secondsSincePuzzleStart)
    buttons.forEach((Button) => {
        Button.draw()
    })
}