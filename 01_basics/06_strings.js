const name = "pallavi"
const age = 22

// console.log(name + age + " Value");  // outdated 

console.log(`Hii My name is ${name} and I am ${age} years old.`);

const gameName = new String("Pallavi_Shukla_22_$%^")
console.log(typeof gameName);   //returns object

console.log(gameName.__proto__);
// console.log(gameName.length);        //access string methods with dot
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));
console.log(gameName[5]);

const newStr = gameName.substring(0, 4)
console.log(newStr);

const anotherStr = gameName.slice(-7, 2)    // when given - : reads from back side
console.log(anotherStr);

const newStr1 = "   pallavi   "
console.log(newStr1);
console.log(newStr1.trim());    
// Removes the leading and trailing white space and line terminator characters from a string.

const url = "https://pallavi.com/pallavi%20shukla"
console.log(url.replace('%20', '-'));
console.log(url.includes('al'));

console.log(gameName.split('_'));   // converts the string into array based on separator
