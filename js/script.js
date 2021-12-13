//This is the basis of my classes I will be building two subclasses the rebels and the empire based off of a fan favorite ---- WARS STAR ------ *queue the music* babababab deee deee deee do deedoo daaah dahh. I think I had to much fun making this.

class StarFighter {
	constructor(pilot, hull, accuracy, blasters) {
		this.pilot = pilot;
		this.hull = hull;
		this.accuracy = accuracy;
		this.blasters = blasters;
	}
}

//====================================CHECKERS=====================================================

const isAccurate = () => {
	let i = Math.random();
	if (i > 0.6 && i < 0.8) {
		console.log(`Aim is ${i} Direct Hit!`);
		return true;
	} else {
		console.log(`Aim is ${i} Shot Missed!`);
		return false;
	}
};

// plug into action methods

//==================================EMPIRE STAR FIGHTER SUBCLASS=====================================
// this will be the empire class style ships or out "Bow"-Tie Fighters XD
class Empire extends StarFighter {
	constructor(pilot, hull, accuracy, blasters) {
		super(pilot, hull, accuracy, blasters);
		this.hull = Math.floor(Math.random() * 4) + 3;
		this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
		this.blasters = Math.floor(Math.random() * 3) + 2;
		this.emp = Math.floor(Math.random() * (15 - 7 + 1) + 7);
	}
	fireBlasters() {
		console.log('Enemy has fired Blasters!');
    //this checks if our aim is accurate rather than hard coding a value
    //this calculates the damage step
    if(isAccurate() === true) {
      		xWing.hull -= this.blasters;
    // is logged if we missed
      if (xWing.hull > 0) {
        console.log(`Empire Pilot ${this.pilot}: Take that Rebel Scum!      
              R2-D2: *You've taken ${this.blasters} damage Commander ${xWing.pilot}, current hull strength is at ${xWing.hull}*!`);
      } else {
        console.log(`Die Rebel Scum!`);
        console.log(xWing.death);
      }
    } else {
      console.log(`Hah! They missed! R2-D2: *Current hull strength is : ${xWing.hull}*`)
    }
		
	}
	fireEmp() {
		console.log('Enemy has fired an Electro Magnetic Pulse!');

		xWing.hull -= this.emp;

		if (xWing.hull > 0) {
			console.log(
				`Empire Pilot ${this.pilot}: I'll wipe you off the face of the Galaxy, Rebel Trash!`
			);
			console.log(
				`R2-D2: *You've taken ${this.emp} damage Commander ${xWing.pilot}, current hull strength is at ${xWing.hull}*!`
			);
		} else {
			console.log(`Empire Pilot ${bowTieFighter.pilot} : Die Rebel Scum!`);
			console.log(xWing.death());
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

//====================================REBEL STAR FIGHTER SUBCLASS===================================

// this will be our ever resilient Rebel Squadron, I added features to make it scarier
class Rebel extends StarFighter {
	constructor(pilot, hull, accuracy, blasters) {
		super(pilot, hull, accuracy, blasters);
	} //pew pew pew
	fireBlasters() {
    //this checks if our aim is accurate rather than hard coding a value
    //this calculates the damage step
    if(isAccurate() === true) {
      	bowTieFighter.hull -= this.blasters;
    // is logged if we missed
      console.log(`R2-D2: *Enemy's hull strength is : ${bowTieFighter.hull}*`)
    } else {
      console.log(`Commander ${this.pilot}: Oh no we missed!`)
    }
		if (bowTieFighter.hull >= 0) {
			console.log(`R2-D2: *Enemy's hull strength is : ${bowTieFighter.hull}*`);
		} else {
			console.log(bowTieFighter.death());
			console.log(`KABOOM!`);
			console.log(`Commander ${this.pilot}: Woohoooo! Good Work R2-D2!`);
		}
	}
	//this is a fire proton missiles method
	fireProtonMissiles() {
		bowTieFighter.hull -= this.protonMissiles;
		if (bowTieFighter.hull > 0) {
			console.log(`R2-D2: *Enemy's hull is down to : ${bowTieFighter.hull}*`);
		} else {
      console.log(bowTieFighter.death());
			console.log(`KABOOM!`);
			console.log(`Commander ${this.pilot}: Woohoooo! We blasted 'em!`);
		}
	}
	retreat() {
		console.log(
			`Commander ${this.pilot}: I think its time we skidaddle R2-D2!`
		);
	}
	death() {
		console.log(
			`Commander ${this.pilot}: Master Kenobi tell Padme I lo-*static noises* beep beep beeep ----------disconnected-----------`
		);
	}
}

//================================CAST OF PLAYERS AND ENEMIES============================================
// the creation of the squadron loop

const xWing = new Rebel('Anakin Planeswalker', 20, 0.7, 5, 8);
// const squadron = [];
//this loop allows me to mass produce enemy ships to my desired quantity all with varying stats
// for (let i = 1; i <= 6; i++) {
	bowTieFighter = new Empire(`Storm Trooper`);
	// squadron.push(bowTieFighter);
// }

// //============================ENEMIES TURN FUNCTION===========================================
//this code randomly selects the enemies choice and executes a series of functions in the even

const enemiesTurn = () => {
  
	let choice = Math.floor(Math.random() * 3);

	switch (choice) {
		case 0:
			// console.log(`choice is ${choice}`);
			bowTieFighter.fireBlasters();
			break;
		case 1:
			// console.log(`choice is ${choice}`);
			bowTieFighter.fireEmp();
			break;
		case 2:
			// console.log(`choice is ${choice}`);
			bowTieFighter.retreat();
			// squadron.pop();
			break;
	}
};

//======================================PLAYER TURN FUNCTION============================================

const playerTurn = () => {
	let playersChoice = '';

	while (
		playersChoice.toLowerCase() !== 'fire blasters' ||
		playersChoice.toLowerCase() !== 'fire missiles' ||
		playersChoice.toLowerCase() !== 'retreat'
	) {
		playersChoice = prompt(
			`We've got # of bogies in the sky what should we do R2-D2?!
       Please enter a valid command: Your choices are 'fire blasters', 'fire missiles', or 'retreat'`
		);

		if (playersChoice.toLowerCase() === 'fire blasters') {
			console.log('Firing Blasters!');
			console.log(xWing.fireBlasters());
			break;
		} else if (playersChoice.toLowerCase() === 'fire missiles') {
			console.log('Firing Proton Missiles!');
			console.log(xWing.fireProtonMissiles());
			break;
		} else if (playersChoice.toLowerCase() === 'retreat') {
			console.log('Evasive Manuevers!');
			console.log(xWing.retreat());
			break;
		}
	}
};

//======================= AND NOW WE SET THE TEXT/TURN/TERMINAL BASED COMBAT===========================================

const dogFight = () => {
	console.log(`WARS-STAR : The Tatooine Guardian of the Skies`);
	xWing.pilot = prompt(
		'Thank you for volunteering to be a guardian of Tatooine young Commander! What may we call you?'
	);
	console.log(
		`Well we appreciate your service Commander ${xWing.pilot}, I apologize for the brief introductions but, we've received reports Empire troops extorting citizens entering our skies. Look! There's one now!`
	);
        //first while loop attempt
    // while(bowTieFighter.hull > 0 ) {

    //      playerTurn()

    //   if(enemiesTurn() === 2) {
    //       console.log('Rebels Win!')
    //       break;

    //  } else if (playerTurn() === 'retreat') {
    //       console.log('GAME OVER!')
    //       break;
    //   } else {

    //     enemiesTurn()

    //    }

  
    // }


    //second attempt
    // while(bowTieFighter.hull > 0 ) {

    //      playerTurn()

    //   if(bowTieFighter.hull > 0) {
    //     enemiesTurn()
    //    } else if (enemiesTurn() === 2) {
    //       console.log('Rebels Win!')
    //       break;
    //   } else {
    //     console.log('Rebels Win!')
    //     break;
    //    }

  
    // }

  while(xWing.hull > 0 && bowTieFighter.hull > 0) {
    playerTurn()
    enemiesTurn()
  }



    

}

dogFight()




