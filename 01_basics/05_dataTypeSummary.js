//**************************** */ Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3; 
// BOTH are NUMBERS


const isLoggedIn = false;
const outsideTemp = null;
let userEmail;  //stores undefined if not initialised

const id = Symbol('123');
const anotherId = Symbol('123');
//Even the values passed are similar then also Symbol gurantees uniqueness
console.log(id === anotherId);  //returns false

const bigNumber = 3566737887783245677929n;   // JS uses bigInt to store numbers of such huge length
// n is added at end to represent bigint
console.log(typeof bigNumber);  //returns bigint

// JS is Dynamically-typed Language
//************************** */  Reference (Non-Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

//Objects are written under curly braces
//can also be stored in variables
let myObj = {
    name: "pallavi",
    age: 22
}
//Data-Type can be anything


//Functions in JS can be treated as VARIABLES
//They can be stored in variables
const myFunction = function() {
    console.log("Hello World");
}

//To know about the data-type 
console.log(typeof myFunction); // returns function ,, but it is object function
//--> typeof returns object in case of null