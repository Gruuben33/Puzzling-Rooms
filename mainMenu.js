function mainMenu() {
    background(mainMenuBackground)
    fill(mainMenuText)
    textSize(titleSize)
    text("Puzzling Rooms", windowWidth/2, windowHeight/2 - titleSize*1.5)
    textSize(promptSize)
    text("How many people are playing?", windowWidth/2, windowHeight/2 - promptSize)
    // Display player number button (1 or 2)
    buttons.forEach((Button) => {
        console.log(Button)
        Button.draw()
    })
}