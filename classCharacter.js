// ================== CRUD =============
//The 4 most used parts of any program and how the user interacts with it
//is our CRUD operations: Create, Read, Update, Delete.
//SetHair is the "Update" part of that.


//Some tips:
//-Remember constructors (Defaults) first
//-Remember "This" is in reference to that specific moment you are using it "In the instance of..."
//-You can input functions into classes and those become what we call "methods"




class Character {
    constructor (name, age, eyes, hair, loveCats = false, loveDogs) {
        this.legs = 2
        this.arms = 2
        this.eyes = eyes
        this.hair = hair 
        this.name = name
        this.age = age
        this.loveCats = loveCats 
        this.loveDogs = loveDogs || false
      }

    greet(otherCharacter){
        console.log(`Hello ${otherCharacter}!`);
    }
    smite(){
        console.log('I smite thee you vile person');
    }
    setHair(hairColor){
        this.hair = hairColor
    }
}

const me = new Character('Abe', 30, 'brown', 'black', true)
const you = new Character('Tim', 20, 'blue', 'red', false, true)

me.setHair('Yellow')

console.log(me);
console.log(you);

console.log(typeof me);
console.log(typeof you);

me.greet('Bob')
you.greet('Bob')
you.smite()

function createTenCharacters(){
    const arrOfCharacters = []
    for(let i = 0; i <= 10; i++){
        arrOfCharacters.push(new Character())
    }
    return arrOfCharacters
}

const chars = createTenCharacters()
console.log(chars);