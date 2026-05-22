function setupFirstPuzzle() {
    if (playerCount == 1) {
        players.push(
            new Player(
                createVector(windowWidth/2, windowHeight/2),
                "#0033FF",
                40)
            )
    } else if (playerCount == 2) {
        players.push(
            new Player(
                createVector(windowWidth/2, windowHeight/2),
                "#0033FF",
                40),
            new Player(
                createVector(windowWidth/2, windowHeight/2 - 100),
                "#FF0000",
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

    engine.world.gravity.y = 0.5
    Composite.add(engine.world, ground);
    Render.run(render);
    runner = Runner.create();
    Runner.run(runner, engine);
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
}