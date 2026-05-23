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

// global variables
let promptSize = 60
let commonButtonTextSize = 45
let buttons = []
let playerCount = 0
let players = []
let movementSpeed = 0.1
let jumpStrength = 0.01

// main menu variables
let titleSize = 160
let mainMenuBackground = "#879384"
let mainMenuText = "#00E8C1"
let mainMenuButtonColor = "#D9D9D9"
let mainMenuButtonSize = 200
let mainMenuButtonTextColor = "#000000"
let mainMenuButtonTextSize = 96

// puzzle variables
let player1Color = "#0033FF"
let player2Color = "#FF0000"
let pauseButtonTextSize = 40
let pauseButtonWidth = 200
let pauseButtonHeight = 100
let playerSize = 20
let playerDensity = 0.005

// timer variables
let secondsSincePuzzleStart = 0
let puzzleStartTime = 0
let now = 0

// states
let state_mainMenu = 0
let state_firstPuzzle = 1
let state_firstTransition = 2
let state_secondPuzzle = 3
let state_secondTransition = 4
let state_leaderboard = 5
let currentState = state_mainMenu