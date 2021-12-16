//DomQueries
const gameWindow = document.querySelector('#game');
const startButton = document.querySelector('#start-btn');
const titleCard = document.querySelector('.title-card')

//enemy data
const enemiesLeft = document.querySelector('#enemy-count');
const enemyHull = document.querySelector('#e-hull');
const enemyFirepower = document.querySelector('#e-firepower');
const enemyAccuracy = document.querySelector('#e-accuracy');

//player data
const playerHull = document.querySelector('#player-hull');
const playerFirepower = document.querySelector('#player-firepower');
const playerAccuracy = document.querySelector('#player-accuracy');

//turnIndicator
const turnIndicator = document.querySelector('#whose-turn')
const enemyTurn = document.querySelector('#enemy-turn')

//class========================================
class Spaceship {
	constructor(hull, firepower, accuracy) {
		this.hull = hull;
		this.firepower = firepower;
		this.accuracy = accuracy;
	}
	attack() {
		let randomNum = Math.random()
		if(randomNum < this.accuracy){
			alienShip.hull -= this.firepower
			enemyHull.innerHTML = alienShip.hull
			turnIndicator.innerHTML = `Nice shot! Aim was ${randomNum}, you dealt ${this.firepower} damage!`
		} else {
			turnIndicator.innerHTML = `Oh no you missed!`
		}
	}
}

class AlienShip {
	constructor(hull, firepower, accuracy) {
		this.hull = hull;
		this.firepower = firepower;
		this.accuracy = accuracy;
	}
	attack() {
		let randomNum = Math.random()
		if(randomNum < this.accuracy){
			playerShip.hull -= this.firepower
			playerHull.innerHTML = playerShip.hull
			enemyTurn.innerHTML = `Oh No! Aliens aim was ${randomNum}, they dealt ${this.firepower} damage!`
		} else {
			enemyTurn.innerHTML = `Yes! Alien missed!`
		}
	}
}



const playerShip = new Spaceship(20, 5, 0.7);

const alienShip = new AlienShip(
		Math.floor(Math.random() * 4) + 3,
		Math.floor(Math.random() * 3) + 2,
		(Math.floor(Math.random() * 3) + 6) / 10
	);


const battle = () => {
	playerShip.attack()
	if(alienShip.hull > 0) {
		alienShip.attack()
		// turnIndicator.innerHTML = 'If you wish to continue click "Attack", If you wish to flee click "Retreat"!'
	} else {
		turnIndicator.innerHTML = 'YOU WIN!'
		enemyTurn.innerHTML = ''
	}

}

const game = {
	start: () => {
		startButton.classList.add('hide');
		gameWindow.classList.remove('hide');
		titleCard.classList.add('hide')


		//alienShip
		enemyHull.innerHTML = alienShip.hull
    	enemyFirepower.innerHTML = alienShip.firepower
    	enemyAccuracy.innerHTML = alienShip.accuracy
		
		
		//UI
		playerHull.innerHTML = playerShip.hull
		playerAccuracy.innerHTML = playerShip.accuracy
		playerFirepower.innerHTML = playerShip.firepower

	},	

	retreat: () => {
		gameWindow.classList.add('hide')
		startButton.classList.remove('hide')
		startButton.innerText = 'RESTART'
		location.reload()
	},

};




