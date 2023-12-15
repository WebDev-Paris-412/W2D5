class Car {
	constructor(gameScreen, height, width, imageSource) {
		this.gameScreen = gameScreen
		this.height = height
		this.width = width
		this.x = (this.gameScreen.offsetWidth - this.width) / 2
		this.y = 440
		this.element = document.createElement("img")
		this.element.src = imageSource
		this.element.style.width = this.width + "px"
		this.element.style.height = this.height + "px"
		this.element.style.position = "absolute"
		this.gameScreen.append(this.element)
		this.updatePosition()
		this.isInvincible = false
		this.lives = 3
	}
	updatePosition() {
		this.element.style.left = this.x + "px"
		this.element.style.top = this.y + "px"
	}

	checkCollision(obstacleInstance) {
		const car = this.element.getBoundingClientRect()
		const obstacle = obstacleInstance.element.getBoundingClientRect()

		const isInX = obstacle.right >= car.left && obstacle.left <= car.right
		const isInY = obstacle.bottom >= car.top && obstacle.top <= car.bottom

		return isInY && isInX
	}

	move(direction) {
		const gameScreenBounding = this.gameScreen.getBoundingClientRect()
		switch (direction) {
			case "up":
				if (this.y <= 0) {
					return
				}
				this.y -= 2
				break
			case "down":
				if (this.y + this.height >= gameScreenBounding.height) {
					return
				}
				this.y += 2
				break
			case "left":
				if (this.x <= 50) {
					return
				}
				this.x -= 2
				break
			case "right":
				if (this.x + this.width + 50 >= gameScreenBounding.width) {
					return
				}
				this.x += 2
				break
		}
		this.updatePosition()
	}
}
