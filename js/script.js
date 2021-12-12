class StarFighter { //This is the basis of my classes I will be building two subclasses the rebels and the empire based off of a fan favorite ---- WARS STAR ------ *queue the music* babababab deee deee deee do deedoo daaah dahh
    constructor(pilot, hull, accuracy, blasters) {
       this.pilot = pilot
       this.hull = hull
       this.accuracy = accuracy 
       this.blasters = blasters
    }
}
// this will be the empire class style ships or out "Bow"-Tie Fighters XD
class Empire extends StarFighter {
    constructor(pilot, hull, accuracy, blasters, emp) {
        super(pilot, hull, accuracy, blasters,)
        this.emp = emp
    }
    fireBlasters() {
        
        
    }
}


// this will be our ever resilient Rebel Squadron, I added features to make it scarier 
class Rebel extends StarFighter {
    constructor(pilot, hull, accuracy, blasters, protonMissiles) {
        super(pilot, hull, accuracy, blasters)
        this.protonMissiles = protonMissiles
    } //pew pew pew 
    fireBlasters() {
        if(bowTieFighter.hull >= 0) {
            console.log(`R2: *Enemy's hull is down to : ${bowTieFighter.hull -= this.blasters}*`)
        } else {
            console.log(`Woohoooo! Good Work R2!`)
        }
    }
    //this is a fire proton missiles method
    fireProtonMissiles() {
        
        if(bowTieFighter.hull > 0) {
            console.log(`Enemy's hull is down to : ${bowTieFighter.hull -= this.protonMissiles}`)
        } else {
            console.log(`Woohoooo! We blasted 'em!`)
        }
    }
    retreat() {
        console.log('I think its time we skidaddle R2!')
    }
    death() {
        console.log('Master Kenobi tell Padme I lo-*static noises* beep beep beeep ----------disconnected-----------')
    }
}
const bowTieFighter = new Empire('Darth Siddious', 6, .8, 4, 15)

const xWing = new Rebel('Anakin Planeswalker', 20, .7, 5, 8)


xWing.fireBlasters()




