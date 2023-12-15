class Obstacle {
	constructor(gameScreen) {
		this.gameScreen = gameScreen
		this.y = -100
		this.x = 50
		this.width = 100
		this.height = 200
		// this.element = document.createElement("div")
		this.element = document.createElement("img")
		this.element.src = "./images/car.png"
		// this.element.classList.add("obstacle")
		this.element.style.position = "absolute"
		this.element.style.width = `${this.width}px`
		this.element.style.height = `${this.height}px`
		this.element.style.left = `${this.x}px`
		this.gameScreen.append(this.element)
		this.updatePosition()
	}

	move() {
		this.y += 2
		this.updatePosition()
		// console.log(this.element)
	}
	updatePosition() {
		this.element.style.top = `${this.y}px`
	}
}
