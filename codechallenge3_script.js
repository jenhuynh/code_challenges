// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - a. Return the first item in the array (ex: 1)
//   - b. Return the last item in the array (ex: 3)
//   - c. Add a new item to the end of the array (ex: [1,2,3,4])
//   - d. Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - e.Return the first item from the first item in the array. (ex: "a")

//define and initalize variable named arr
let arr = [1, 2, 3];

//a. Return the first item in the array (ex: 1)
     function firstItem (arr){
         return arr[0];
     }
        console.log(firstItem(arr)); //solution: 1; 
     
// b. Return the last item in the array (ex: 3)
    function lastItem (arr){
        return arr[2];
    }
    console.log(lastItem(arr)); //solution: 3

// c. Add a new item to the end of the array (ex: [1,2,3,4])

    function addItem (arr, newItem) {
       arr.push(newItem)
       return arr;
    }
//add in newItem into array and print the array
    console.log(addItem(arr, 4)); //solution: [1,2,3,4];
  
 
// d. Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
    function addNewArr (arr, newArr){
        arr.unshift(newArr);
        return arr;
    }

 //add in newArr into array and print the array
    console.log(addNewArr(arr,["a", "b", "c"])); //solution: [["a","b","c"],1,2,3,4]
     

// d. Return the first item from the first item in the array. (ex: "a")
    function returnFirstItem (arr){
        return arr[0][0];
    }
//use bracket notation to index into array within an array
    console.log(returnFirstItem(arr)); //solution: a