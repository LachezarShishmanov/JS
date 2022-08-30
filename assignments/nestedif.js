let isUserLoggedIn = false

// verify password
//if passwords matched
isUserLoggedIn = true

if (isUserLoggedIn) {
    console.log('Welcome')
} else {
    console.log('Please log in!');
}


let num = 99

if (num >= 0){
    console.log('Positive Number');

    if (num > 100){
        console.log(num);
        console.log('Number is greater then 100');
    } else {
        console.log('Number is NOT greater then 100');
    }
    
} else {
    console.log('Negative Number');
}

//Practice
 
let Grade = 99
if (Grade >= 90 && Grade < 100) {
    console.log ("The grade is A");
}
   
if (Grade >= 80 && Grade < 90) {
    console.log ("The grade is B");
  
}  
    
if (Grade >= 70 && Grade < 80)  {
    console.log ("The grade is C");
}

    
if (Grade >= 55 && Grade < 70) {
    console.log ("The grade is C");
} 


if (Grade < 55) {
    console.log ("The grade is F")
}
 

//Practice

let Grade1 = 79

if (Grade1 >= 90) {
    console.log("A!");
} else if (Grade1 >= 80 && Grade1 <= 89){
    console.log("B!");
} else if (Grade1 >= 70 && Grade1 <= 79){
    console.log("C!");
} else if (Grade1 >= 55 && Grade1 <= 69){
    console.log("D!");
}


// Practice. Remove the equal sign on the else if so it can works with decimal numbers 79.89

let Grade2 = 79.89

if (Grade1 >= 90) {
    console.log("A!");
} else if (Grade2 >= 80 && Grade1 < 90){
    console.log("B!");
} else if (Grade2 >= 70 && Grade1 < 80){
    console.log("C!");
} else if (Grade2 >= 55 && Grade1 < 70)
    console.log("D!");

    
    //Example

    let grade3 = 84.4
    if (grade3.toFixed(2) >= 90){
        console.log('A');
    }
    else if (grade3.toFixed(2) >= 80){
        if(grade3.toFixed(2) <= 89){
            console.log('B');
        }
    }
    else if (grade3.toFixed(2) >= 70){
        if(grade3.toFixed(2) <= 79){
            console.log('C');
        }
    }
    else if (grade3.toFixed(2) >= 55){
        if (grade3.toFixed(2) <= 69){
            console.log('D');
        }
    } 
    else {
        console.log('F');
    }

    //New example

    let age =  Math.floor( Math.random() * 30)
    console.log(age)
    
    if (age >= 18 && age < 21){
        console.log('older than 18');
    } else if (age < 18){
        console.log('younger than 18');
    } else if (age >= 21){
        console.log('adult');
    }

    // Ternary Op

const userInput = 'user83'

const dbUserName = 'user83'

const loggedInUser = userInput === dbUserName ? `Hello ${dbUserName}` : `Please check your username`

console.log(loggedInUser);
