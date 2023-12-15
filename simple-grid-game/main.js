const rulesPage = document.getElementById("rules-page")
const gamePage = document.getElementById("game-page")
const endPage = document.getElementById("end-page")
const startButton = document.getElementById("start")
const gameGrid = document.querySelector(".grid")
const scoreElement = document.getElementById("score")
const dialogElement = document.querySelector("dialog")
const restartButton = document.getElementById("restart")
let playerPosition = 30
let cells = []
let score = 0

const AMOUNT_OF_COINS = 10
const AMOUNT_OF_CELLS = 100

startButton.addEventListener("click", startGame)
restartButton.addEventListener("click", restartGame)

function restartGame() {
	gameGrid.innerHTML = ""
	playerPosition = 30
	cells = []
	score = 0
	dialogElement.close()
	startGame()
}

function startGame() {
	rulesPage.classList.add("hidden")
	gamePage.classList.remove("hidden")

	generateCells()
	displayPlayer()
	generateCoins()
}

function displayPlayer() {
	cells[playerPosition].classList.add("player")
}
function hidePlayer() {
	cells[playerPosition].classList.remove("player")
}

function generateCoins() {
	for (let i = 0; i < AMOUNT_OF_COINS; i++) {
		const availableCells = document.querySelectorAll(
			".cell:not(.player, .coin)"
		)
		const randomIndex = Math.floor(Math.random() * availableCells.length)
		console.log(cells, availableCells, randomIndex)
		const randomCell = availableCells[randomIndex]
		randomCell.classList.add("coin")
	}
}

function generateCells() {
	for (let i = 0; i < AMOUNT_OF_CELLS; i++) {
		const cell = document.createElement("div")
		cell.classList.add("cell")
		cell.textContent = i
		gameGrid.append(cell)
		cells.push(cell)
	}
}

document.addEventListener("keydown", (event) => {
	console.log(event.key)
	switch (event.key) {
		case "ArrowUp":
			if (playerPosition < 10) {
				return
			}
			move("up")
			break
		case "ArrowLeft":
			if (playerPosition % 10 === 0) {
				return
			}
			move("left")
			break
		case "ArrowDown":
			if (playerPosition >= 90) {
				return
			}
			move("down")
			break
		case "ArrowRight":
			if ((playerPosition + 1) % 10 === 0) {
				return
			}
			move("right")
			break
	}
})

function move(direction) {
	hidePlayer()
	switch (direction) {
		case "up":
			playerPosition -= 10
			break
		case "down":
			playerPosition += 10
			break
		case "left":
			playerPosition--
			break
		case "right":
			playerPosition++
			break
	}
	// update playerPosition based on direction
	displayPlayer()
	if (thereIsACoin()) {
		//
		eatTheCoin()
	}
	if (score == 100) {
		endTheGame()
	}
}

function thereIsACoin() {
	return cells[playerPosition].classList.contains("coin")
}

function eatTheCoin() {
	cells[playerPosition].classList.remove("coin")
	score += 10
	console.log(score)
}

function endTheGame() {
	dialogElement.showModal()
}
