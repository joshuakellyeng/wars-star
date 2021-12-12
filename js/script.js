//This is the basis of my classes I will be building two subclasses the rebels and the empire based off of a fan favorite ---- WARS STAR ------ *queue the music* babababab deee deee deee do deedoo daaah dahh. I think I had to much fun making this.

class StarFighter {
	constructor(pilot, hull, accuracy, blasters) {
		this.pilot = pilot;
		this.hull = hull;
		this.accuracy = accuracy;
		this.blasters = blasters;
	}
}

//=======================================================================EMPIRE STAR FIGHTER SUBCLASS
// this will be the empire class style ships or out "Bow"-Tie Fighters XD
class Empire extends StarFighter {
	constructor(pilot, hull, accuracy, blasters, emp) {
		super(pilot, hull, accuracy, blasters);
		this.emp = emp;
	}
	fireBlasters() {
		xWing.hull -= this.blasters;
		if (xWing.hull >= 0) {
			console.log(`Empire Pilot ${this.pilot}: Take that Rebel Scum!      
            R2: *You've taken damage Commander ${xWing.pilot}, current hull strength is at ${xWing.hull}*`);
		} else {
			console.log(`Die Rebel Scum!`);
		}
	}
	fireEmp() {
		xWing.hull -= this.emp;
		if (xWing.hull > 0) {
			console.log(
				`Empire Pilot ${this.pilot}: I'll wipe you off the face of the Galaxy! Rebel Trash! R2:${xWing.hull} can't take anymore damage!`
			);
		} else {
			console.log(`Woohoooo! We blasted 'em!`);
		}
	}
	retreat() {
		console.log('WE WILL RETURN WITH THE MIGHT OF THE EMPIRE REBEL SCUM!');
	}
	death() {
		console.log(
			`Empire Pilot ${bowTieFighter.pilot} : GAAAAAAAAAAAAAAAAAAAAAHHHHH!----------disconnected-----------`
		);
	}
}

//=======================================================================REBEL STAR FIGHTER SUBCLASS

// this will be our ever resilient Rebel Squadron, I added features to make it scarier
class Rebel extends StarFighter {
	constructor(pilot, hull, accuracy, blasters, protonMissiles) {
		super(pilot, hull, accuracy, blasters);
		this.protonMissiles = protonMissiles;
	} //pew pew pew
	fireBlasters() {
		bowTieFighter.hull -= this.blasters;
		if (bowTieFighter.hull >= 0) {
			console.log(`R2: *Enemy's hull is down to : ${bowTieFighter.hull}*`);
		} else {
			console.log(bowTieFighter.death());
			console.log(`KABOOM! Woohoooo! Good Work R2!`);
		}
	}
	//this is a fire proton missiles method
	fireProtonMissiles() {
		bowTieFighter.hull -= this.protonMissiles;
		if (bowTieFighter.hull > 0) {
			console.log(`R2: *Enemy's hull is down to : ${bowTieFighter.hull}*`);
		} else {
			console.log(`Commander${this.pilot}: Woohoooo! We blasted 'em!`);
		}
	}
	retreat() {
		console.log(`Commander${this.pilot}: I think its time we skidaddle R2!`);
	}
	death() {
		console.log(
			`Commander${this.pilot}: Master Kenobi tell Padme I lo-*static noises* beep beep beeep ----------disconnected-----------`
		);
	}
}

//=======================================================================CAST OF PLAYERS AND ENEMIES

const bowTieFighter = new Empire('Darth Siddious', 6, 0.8, 4, 15);

const xWing = new Rebel('Anakin Planeswalker', 20, 0.7, 5, 8);

//=======================================================================REBELS TURN FUNCTION

playerTurn = () => {
	let playersChoice = prompt(
		`We've got # of bogies in the sky what should we do R2?!  Your choices are 'fire lasers', 'fire missiles', or 'retreat'`
	);

	while (
		playersChoice.toLowerCase() !== 'fire lasers' ||
		playersChoice.toLowerCase() !== 'fire missiles' ||
		playersChoice.toLowerCase() !== 'retreat'
	) {
		playersChoice = prompt(
			`Please enter a valid command: Your choices are 'fire lasers', 'fire missiles', or 'retreat'`
		);

		if (playersChoice.toLowerCase() === 'fire lasers') {
			console.log(playersChoice);
			console.log(xWing.fireBlasters());
		} else if (playersChoice.toLowerCase() === 'fire missiles') {
			console.log(playersChoice);
			console.log(xWing.fireProtonMissiles());
		} else if (playersChoice.toLowerCase() === 'retreat') {
			console.log(playersChoice);
			console.log(xWing.retreat());
		}
		break;
	}
};
//=======================================================================EMPIRE TURN FUNCTION

empireTurn = () => {
	console.log(bowTieFighter.fireBlasters());
};

//=========================================================== AND NOW WE SET THE TEXT/TURN/TERMINAL BASED COMBAT

dogFight = () => {
	console.log(`WARS-STAR : The Tatooine Guadian of the Skies`);
	xWing.pilot = prompt(
		'Thank you for volunteering to be a guardian of Tatooine young Commander! What may we call you?'
	);
	console.log(
		`Well we appreciate your service Commander ${xWing.pilot}, I apologize for the brief introductions but, we've received reports Empire troops extorting citizens entering our skies. Look! There's one now!`
	);

	while (bowTieFighter.hull > 0) {
		playerTurn();
		empireTurn();
	}
};

dogFight();
