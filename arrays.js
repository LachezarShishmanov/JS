//Primitive types 'string', booleans, numbers
// const num1 = 20
// const num2 = 20

// console.log(num1 + 30);
// console.log(num2);

//new example

// let num3 = 20
// const num4 = num3

// num3 = 100

// console.log(num3); //100
// console.log(num2); // 20

//Array declaration

// const colors = ['red', 'blue', 'green']

// const users = ['abc', 'alex', 'anna']

// const movies = ['Bad boys', 'Transformers', 'Casino']

// console.log( movies[0] );
// console.log( movies.length)

// const top10 = []

//arrays 
// Primitive Types 'string', booleans, numbers
// let num1 = 20
// const num2 = num1

// num1 = 100

// console.log(num1); //100
// console.log(num2); // 20

// Reference Types

// const arr1 = ['Jan', 'Feb', 'March', 'April']
// const arr2 = arr1

// arr1.unshift('Sep')
// const firstTwoMonths = arr2.slice(0, 2)

// firstTwoMonths.push('Dec')

// console.log(firstTwoMonths);

// console.log(arr1);
// console.log(arr2);


// ===== Looping over Arrays

// const newMovies = ['Bad boys', 'Transformers', 'Casino', 'Interstellar', 'Scarface']


// const numArr = [2, 345, 34, 5, 2334, 12, 67, 7, 45]
// const oddEvenNumbers = []

// for (let i = 0; i < numArr; i++) {
//     // loop over the array
//     if (numArr[i] % 2 === 1){
//         //add all the odd numbers to the beginning of oddEvenNumbers
//         oddEvenNumbers.unshift(numArr[i])
//     } else if (numArr[i] % 2 === 0){
//         //add all the even numbers to the end of oddEvenNumbers
//         oddEvenNumbers.push(numArr[i])
//     }
//     console.log((oddEvenNumbers));
// }
// console.log(oddEvenNumbers);


// const evenNumbers = []
// const oddNumbers = []
// for (let i = 0; i < numArr.length; i++){
//     if (numArr[i] % 2 === 0){
//         evenNumbers.push(numArr[i])
//     } else {
//         oddNumbers.push(numArr[i])
//     }
// }

// console.log(evenNumbers);
// console.log(oddNumbers);

// const numArr = [2, 345, 34, 12, 2334, 5, 67, 7, 45]
// const oddEvenNumbers = []

// for (let i = 0; i < numArr.length; i++){
//     // loop over the array
//     if (numArr[i] % 2 === 1){
//         // add all the odd numbers to the beginning of oddEvenNumbers
//         oddEvenNumbers.unshift(numArr[i])
//     } else if (numArr[i] % 2 === 0){
//         // add all the even numbers to the end of oddEvenNumbers
//         oddEvenNumbers.push(numArr[i])
//     }
//     console.log(`Iteration ${i}:`, oddEvenNumbers);
// }

// console.log(oddEvenNumbers);

//new new new
const numArr = [2, 345, 34, 12, 2334, 5, 67, 7, 45]
const total = []

const multiplyByTwo = (num) => {
    return num * 2
}

for (let i = 0; i < numArr.length; i++){
    const result =  multiplyByTwo(numArr[i])
    total.push(result)
}

console.log(total);

