    const myArr = [1, 2, 3, 4, 5];
    console.log(myArr[2]);

    const myStr = ['Abc', 'def'];
    console.log(myStr);     //prints entire array

    const newWayToDefine = new Array(10, 'twenty', 30.03, true);
    // Array in JS are resizable and can contain different type of elements

    // myArr.push(6);
    // myArr.push(8);
    // myArr.pop();
    

    // unshift also shifts the rest elements to right after adding an element to start.
    // myArr.unshift(0);   // Inserts new elements at the start of an array, and returns the new length of the array.
    // myArr.shift();      // removes the first element of the array.
    
    console.log(myArr.includes(9));     //returns boolean value
    console.log(myArr.indexOf(9));      // returns the index of that element else -1 if not found
    
    // Adds all the elements of an array into a string, separated by the specified separator string.
    const newArr = myArr.join();    
    // console.log(typeof newArr);        
    // console.log(newArr);

    // __________________ slice and splice 
    // Slice does not manipulate original array but splice will
    console.log("Org_Arr", myArr);
    
    const myn1 = myArr.slice(1, 3);     // excludes end index 
    console.log('slice does not manipulate the original array', myn1);
    
    const myn2 = myArr.splice(1, 3);  // includes end index 
    console.log('Original array after splice', myArr);
    console.log('splice manipulates the original array', myn2);




