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

//-------------------------------------------------------------------

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

//-------------------------------------------------------------------
// #120 Array Checkpoint

// Create a function that takes in an array. Add up the first and last values in the array.

let potatoPhone = [7, 45, 60, 13, 27];
//  addPotatos = (Number(potatoFunction[0])) + (Number(potatoFunction[4]));

let addPotatoPhone = potatoPhone[0] + potatoPhone[4];
console.log(addPotatoPhone);
//-------------------------------------------------------------------
// #130 Loops, Arrays, and Concatenation Checkpoint
// Create a function that takes two parameters. 
//The first parameter is an array, the second parameter will be a number.
// Your function should return a string that combines -
//all of the values starting at the index of the number passed in through the end of the array.
let arrayOne = 'dog';
let arrayTwo = 'cat';
let arrayThree = 'fish';
let number = [5]; 

let answerOneThreeZero = 'arrayOne' + 'arrayTwo' + 'arrayThree' + number
let iNeedSleep = [['arrayOne','ArrayTwo','ArrayThree'], [number]];
for (i = 0; i < iNeedSleep.length; i++){
    console.log(answerOneThreeZero);
};
//currently broken- i know as its only logging the name of the 







//-------------------------------------------------------------------
// #140 Looping through an Array of Objects Checkpoint

// Create a function that takes in an array of employee objects. Each employee object will come in with a property called `yearsOfExperience`.
// Your function should return the total years of experience for all of the employees.

let employees = [
    { name: 'Rey', yearsOfExperience: 5 },
    { name: 'Finn', yearsOfExperience: 2 },
    { name: 'Kylo', yearsOfExperience: 50 },
];
//console.log(employees);
let sum = 0;
function sumYears(employees) {
    for (let x = 0; x < employees.length; x++) {
        console.log(sum += employees[x].yearsOfExperience);

    }//end to for loop of sum years
    let addYearsUp = sumYears(employees.yearsOfExperience);//should it be employees[x]?
    console.log(`the total years of experience is ${addYearsUp}`);

    console.log(addYearsUp(employees.yearsOfExperience));//or instead of add years up is it sumYears?
    //return sum; 
};//end to sum years function



//-------------------------------------------------------------------

// # Loops and Two Dimensional Arrays Checkpoint

// Create a function that takes in an array of arrays. Add up all of the numbers in all of the arrays and return the value.

