let count = 0;
let isNotDoneCounting = true;

while (isNotDoneCounting || count < 10) {
  console.log(`The count is: ${count}`);

  if (count === 5) {
    isNotDoneCounting = false;
  }
  count++;
}


//Video game example

let lives = 3
let time = 10

while(lives > 0 && time > 0){
    console.log('Playing the game....')
    console.log(`Time left ${time} and Lives left: ${lives}`);

    if (time % 2 === 0){
        console.log('You Lose one life!');
        lives--
    } 
    
    if (lives === 0) {
        console.log('Game Over');
    }

    time--
}

console.log('Go to Main Menu!');

// Each character of the message. Hello World! Printed vertically 

let message = "Hello World!"

for (let i = 0; i < message.length; i++){
    console.log(message[i])
}

//the same as previous but shorter and more readable

for (value of message){
    console.log(value);
}

//CONVERSION 
// parseInt("123qwe")
// returns 123

// Number("123qwe")
// returns NaN


// parseInt(); // NaN
// parseInt(null); // NaN
// parseInt(true); // NaN
// parseInt(''); // NaN
// parseInt('32px'); // 32
// parseInt('5e1'); // 5

// Number(); // 0
// Number(null); // 0
// Number(true); // 1
// Number(''); // 0
// Number('32px'); // NaN
// Number('5e1'); // 50

// ===== Different values to a string

// value = string(num1) // number
// value = string(2+2)  // number operation
// value = string(true) // boolean
// value = string([1,2,3,4,5,]) //array

// console.log(value);


// ==== String to a number
// value = number('1242')
// value = parseInt('834679')
// value = parseFloat('8364.863')

// value = parseInt('5e1')

// console.log(value);

// Do While loop

let i=0
do {
  console.log('Do while')
} while (i > 0)