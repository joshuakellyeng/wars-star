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

//class========================================
class Spaceship {
	constructor(hull, firepower, accuracy) {
		this.hull = hull;
		this.firepower = firepower;
		this.accuracy = accuracy;
	}
	attack() {}
}

const playerShip = new Spaceship(20, 5, 0.7);

const squadron = [];

for (let i = 0; i < 6; i++) {
	squadron[i] = new Spaceship(
		Math.floor(Math.random() * 4) + 3,
		Math.floor(Math.random() * 3) + 2,
		(Math.floor(Math.random() * 3) + 6) / 10
	);
}



const game = {
	start: () => {
		startButton.classList.add('hide');
		gameWindow.classList.remove('hide');
		titleCard.classList.add('hide')
	},	
	retreat: () => {
		gameWindow.classList.add('hide')
		startButton.classList.remove('hide')
		startButton.innerText = 'RESTART'
	},
	
};

console.log(playerShip)
console.log(squadron)



