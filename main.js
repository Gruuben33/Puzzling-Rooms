function setup() {
    engine = Engine.create()
    render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: innerWidth,
            height: innerHeight,
            wireframes: false, // important
            background: "#A6A2A2"
        }
    })

    createCanvas(windowWidth, windowHeight, render.canvas)
    frameRate(60)
    noStroke()
    textAlign(CENTER, CENTER)
    rectMode(CENTER, CENTER)
    stateChange(state_mainMenu)

    // Render.run(render);
    runner = Runner.create();
    Runner.run(runner, engine);
}

function stateChange(newState) {
    currentState = newState;
    if (currentState == state_mainMenu) {
        setupMainMenu()
    } else if (currentState == state_firstPuzzle) {
        setupFirstPuzzle()
    }
}

function handleState(state) {
    Render.world(render)
    if (state == state_mainMenu) {
        mainMenu()
    } else if (state == state_firstPuzzle) {
        start() // gameplay is same, setup is different
    } else if (state == state_firstTransition) {
        return;
    } else if (state == state_secondPuzzle) {
        start() // gameplay is same, setup is different
    } else if (state == state_secondTransition) {
        return;
    } else if (state == state_leaderboard) {
        return;
    }
}

function draw() {
    clear()
    handleState(currentState)
    // console.log(mouseX, mouseY)
}