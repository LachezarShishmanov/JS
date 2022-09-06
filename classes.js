//So, a class is a factory that makes objects so you don't have to type 
//as much code. You just give the class the blueprint. 
//It makes sense, the class should have defaults (Cars have 4 wheels for
// example), we call this a constructor and it goes at the top of our class.
//The word "this" in the constructor:

//Think of the word "this" as "in this instance"
//So every time you create something "this.legs = 2" can be interpreted as
// "In this case, legs are going to be 2"

class Vehicle {
    constructor(vin, make, color){
       this.vin = vin
       this.make = make
       this.color = color || 'blue'
       this.isRunning = false
    }

    start(){
        this.isRunning = true
        console.log('Vehicle is running...')
    }

    stop(){
        this.isRunning = false
        console.log('Vehicle stopped...')
    }
    
}

const v1 = new Vehicle('xyz123', 'Honda', 'red')
const v2 = new Vehicle('xyz345', 'Ford')
// Vehicle.start() // method will not work here
// console.log(v1.start()); 
// console.log(v2.start());
// console.log(typeof v1);

v1.start()
v2.start()
v1.stop()

console.log(v1)
console.log(v2)
