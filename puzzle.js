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
    // there are parts here that I don't understand, I had the ai Claude explain it to me but I didn't understand
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
            () => {leavePuzzle(state_firstPuzzle)},
            createVector(windowWidth - pauseButtonWidth, pauseButtonHeight*2.25),
            pauseButtonWidth,
            pauseButtonHeight,
            "Retry",
            pauseButtonTextSize,
            mainMenuButtonTextColor,
            mainMenuButtonColor
        ),
        new Button(
            () => {leavePuzzle(state_mainMenu)},
            createVector(windowWidth - pauseButtonWidth, pauseButtonHeight*0.75),
            pauseButtonWidth,
            pauseButtonHeight,
            "Main Menu",
            pauseButtonTextSize,
            mainMenuButtonTextColor,
            mainMenuButtonColor
        )
    )
    if (playerCount == 1) {
        players.push(
            new Player(
                createVector(100, windowHeight - 160),
                player1Color,
                playerSize,
                playerDensity
            )
        )
    } else if (playerCount == 2) {
        players.push(
            new Player(
                createVector(100, windowHeight - 160),
                player1Color,
                playerSize,
                playerDensity
            ),
            new Player(
                createVector(40, windowHeight - 160),
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
        players[0].jump(players[0])
    }
    if (players[0].jumpCooldown > 0) {
        players[0].jumpCooldown--
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
            players[1].jump(players[1])
        }
        if (players[1].jumpCooldown > 0) {
            players[1].jumpCooldown--
        }
        if (keyIsDown(83)) {
            players[1].descendingDark()
        }
    }

    buttons.forEach((Button) => {
        Button.draw()
    })
    text(secondsSincePuzzleStart.toFixed(2), windowWidth - 50, 50)
    if (Collision.collides(puzzleBall, puzzleSquare)) {
        leavePuzzle(currentState+1)
    }
}

function displayControls() {
    background(76, 175, 80, 100) // #4CAF50
    buttons.forEach((Button) => {
        Button.draw()
    })

    fill("#FFFFFF")
    textSize(96)
    text("Level 1", windowWidth / 2, windowHeight / 2 - 160)
    text(`start in ${Math.round(-(secondsSincePuzzleStart - displayTime))} seconds`, windowWidth/2, windowHeight/2)

    textSize(promptSize)
    text("Player 1 moves with ↑ ← ↓ → ", windowWidth/4, windowHeight/3*2)
    if (playerCount == 2) text("Player 2 moves with W A S D", windowWidth/4*3, windowHeight/3*2)
}