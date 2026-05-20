function setup() {
    engine = Engine.create()
    render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: innerWidth,
            height: innerHeight,
            wireframes: false,
            background: color(255, 0, 0)
        }
    })

    createCanvas(windowWidth, windowHeight, render.canvas)
    textAlign(CENTER, CENTER)

    // var ball = Bodies.circle(windowWidth/2, 0, 30, {
    //     isStatic: false
    //     //airFriction: 1
    // });

    // var ground = Bodies.rectangle(windowWidth/2, 5*windowHeight/6, windowWidth - 40, windowHeight/3, {
    //     isStatic: true,
    //     friction: 0.05
    // });

    // Composite.add(engine.world, [ball, ground]);
    // Render.run(render);
    // runner = Runner.create();
    // Runner.run(runner, engine);
}

function handleState(state) {
    switch(state) {
        case state_mainMenu:
            mainMenu()
            break;
        case state_firstPuzzle:
            break;
        case state_firstTransition:
            break;
        case state_secondPuzzle:
            break;
        case state_secondTransition:
            break;
        case state_leaderboard:
            break;
    }
}

function draw() {
    clear()
    handleState(currentState)
}