function firstPuzzle() {
    if (keyIsDown(87) && engine.timing.timeScale > 0) {
        engine.timing.timeScale -= 0.01
    }
    if (keyIsDown(83) && engine.timing.timeScale < 1) {
        engine.timing.timeScale += 0.01
    }
}