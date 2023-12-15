class Game {
	// code to be added
	constructor(gameScreen, pressedKeys) {
		this.gameScreen = gameScreen
		this.car = new Car(this.gameScreen, 200, 100, "./images/redCar.png")
		this.pressedKeys = pressedKeys
		this.intervalId = null
		this.update()
		this.obstacles = []
		this.counter = 1
	}

	/**
	 * ## Game engine
	 *
	 *  >The update function create an interval that runs 60 times a second
	 *
	 * Everything related to the game should be in this function
	 *
	 */
	update() {
		this.intervalId = setInterval(() => {
			if (this.counter % 180 === 0) {
				// console.log("let's create obstacle")
				this.obstacles.push(new Obstacle(this.gameScreen))
				this.counter = 0
			}
			this.counter++
			for (const key in this.pressedKeys) {
				if (this.pressedKeys[key]) {
					// console.log(this.pressedKeys)
					this.car.move(key)
				}
			}

			for (const obstacle of this.obstacles) {
				obstacle.move()
				if (this.car.checkCollision(obstacle) && !this.car.isInvincible) {
					this.car.isInvincible = true
					this.car.lives--
					document.getElementById("lives").textContent = this.car.lives
					setTimeout(() => {
						this.car.isInvincible = false
					}, 2000)
					console.log("hit !")
					if (this.car.lives === 0) {
						clearInterval(this.intervalId)
					}
				}
			}
		}, 1000 / 60)
	}
}
