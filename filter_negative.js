////////////// Create a function that filters out negative numbers ///////////

function filterNegative(array){                // Create a function and take a parameter as array in it.

    let result = [];                           // Take a variable as type of blank array.

    for(let i = 0; i < array.length; i++) {  // Create a for loop and initialize i=0 in it and continue upto
                                             // less than array length and increment as i+1.
        if(array[i] < 0) {                   // If every value of i comes out from every iteration is less than 0,
            result.push(array[i]);           // Then that particular value is adding to the blank result array
        }                                    // using push() method.
    }
    console.log(result);                 // Print the final result array.
}
filterNegative([1, -2, 3, -4, 5, -6]);  // Call the function and in that pass an array of some numbers as argument.