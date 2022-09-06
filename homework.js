// CHALLENGE
// Create a variable called fourthItem and assign it the value of the
//fourth item in the horror array ('Ghostface').
//Then console.log fourthItem to see the output.

//const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];
//let fourthItem = 'Ghostface'
// Write a console.log statement below to check your work!
//console.log(horror[3])

//const increaseByTwo = [1, 2, 3, 4, 5];
//for(let i =0; i < 5; i++) {
//if (increaseByTwo[i]+=2){

//}
//}
//console.log(increaseByTwo)

//Challenge
//Iterate through the array and multiply a number by 10 if it is
//greater than or equal to 5.

const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];

for (let i = 0; i < timesTenIfOverFive.length; i++) {
  if (timesTenIfOverFive[i] >= 5) {
    timesTenIfOverFive[i] = timesTenIfOverFive[i] * 10;
  }
}

console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]

// const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];

// for (let i = 0; i < timesTenIfOverFive.length; i++) {
//   if (i >= 5) {
//     console.log(timesTenIfOverFive[i] * 10);
//   } else {
//     console.log(timesTenIfOverFive[i]);
//   }
// }

// console.log(timesTenIfOverFive);


const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];


// 1.
// Loop through the synonyms array.
// Each time, push a string into the greetings array.
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for (i=0; i < synonyms.length; i++){
greetings.push(synonyms[1]);
console.log('Have a ${synonyms[1]} day')
}

// 2.
// Loop through the greetings array, logging each greeting to
// the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE

for (i = 0; i < synonyms.length; i++){
greetings.push(synonyms[1]);
console.log(`Don't have a ${synonyms[1]} day`)
}