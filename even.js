///////// How to print all even numbers from 0 to 10////////////

function printEvenNumbers() {      // create a function

    for(let i = 0; i<=10; i++) {    // create a for loop and initialize i=0 in it and continue upto
                                   // less than 10 and equal to 10 and increment as i+1.
        if(i %2 == 0){             // If values of i are divisible by 2 and remainder is 0,
            console.log(i);        // then only those values print on by one.
        }
    }
}
printEvenNumbers();                // call the function