// Challenge MAP ARRAY

//Create a function subtractTwo that accepts a number and returns 
//that number minus 2.

//Then create a function map that takes two inputs -

//1. an array of numbers (a list of numbers)
//2. a 'callback' function - this function is applied to each element 
    //of the array (inside of the function 'map')

//Have your map function returns a new array filled with numbers that 
//are the result of using the 'callback' function on each element of 
//the input array. Please do not use the native map or forEach method.

// function subtractTwo (num) {
//  return (num -= 2);
// }
// function map(array, subtractTwo){
//     const result = [];
//     for (let i = 0; i< array.length; i++){
//         result.push(subtractTwo(array[1]));
//     }
//     return result;
// }
// console.log(map([3,4,5], subtractTwo))



// Abraham version

// const subtractTwo = (num) =>{
//     return num -2
// }

// const recreateMap = (array, callbackFunction) =>{
//     const newArray = []
//     for (let i =0; i < array.length; i++){
//       const result = callbackFunction(array[i])
//       newArray.push(result)
//   }
//   return newArray
// }

// console.log(typeof subtractTwo);
// console.log(typeof recreateMap);
// console.log(recreateMap([3,4,5], subtractTwo));


//Abraham version version 1

// const subtractTwo = (num) =>{
//     return num -2
// }

// const recreateMap = (array, fn) => {
//     const newArray = [] 
//     for (let i = 0; i < array.length; i++){
//         const result = fn(array[i])
//         newArray.push(result)
//     }
//     return newArray
// }

// ADD CODE HERE

// Uncomment these to check your work!
//console.log(typeof subtractTwo); // should log: 'function'
//console.log(typeof recreateMap); // should log: 'function'
//console.log(recreateMap([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]     


// FOREACH CHALLENGE
// Snipped - HELP for the challenge

// function clean(item) {
//     console.log(`I just cleaned a ${item}`)
// }
  
// const nails = ["rusty nail", "rusty nail", "bent nail", "clean nail"]
  
//   for (let i = 0; i < nails.length; i++) {
//     clean(nails[i])
//   }

//const recreateForEach = (array, callback) => {
    // loop over the array
    // call the callback on each of the element inside the array
//}

// let alphabet = '';
// const letter = ['a', 'b', 'c', 'd'];

// recreateFoeEach(letter, function(char) {
//     alphabet += char;
// });

// console.log(alphabet); //prints 'abcd'


//Challenge

// Part 1
//Create a function recreateForEach which takes an 
//array and a callback, and runs the callback on 
//each element of the array. recreateForEach does 
//not return anything. Please do not use the native 
//forEach or map method.

//Part 2
//Now let's rebuild recreateMap from the previous 
//challenge. This time instead of using a for loop, 
//you're going to use the recreateForEach we just created.

// Uncomment these to check your work!
// console.log(typeof recreateForEach); // should log: 'function'
// recreateForEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
// console.log(typeof recreateMap); // should log: 'function'
// console.log(recreateMap([3,4,5], n => n - 2)); // should log: [1, 2, 3]

//const recreateForEach = (array, callback) => {
    // const recreateForEach = (array, callback) => {
    //     for (let i = 0; i < array.length; i++)
    //         callback(array[i]);
        // loop over the array
    // call the callback on each of the element inside the array
//}


// let alphabet = '';
// const letter = ['a', 'b', 'c', 'd'];
//  recreateFoeEach(letter, function(char) {
//     alphabet += char;
// });
// console.log(alphabet);
// console.log(typeof recreateForEach);
// recreateForEach(['a', 'b', 'c'], i=> console.log(i));    


