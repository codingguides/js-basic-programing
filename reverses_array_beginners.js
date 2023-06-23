///////////// Create a function that reverses an array ////////////

function reverseArray(array) {                   // Create a function and take a parameter as array in it.

    let reversed_array = [];                      // Take a variable as type of blank array.

    for(let i = array.length-1; i >= 0; i--) {   // Create a for loop and initialize i = array.length - 1 and
                                                // continue upto greater than 0 and eual to 0 and decrement as i-1.
        reversed_array.push(array[i]);           // The every value of i comes out from every iteration is adding
                                                // to the blank reversed_array using push() method.
    }
    console.log(reversed_array);                // Print the final array.
}
reverseArray([1, 2, 3, 4, 5]);           // Call the function and in that pass an array of some numbers as argument.