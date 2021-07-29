//2.  Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.


function findCharCount (str){
//if str is not equal to anything
    if(typeof str === 'string'){
//return length of string
     return str.length;
    } else {
     return "Please pass in a string.";
    }
}

//testing possible solutions
console.log(findCharCount("four")); //solution: 4
console.log(findCharCount ("twenty")); //solution: 6

//testing edge cases for number, boolean, and word without string quotations
console.log(findCharCount(5)); //solution: Please pass in a string.
console.log(findCharCount(true)); //solution: Please pass in a string.
console.log(findCharCount (four)); //solution: Exits function, four is not defined.
 
