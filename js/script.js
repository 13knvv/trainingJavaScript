"use strict";
const cl = (massege) => console.log(massege)
const cd = (massege) => console.dir(massege)

/////////////////////////
// task: Count of positives / sum of negatives 
//
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
// solve task: 

function countPositivesSumNegatives(input) {
    let quantity = 0
    let sum = 0
    
    if (input == undefined || input.length === 0  ) return []

    input.forEach(num => {
        if (num > 0) quantity += 1
        if (num < 0) sum += num
    })

    if (quantity === 0 && sum ===0) return []

    return [quantity, sum]
}
    


cl( countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
// [10, -65];
cl( countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))
//[8, -50];
cl( countPositivesSumNegatives())
//[]
cl( countPositivesSumNegatives([0,0]))
//[]