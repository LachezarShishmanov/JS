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

const subtractTwo = (num) =>{
    return num -2
}

const recreateMap = (array, fn) => {
    const newArray = [] 
    for (let i = 0; i < array.length; i++){
        const result = fn(array[i])
        newArray.push(result)
    }
    return newArray
}

// ADD CODE HERE

// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof recreateMap); // should log: 'function'
console.log(recreateMap([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]