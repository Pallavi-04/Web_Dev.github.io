
console.log("2" > 1);   //returns true
console.log("02" > 1); //returns false

// console.log(32 > "32"); //returns false
// console.log(100 > "32");    //returns true
// console.log(23 > "100");    //returns false
// console.log(23 == "100");   //returns false

// such comparisons  ***NOT RECCOMMENDED
console.log(null > 0);  //returns false
console.log(null == 0); //returns false
console.log(null >= 0); //returns true
console.log(null < 0);  //returns false

/** The reason is that
 *  an equality check == and 
 * comparisons > < >= <= work differently.
 * 
 * Comparisons convert null to a number, treating it as 0.
 * That's why (null >= 0) is true and (null > 0) is false */


// such comparisons ****NOT RECCOMMENDED
// undefined returns false for every case
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);

// __________ STRICT EQUALITY CHECK === 
//Checks not only values but also data type 
console.log("2" == 2); //returns true as conversion made by ==
console.log("2" === 2); //returns false as data type is different
