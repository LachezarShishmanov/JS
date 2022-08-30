//Exercise 1
function computeArea(width, height){
    const area=(width * height)
    return `The area of a rectangular with a width of ${width} and a ${height} of ${height} is ${width * height} square units.`

}
const rectangular1 = computeArea(4,5)
 console.log(rectangular1)

 //Exercise 2
function planetHasWater(planet) {
    planet=planet.toLowerCase
   if (planet === 'Earth' || planet=== 'Mars'){
    return true;
} else{
    return false;
}
}
const planetEarth = planetHasWater('Earth')
console.log(planetEarth)

//Exercise 3
function addTwo(num){
  return num + 2

}
console.log( addTwo (8));

///Exercise 4
function sayHello(name){
    return `Hi, ${name}`
}
console.log( sayHello('Anna'));

//Challenge
// reverse string
// apple
function reverseString(str){
    let reverseStr = '' // pace holder for the reversed string

    // loop for as long as we have characters in the string
    for(let i = str.length -1; i >= 0; i--){
        reverseStr += str[i] // concat the current character to the variable
    }

    return reverseStr
}

console.log( reverseString('banana'));

// ==== capitalize string
// bicycle
//traffick
const capitalizeString = str => str[0].toUpperCase() + str.substring(1)

function capitalizeStr(word){
    return word[0].toUpperCase() + word.substring(1)
}

console.log(capitalizeString('bicycle'))
console.log(capitalizeStr('traffick'))



