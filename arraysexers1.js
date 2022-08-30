// CHALLENGE 
// Create a variable called fourthItem and assign it the value of the 
//fourth item in the horror array ('Ghostface'). 
//Then console.log fourthItem to see the output.


// const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];
// let fourthItem = 'Ghostface'
// console.log(horror[3])
// Write a console.log statement below to check your work!


//Challenge
//Use a built-in JavaScript method to add another show to the 
//netflixShows array. Then log your updated array to the console.

//const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];
//netflixShows.push('Chosen')
//console.log(netflixShows)


// ADD CODE HERE


// Write a console.log statement below to check your work!

// const arr1 = ['Jan', 'Feb', 'March', 'April']
// const arr2 = arr1

// arr1.unshift('Sep')
// const firstTwoMonths = arr2.slice(0, 2)

// firstTwoMonths.push('Dec')

// console.log(firstTwoMonths);

// console.log(arr1);
// console.log(arr2);

const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. 
// Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
// for (i=0; i < synonyms.length; i++){
//     greetings.push(synonyms[1]);
//     console.log('Have a ${synonyms[1]} day')
// }

// 2. 
// Loop through the greetings array, logging each greeting to 
// the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE

// for (i = 0; i < synonyms.length; i++){
//     greetings.push(synonyms[1]);
//     console.log(`Don't have a ${synonyms[1]} day`)   
// }

//You are given an array of five numbers called increaseByTwo. 
//Use a for loop to iterate through the array and increase each 
//number by two.




// ADD CODE HERE


// Uncomment the line below to check your work!
//console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7]

// const increaseByTwo = [1, 2, 3, 4, 5];
// for(let i =0; i < 5; i++) {
//     if (increaseByTwo[i]+=2){
//     }
// }
// console.log(increaseByTwo)

const latestShows = ['Caddyshack', 'Interstellar', 'Trading', 'Places']

latestShows.forEach((show) => { 
    console.log(show)
})

const numArr = [2, 345, 34, 12, 2334, 5, 67, 7, 45]
numArr.forEach((num) => {
    console.log(num*10)
})
