function leaveMainMenu(newPlayerCount) {
    playerCount = newPlayerCount
    stateChange(state_firstPuzzle)
}

function setupMainMenu() {
    buttons = []
    buttons.push(
    new Button(
        () => {leaveMainMenu(1)},
        createVector(windowWidth/3, windowHeight/2+mainMenuButtonSize), 
        mainMenuButtonSize, 
        mainMenuButtonSize, 
        "1", 
        mainMenuButtonTextSize, 
        mainMenuButtonTextColor, 
        mainMenuButtonColor, 
        state_firstPuzzle, 
        1),
    new Button(
        () => {leaveMainMenu(2)},
        createVector(windowWidth/3*2, windowHeight/2+mainMenuButtonSize), 
        mainMenuButtonSize, 
        mainMenuButtonSize, 
        "2", 
        mainMenuButtonTextSize, 
        mainMenuButtonTextColor, 
        mainMenuButtonColor, 
        state_firstPuzzle, 
        2)
    )
}

function mainMenu() {
    background(mainMenuBackground)
    fill(mainMenuText)
    textSize(titleSize)
    text("Puzzling Rooms", windowWidth/2, windowHeight/2 - titleSize*1.5)
    textSize(promptSize)
    text("How many people are playing?", windowWidth/2, windowHeight/2 - promptSize)
    buttons.forEach((Button) => {
        Button.draw()
    })
}