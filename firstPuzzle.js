function leavePuzzle(nextState) {
    Composite.clear(engine.world, true)
    players = []
    buttons = []
    stateChange(nextState)
}

function setupFirstPuzzle() {
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
                createVector(windowWidth/2, windowHeight/2),
                player1Color,
                playerSize,
                playerDensity
            )
        )
    } else if (playerCount == 2) {
        players.push(
            new Player(
                createVector(windowWidth/2, windowHeight/2),
                player1Color,
                playerSize,
                playerDensity
            ),
            new Player(
                createVector(windowWidth/2, windowHeight/2 - 100),
                player2Color,
                playerSize,
                playerDensity
            )
            )
    }
    players.forEach((Player) => {
        Player.addToComposite(engine.world)
    })

    var ground = Bodies.rectangle(windowWidth/2, 5*windowHeight/6, windowWidth - 300, windowHeight/3, {
        isStatic: true,
        friction: 0.05
    });

    Composite.add(engine.world, ground);
}

function firstPuzzle() {
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
    buttons.forEach((Button) => {
        Button.draw()
    })
    console.log(players[0].body.position.x)
}