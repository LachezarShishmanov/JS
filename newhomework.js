const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

for (let i = 0; i < synonyms.length; i++) {
    let newString = "Have a "+ synonyms[i] + " day!";
    greetings.push(newString);
    console.log(`Have a ${synonyms[i]} day`)
  }



for (i = 0; i < greetings.length; i++){
    synonyms.push(greetings[i]);
    console.log(`${greetings[i]}`);

}

const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];

for (let i = 0; i < timesTenIfOverFive.length; i++) {
  if (timesTenIfOverFive[i] >= 5) {
    timesTenIfOverFive[i] = timesTenIfOverFive[i] * 10;
  }
}

console.log(timesTenIfOverFive);