const str = "";
const arr = []; //array
const user = {
  name: "Abe", //string
  age: 30, //numbers
  isLoggedIn: true, //boolean
}; //object

const car = {
  interiorColor: "blue",
  hp: 4000,
  year: 1989,
  isElectric: false,
};
car.engine = "V12";
car.doors = "2 doors";

console.log(car);
console.log(car.interiorColor);

car.engine = "V20"; // setting a new property called engine. It will override the previous
console.log(car);

if (car.isElectric) {
  console.log("Yes the car is Electric");
} else {
  console.log("Nope you need gas!");
}
if (car.year <= 1960) {
  console.log("Hey thats a classic!");
} else if (car.year <= 2000) {
  console.log("Hey that car is getting old");
} else {
  console.log("Wow nice car");
}
const object = {
  salutation: "hi",
  count: 4,
};
for (let i = 0; i < obj.count; i++) {
  console.log(i);
}

const user1 = {
    name: 'Abe',
    age: 30,
    isLoggedIn: true,
    balance: 200
} 

console.log(typeof user1.balance);
user.balance *= 100
console.log(typeof user1.balance);
console.log(user);

const car = {
    color: 'blue',
    hp: 4000,
    year: 1989,
    isElectric: false,
    doors: '2',
}

car.engine = 'V20' // setting a new property called engine
// console.log(car.isElectric);
// console.log(car.color);
// console.log(car);

car.engine = 'V28' // updating the property engine
car.color = 'Hot Pink'
// console.log(car);

car.isElectric = true

if (car.isElectric){
    console.log('Yes the car is Electric');
} else {
    console.log('Nop you need gas!');
}

car.year = 2015

if (car.year <= 1960){
    console.log('Hey thats a classic!');
} else if (car.year <= 2000){
    console.log('Hey that car is getting old');
} else {
    console.log('Wow nice car!');
}

const obj = {
	salutation: 'hi',
	count:4
}

for (let i = 0; i < obj.count; i++) {
	console.log(i);
}


const house = {}
house.color = 'Red'
house.doors = 2
house.floors = 1

console.log(house);
console.log(house.alarm);

if (house.alarm){
    console.log('House is secured');
} else {
    console.log('You need an alarm system');
}

const dev = {
    programmingLanguages: ['javascript', 'python', 'html', 'css'],
    address: { 
        street: '123 Main Street',
        "zip code": '0845849',
        state: 'NY',
        city: 'Yonkers'
    }
}
console.log( dev.address.state );
dev.address.apt = '1A'
console.log(dev.address["zip code"]);

console.log(dev.programmingLanguages[dev.programmingLanguages.length -1]);
console.log(dev.programmingLanguages[3]);

const devCity = dev.address.city
console.log(devCity);
// dev.programmingLanguages.forEach((language) => console.log(language.toUpperCase()))

const teams = {
    1: 'Blue Team',
    2: 'Red Team',
    3: 'Purple Team'
}

const teamTwo = 3

console.log(teams[1]);