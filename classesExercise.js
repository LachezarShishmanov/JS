//1. Think of three properties all people share, set them with the constructor
//2. Think of three methods all people share
//3. Create a PostalWorker class that inherits from person, add some methods
//4. Create a Chef class that inherits from person, add some methods
//5. Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

class person {
    constructor(language, hometown, favFood){
        this.language = language
        this.hometown = hometown
        this.favFood = favFood
    }
}
class PostalWorker extends person{
    constructor(language, hometown, favFood){
        super(language, hometown, favFood)
//         this.favFood = pizza
//         this.language = ['English', 'Spanish']
//         console.log(`${favFood} is my favorite food!}`);
     }
}
// chef(){
//     this.hometown = ['Chicago', 'Atlanta']
//     this.favFood = ['steak', 'asparagus']
//     console.log(`The chef\`s hometown are ${}`);
// }
let postMan = new PostalWorker('English', 'DC', 'Spaghetti')
console.log(postMan.language);
let postMan2 = new PostalWorker('Spanish', 'New York', 'French Fries')
console.log(postMan2);









// class BankAccount {
//     constructor(ownerName, ballance, accountNumber){
//         this.ownerName = ownerName
//         this.ballance = ballance
//         this.accountNumber = accountNumber
//     }

//     start (){
//         this.deposit = true
//         console.log('Bank account deposit')
//     }

//     stop(){
//         this.withdraw = false
//         console.log('Bank account withdraw')
//     }
// }

// const v1 = new Vehicle('xyz123', 'Honda', 'red')
