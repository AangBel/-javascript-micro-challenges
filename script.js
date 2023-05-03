// #100  Addition Checkpoint
// Create a function that takes two numbers.
// Your function should return the sum 


function potatoFunction(numberOne, numberTwo) {
    console.log('I am the potato function');
    result = numberOne + numberTwo;
    return result;
    //console.log(result);
};//end of potato function 
console.log(potatoFunction(5, 6));



// #110 Conditional Checkpoint
// Create a function that takes two numbers.

// If the first number is bigger than the second number, return `"The first number was bigger!"`.
// If the second number is bigger than the first number, return `"The second number was bigger!"`.
// If the numbers are the same, return `"The numbers are the same!"`.
function iAmsoTired(numberOne, numberTwo) {
    //console.log('that sucks brah');
    result = numberOne * numberTwo;

    if (numberOne > numberTwo) {
        console.log('The first number was bigger!');
    } if (numberOne < numberTwo) {
        console.log('The second number was bigger!')
    } else if (numberOne === numberTwo) {
        console.log('The numbers are the same!');
    }
}
;
// Test 
// iAmsoTired(80, 8);
// iAmsoTired(2, 80);
// iAmsoTired(20, 20);


// # Loops, Arrays, and Concatenation Checkpoint
// Create a function that takes two parameters. 
//The first parameter is an array, the second parameter will be a number.
// Your function should return a string that combines -
//all of the values starting at the index of the number passed in through the end of the array.

