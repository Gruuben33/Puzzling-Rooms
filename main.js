var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Constraint = Matter.Constraint,
    Events = Matter.Events,
    Common = Matter.Common;

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
    });

    createCanvas(windowWidth, windowHeight, render.canvas)

    var ball = Bodies.circle(windowWidth/2, 0, 30, {
        isStatic: false
        //airFriction: 1
    });

    var ground = Bodies.rectangle(windowWidth/2, 5*windowHeight/6, windowWidth - 40, windowHeight/3, {
        isStatic: true,
        friction: 0.05
    });

    Composite.add(engine.world, [ball, ground]);
    Render.run(render);
    runner = Runner.create();
    Runner.run(runner, engine);
}

function draw() {
    currentTime = Math.round(engine.timing.timestamp/10)/100
    fill("black");
    textSize(40);
    text("bboos", windowWidth/2, windowHeight/2);
    console.log(currentTime)
}