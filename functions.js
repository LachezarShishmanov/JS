// function; thE name of the function - sayHello

//function  sayHello(){
// console.log('Hello...')
//}
// To run the function we need the parenthesis 
//sayHello()



//ES5
//function multiplication(x, y){
//   console.log(x*y)
//}

//multiplication(2,4)
//multiplication(50, 125609)

//ES6
//let division = (x, y) => x/y

//console.log(division(42,7))

//ES6
//let division = (x, y) =>{
//    console.log(x/y);
//    console.log("Tom is a cool guy")
//}

//division(42,7)

//addThreeNum(136, 2, 45)
// let addThreeNum = (var1, var2, var3) =>{
//     console.log((var1+var2+var3)/3)

// }
// addThreeNum (3,57,64)

//Parameters are what we started to work with. 
//Argument is what we plug in???

// const greeting = function(){
//     console.log("Hello World!");
// }

// greeting() 

// function execution
function multiplyByTen(input) {  //function definition 
      return input * 10
}
const result = multiplyByTen(2)  //2 is the argument
console.log(result)