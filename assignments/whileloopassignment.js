//A while loop is an alternative iteration statement.
//JavaScript will repeatedly process the code block until
//the while loop's conditional expression evaluates to false.
//**Be careful to avoid an infinite loop!**
//To stop it press "ctr + c".

//Challenge
//Use a while loop to increment count by 2 on each repetition of the block of code. Run the code block of your while loop until count is 8.

//let count = 2;
// ADD CODE HERE

// Uncomment these to check your work!
// console.log(count);

let count = 2;
while (count < 9) {
  console.log(count);
  count += 2;
}

//Initialize a variable addThis to 0 and a variable sum to 0.
//Use a while loop to repeat a code block as long as addThis
//is less than 10. In the code block, add the value
//of addThis to sum, then increment addThis by 1.
//After the while loop runs, the value of sum should be
//the sum of the numbers 0 through 9.

// ADD CODE HERE

// Uncomment the line below to check your work!
// console.log(sum);

let addThis = 0;
let sum = 0;

while (addThis < 10) {
  sum += addThis;
  addThis++;
}
console.log(sum);
