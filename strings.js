const firstName = 'Lachezar'
const lastName = 'Shishmanov'

// string concatenation 
console.log ('Welcome ' + firstName  + ' ' + lastName + ' to our page! ')


//use back ticks no single quotes before Welcome and at the end of the page - under escape
console.log (`Welcome ${firstName} ${lastName} to our amazing page!`)

const num1 = 10
const num2 = 20
console.log(`The total is: $${num1 + num2}`)

//Appending to a variable
let userName = 'dev'
userName += '03'
console.log (userName)

//How many letters is Hello world
console.log ('Hello world' .length)

//Zero shows the first letter. Always one number less. Computer starts counting from 0
console.log ('Hello world' .charAt(0))

console.log (userName[2])

//All in uppercase 
console.log ('Hello world' .toUpperCase() )