function setupFirstPuzzleComplete() {
    lastLevelTime = secondsSincePuzzleStart

    buttons = []
    buttons.push(
        new Button(
            () => { leavePuzzle(state_mainMenu) },
            createVector(windowWidth / 2, windowHeight / 2 + 180),
            280,
            80,
            "Main Menu",
            34,
            "#000000",
            mainMenuButtonColor
        ),
        new Button(
            () => { leavePuzzle(state_mainMenu) },
            createVector(windowWidth / 2, windowHeight / 2 + 90),
            280,
            80,
            "Retry",
            34,
            "#000000",
            mainMenuButtonColor
        ),
        new Button(
            () => { leaderboardMessage = "Leaderboard is coming soon!" },
            createVector(windowWidth / 2, windowHeight / 2 + 270),
            280,
            80,
            "Leaderboard",
            34,
            "#000000",
            mainMenuButtonColor
        )
    )
}

function firstPuzzleComplete() {
    background("#4CAF50")

    fill("#FFFFFF")
    textSize(96)
    text("Puzzle Solved!", windowWidth / 2, windowHeight / 2 - 160)

    textSize(48)
    text(`Time: ${lastLevelTime.toFixed(2)}s`, windowWidth / 2, windowHeight / 2 - 60)

    buttons.forEach((Button) => {
        Button.draw()
    })
}