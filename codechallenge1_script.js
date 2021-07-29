//Question 1: Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.

// Note:  None of the review # problems have tests included, but feel free to write your own.

function divisibleByThree (num) {
//conditonal that determines wheter number is divisible by 3
    if (num % 3 === 0){
        return true;
    } else {
        return false;
    }
}

//checking if solution is divisible by three
console.log(divisibleByThree(15)); //solution: true
console.log(divisibleByThree(10)); //solution: false
//edge casing by checking type 
console.log(divisibleByThree("Three")); //solution: false
console.log(divisibleByThree("5")); //solution: false
console.log(divisibleByThree(NaN)); //solution: false


