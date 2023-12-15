const startButton = document.getElementById("start-button")
const restartButton = document.getElementById("restart-button")
const gameScreen = document.getElementById("game-screen")
const gameIntro = document.getElementById("game-intro")

let game
const pressedKeys = {
	up: false,
	down: false,
	right: false,
	left: false,
}
startButton.addEventListener("click", function () {
	gameScreen.classList.remove("hidden")
	gameIntro.classList.add("hidden")
	startGame()
})

function startGame() {
	game = new Game(gameScreen, pressedKeys)
}

document.addEventListener("keyup", (e) => {
	switch (e.key) {
		case "ArrowUp":
			pressedKeys["up"] = false
			break
		case "ArrowDown":
			pressedKeys["down"] = false
			break
		case "ArrowLeft":
			pressedKeys["left"] = false
			break
		case "ArrowRight":
			pressedKeys["right"] = false
			break
	}
})

document.addEventListener("keydown", (e) => {
	switch (e.key) {
		case "ArrowUp":
			pressedKeys["up"] = true
			break
		case "ArrowDown":
			pressedKeys["down"] = true
			break
		case "ArrowLeft":
			pressedKeys["left"] = true
			break
		case "ArrowRight":
			pressedKeys["right"] = true
			break
	}
})
