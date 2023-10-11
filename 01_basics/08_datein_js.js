// JavaScript Date objects represent a single moment in time
// in a platform-independent format.
// Date objects encapsulate an integral number that represents milliseconds
// since the midnight at the beginning of January 1, 1970, UTC (the epoch).

let myDate = new Date() //declaring a date object
// console.log(myDate);
// console.log(myDate.toUTCString()); 

/** toString() - Wed Oct 11 2023 12:22:19 GMT+0000 (Coordinated Universal Time) 
 *      Returns a string representation of a date.
 * toUTCString() - Wed, 11 Oct 2023 12:24:07 GMT 
 *      Returns a date converted to a string using Universal Coordinated Time (UTC).
 * toDateString() - Wed Oct 11 2023
 *      Returns a date as a string value. 
 * toISOString() - 2023-10-11T12:17:34.928Z
 *      Returns a date as a string value in ISO format. 
 * toLocaleDateString() - 10/11/2023 
 *      Converts a date to a string by using the current or specified locale 
 * toLocaleString() - 10/11/2023, 12:20:17 PM  
 *      Converts a date and time to a string by using the current or specified locale.
*/

let myCreatedDate = new Date(2000, 10, 4, 21, 27);
// console.log(myCreatedDate.toLocaleString('en-IN'));
// let anotherDate = new Date("2023-10-11");    // YYYY-MM-DD
let anotherDate = new Date("11-10-2023");       // MM-DD-YYYY
// console.log(anotherDate.toDateString());

let myTimeStamp = Date.now()    // 
// now(): number     Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).

// To compare between these dates its easy to compare these milliseconds 
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());   
// getTime(): number     Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.


//*********** To Convert the given time (in ms) to seconds 
// console.log(Math.floor(Date.now() / 1000)); //Divide date.now (in ms) by 1000 and round off the value


let newDate = new Date()
console.log(newDate.getMonth() + 1);  // as starts with 0 - Jan , 1-feb to 11-dec
console.log(newDate.getDay());
// getDate() : number Gets the day-of-the-month, using local time.
// getDay() : number Gets the day of the week, using local time
// getMonth(): number Gets the month, using local time.
// getFullYear() : number Gets the year, using local time.
// getHours() : number Gets the hours in a date, using local time.
// getTime() : number Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
// getTimezoneOffset(): number Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).
// getUTCDate(): number Gets the day-of-the-month, using Universal Coordinated Time (UTC).


// +++++++++++++ we can even get customized date with th emthode toLocaleString( params ) by giving parameters
console.log(newDate.toLocaleString( 'default', {
    weekday : 'long',
    hour: 'numeric'
}));