
// 3 STEPS TO REMEMBER HOW TO WRITE A FOR LOOP:
//1. Where do you want it to begin? i.e. "i=0"
//2. How far do you want it to go? i.e. "i >= 0"
//3. How much would you like it to increase/decrease each t



// Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions:

// For numbers divisible by 3, print "Fizz" instead of the number
// For numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz", 
// for numbers that are divisible by both 3 and 5.
// (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

//for (let i=1; i <=10; i+=2) {
//    console.log(`${i}`)
//}
// for (let i=2; i <=10; i+=2) {
//    console.log(`${i}`)


for ( let num = 1; num <= 100; num ++ ) {
  
    // check if the number is divisible by 3 or 5
    let checkForThree = num % 3;
    let checkForFive = num % 5;
    
    // if the number is divisible by both 3 and 5, then print FizzBuzz
    if ( (checkForThree == 0) && (checkForFive == 0) ) 
        console.log( "FizzBuzz");
    
    // if the number is divisible by 3, then print Fizz
    else if (checkForThree == 0)
      console.log( "Fizz");
    
    // if the number is divisible by 5, then print Buzz
    else if (checkForFive == 0)
      console.log( "Buzz");
    
    // otherwise just print the number
    else
      console.log( num )
}