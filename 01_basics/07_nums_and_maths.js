const score = 400       // JS automatically decides that the data type of this variable should be number

// But we can also specify EXPLICITLY 
const balance = new Number(100)     
// console.log(balance);

/**Number.toString(radix?: number | undefined): string
Returns a string representation of an object. */
// console.log(balance.toString())
// console.log(balance.toFixed(2));    // precision value upto 2 decimal points

const oth = 123.8999
// console.log(oth.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());     //returns comma separated values 
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);  //returns object Math
// console.log(Math.abs(-4));
// console.log(Math.round(4.45));  //returns 4 in case of 4.45 ans 5 in case of 4.54
// console.log(Math.ceil(4.54));   //Returns the smallest integer >= to its numeric argument.
// console.log(Math.floor(4.54));  //Returns the greatest integer <= to its numeric argument.
// console.log(Math.min(5, 4, 2, 3, 9));
// console.log(Math.max(5, 4, 2, 3, 9));

console.log(Math.random()); // Returns a pseudorandom number between 0 and 1.
console.log(Math.random() * 10 + 1);
console.log((Math.random() * 10) + 1);  // 1 se upar ke liyye +1

// ______________ FORMULA ____________________________ to get a random no between range
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);