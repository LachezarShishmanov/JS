
// === Use an array inside an object
const adventurer = {
	name: "Timothy",
	hitPoints: 10,
	belongings: ["sword", "potion", "Tums"]
    
}
//   console.log (adventurer.belongings)
// console.log (adventurer.belongings[0])

for (let i=0; i < adventurer.belongings.length; i++) {
	//console.log(adventurer.belongings[i]);
}

// === Use an object within an object
const adventurer1 = {
	name: "Timothy",
	hitPoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
		name: "Velma",
		type: "Bat"
	}
}
//console.log(adventurer1.companion)
//console.log(adventurer1.companion.name)
//console.log(adventurer1.companion.type)


// ==== Use an object within an object within an object
// const adventurer2 = {
// 	name: Timothy,
// 	hitPoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
// 		companion: {
// 			name: "Tim",
// 			type: "Parasite"
// 		}  
// 	}
// }





// ====== Use an array of objects

// A common pattern you will start to see everywhere (especially in Unit 2 and onwards) is an array of objects.

// An array of objects can look like this:

const movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ];
//These objects have no names, they are just anonymous objects packed into an array.

//You could reference them with indexes as usual:

console.log(movies[0]);
//You could reference the properties by first asking for the index, then the property:

console.log(movies[0].title);
//You could loop over the array and just print all of the titles:

for (let i=0; i < movies.length; i++) {
	console.log(movies[i].title);
}




//  =====Combine objects, arrays, and functions

// You can create a property for an object that is an array

const foo = {
    someArray:[1,2,3]
};
foo.someArray[0]; //1
// You can create a property for an object that is an object

const foo1 = {
    someObject: {
        someProperty: 'oh hai!'
    }
};
foo1.someObject.someProperty; //oh hai!
//You can create a property for an object that is a function (method)

const foo2 = {
    someMethod:()=>{
        console.log('oh hai');
    }
};

foo2.someMethod();//logs 'oh hai!'
//You can store an object in an array

const foo3 = [{someProperty:'weee'}, 2, 3];

console.log(foo3[0].someProperty);
// You can store an array in an array

const foo4 = [
    ["0,0", "0,1", "0,2"],
    ["1,0", "1,1", "1,2"],
    ["2,0", "2,1", "2,2"]
];

foo4[1][2]; //1,2
//You can store a function in an array

const foo5 = [
    1,
    "hi",
    ()=>{
        console.log('fun');
    }
];

foo5[2]();