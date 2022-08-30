
// 3 STEPS TO REMEMBER HOW TO WRITE A FOR LOOP:
//1. Where do you want it to begin? i.e. "i=0"
//2. How far do you want it to go? i.e. "i >= 0"
//3. How much would you like it to increase/decrease each time? i.e. "i++"

// initialize, condition, incrementor
for(let i = 0; i < 10; i += 3) {
    console.log(`i is ${i}`);
}

for(let i = 10; i >= 0; i--) {
    console.log(`i is ${i}`);
}


//Example

let user = `Tom` //Global variable because it outside of the curly bracket

if (user) {   //local variable - inside the curly bracket

   let message = 'welcome $(user)' 
   console.log(message.toUpperCase())
}  

//console.log(message)
//for (initializing, condition, incrementor)

let total = 0 //Global variable

for (let i=0; i < 10; i+=3) {
    console.log(i); 
    total += i
    console.log(`the total is: ${total}`)
}

//for(let i=10; i>=0; i--){
// console.log(`i is ${i]`);
//}

const message = 'Hello World!!!'
console.log(message.length);
for (let i = 0; i < message.length; i ++){
     console.log(message[i])
}


//new example - going backwards 

const message1 = 'Hello World'
console.log(message.length);

for (let i = 0; i < message.length; i++){
    console.log(message[i])
}

for (let i = message.length -1; i >= 0; i--){
    console.log(message[i])
}

console.log(message[message.length -1])

// new new new new

for (let i=0; i <= 10; i++){
    console.log(i);
    if (i % 2 ===0){
        console.log(`${i} is even`)
    }
     else{
        console.log(`${i} is odd`)
     }
}

//another example

for(let i = 3; i <= 10; i++){
    
    if(i === 5){
        console.log('before continue');
        continue
        console.log('after cont');
    } else if (i === 5){
        break
    }
    
    // console.log(`${i} * 2 = ${i * 2}`);
    console.log(`${i}`);
}

// new example

const word = 'kayak'
let reversed = ''

// [4] o
// [3] l
// [2] l
// [1] e
// [0] H

for (let i = word.length -1; i >= 0; i--) {
    reversed += word[i]
    console.log(reversed)
}

console.log(reversed);