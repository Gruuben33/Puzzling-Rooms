function setupFirstPuzzle() {
    buttons = []
    buttons.push(
        new Button(
            () => {stateChange(state_mainMenu)},
            createVector(windowWidth/2, windowHeight/2 ),
            mainMenuButtonSize,
            mainMenuButtonSize,
            "mainMenu",
            mainMenuButtonTextSize,
            mainMenuButtonTextColor,
            mainMenuButtonColor
        )
    )
    if (playerCount == 1) {
        players.push(
            new Player(
                createVector(windowWidth/2, windowHeight/2),
                player1Color,
                40)
            )
    } else if (playerCount == 2) {
        players.push(
            new Player(
                createVector(windowWidth/2, windowHeight/2),
                player1Color,
                40),
            new Player(
                createVector(windowWidth/2, windowHeight/2 - 100),
                player2Color,
                40)
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
    if (keyIsDown(39)) {
        players[0].move(1)
    }
    if (keyIsDown(37)) {
        players[0].move(-1)
    }
    buttons.forEach((Button) => {
        Button.draw()
    })
}