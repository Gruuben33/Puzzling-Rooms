var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Constraint = Matter.Constraint,
    Events = Matter.Events,
    Common = Matter.Common
let engine, render, runner

// palette
let mainMenuBackground = [135, 147, 132]
let mainMenuText = [0, 232, 193]
let mainMenuButtons = [217, 217, 217]

// text Sizes
let titleSize = 160
let promtSize = 60
let buttonTextSize = 45

// states
let state_mainMenu = 0
let state_firstPuzzle = 1
let state_firstTransition = 2
let state_secondPuzzle = 3
let state_secondTransition = 4
let state_leaderboard = 5
let currentState = state_mainMenu