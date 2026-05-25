function leavePuzzle(nextState) {
    Composite.clear(engine.world, true)
    players = []
    buttons = []
    stateChange(nextState)
}

let jumpKeyPreviouslyDown = false

function isOnGround(Player) {
    const playerBody = Player.body;
    const activePairs = engine.pairs.list.filter(p => p.isActive);
    
    return activePairs.some(pair => {
        if (pair.bodyA !== playerBody && pair.bodyB !== playerBody) return false;
        if (pair.bodyA === puzzleBall || pair.bodyB === puzzleBall) return false;

        const normal = pair.bodyA === playerBody
            ? pair.collision.normal
            : { x: -pair.collision.normal.x, y: -pair.collision.normal.y };

        return normal.y < -0.9;
    });
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
    timeSincePuzzleStart = 0
    puzzleStartTime = engine.timing.timestamp/1000
}

function start() {
    now = engine.timing.timestamp/1000
    secondsSincePuzzleStart = Math.round((now - puzzleStartTime)*100)/100//.toFixed(2)
    if (secondsSincePuzzleStart >= displayTime) {
        play()
    } else {
        displayControls()
    }
}

function play() {
    if (playerCount == 1) {
        if (keyIsDown(87) && engine.timing.timeScale > 0) {
            engine.timing.timeScale -= 0.01
        }
        if (keyIsDown(83) && engine.timing.timeScale < 1) {
            engine.timing.timeScale += 0.01
        }
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
    if (players[0].jumpCooldown > 0) {
        jumpCooldown--
    }
    if (keyIsDown(40)) {
        players[0].descendingDark()
    }

    if (playerCount == 2) {
        if (keyIsDown(68) && keyIsDown(65)) {
            players[1].move(null)
        } else if (keyIsDown(68)) {
            players[1].move(1)
        } else if (keyIsDown(65)) {
            players[1].move(-1)
        }

        if (keyIsDown(87)) {
            players[1].jump()
        }
        if (players[1].jumpCooldown > 0) {
            jumpCooldown--
        }
        if (keyIsDown(83)) {
            players[1].descendingDark()
        }
    }

    buttons.forEach((Button) => {
        Button.draw()
    })
    if (Collision.collides(puzzleBall, puzzleSquare)) {
        leavePuzzle(currentState+1)
    }
}

function displayControls() {
    buttons.forEach((Button) => {
        Button.draw()
    })
}