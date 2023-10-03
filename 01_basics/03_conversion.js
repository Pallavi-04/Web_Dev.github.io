/*
//Number Data Types
let score = 33
console.log(typeof score)
//Conversion of a Number to String 
let NumberToString = String(score)
console.log(NumberToString)
console.log(typeof NumberToString)
*/

// let score = "33"
// let score = "33abs"
// let score = null;
let score = undefined;
let someStr = Number(score)
//console.log(someStr)    //returns 33 for "33" ; NaN for "33abs" ; 0 for null & NaN for undefined
//console.log(typeof someStr) // conversion done : returns number

let someBoolean = true
let BooleanInNumber = Number(someBoolean) 
//console.log(BooleanInNumber)    //returns 1 for true and 0 for false
let BooleanToString = String(someBoolean)
//console.log(BooleanToString)
//console.log(typeof BooleanToString) //conversion done


// ___________ NOTES 
/**
 *  "33" => 33
 *  "33abc" => NaN  but returns type as number
 *  true => 1; false => 0
 */

// let isLoggedIn = 1;
// let isLoggedIn = 11;
let isLoggedIn = "";
// let isLoggedIn = "pallavi";
// let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);     // returns true for 1 or any other value ; returns false for 0 & ""
console.log(typeof booleanIsLoggedIn);


// ***************************************   OPERATIONS   *****************************************************
// console.log("1" + 2);   //returns 12 as string first so converted to string
// console.log(1 + "2");   //returns 12
// console.log("1" + 2 + 2);   //returns 122
// console.log(1 + 2 + "2");   //returns 32 :: (1+2) + "2" => concatenate 

// ************ WE SHOULD AVOID this Practice of writing MESSY code
console.log(3 + 4 * 5 % 3);
console.log(+true); // due to + , conversion to integer
// console.log(true+); //Not allowed , THROWS ERROR
console.log(+"");   // returns 0 :: "" in boolean => 0 & due to + conversion done

let num1, num2, num3
num1 = num2 = num3 = 6 + 2  //** Not reccommended */