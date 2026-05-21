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
    frameRate(60)
    textAlign(CENTER, CENTER)
    rectMode(CENTER, CENTER)
    stateChange(state_mainMenu)
}

function stateChange(newState) {
    currentState = newState;
    if (currentState == state_mainMenu) {
        buttons = []
        buttons.push(
        new Button(createVector(windowWidth/3, windowHeight/2+mainMenuButtonSize), 
            mainMenuButtonSize, 
            mainMenuButtonSize, 
            "1", 
            mainMenuButtonTextSize, 
            mainMenuButtonTextColor, 
            mainMenuButtonColor, 
            state_firstPuzzle, 
            1),
        new Button(createVector(windowWidth/3*2, windowHeight/2+mainMenuButtonSize), 
            mainMenuButtonSize, 
            mainMenuButtonSize, 
            "2", 
            mainMenuButtonTextSize, 
            mainMenuButtonTextColor, 
            mainMenuButtonColor, 
            state_firstPuzzle, 
            2)
        )
    } else if (currentState == state_firstPuzzle) {
    var ball = Bodies.circle(windowWidth/2, 0, 30, {
        isStatic: false
        //airFriction: 1
    });

    var ground = Bodies.rectangle(windowWidth/2, 5*windowHeight/6, windowWidth - 40, windowHeight/3, {
        isStatic: true,
        friction: 0.05
    });

    engine.world.gravity.y = 0.5
    Composite.add(engine.world, [ball, ground]);
    Render.run(render);
    runner = Runner.create();
    Runner.run(runner, engine);
    }
}

function handleState(state) {
    if (state == state_mainMenu) {
        mainMenu()
    } else if (state == state_firstPuzzle) {
        firstPuzzle()
        console.log(state)
    } else if (state == state_firstTransition) {
        return;
    } else if (state == state_secondPuzzle) {
        return;
    } else if (state == state_secondTransition) {
        return;
    } else if (state == state_leaderboard) {
        return;
    }
}

function draw() {
    clear()
    console.log(currentState)
    handleState(currentState)
}