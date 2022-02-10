"use strict";
const cl = (massege) => console.log(massege)
const cd = (massege) => console.dir(massege)

/////////////////////////
// task: Persistent Bugger
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)
////////////////////////////
// solve task: Persistent Bugger

function persistence(num) {
    let i = 0

      function mul(num) {
        if (num < 10) return i
        let nextNum = String(num).split('')
            .reduce((result, number) => result *= number, 1)
        i++
        mul(nextNum)
    }

    mul(num)
    return i
 }




cl(persistence(39))//3
cl(persistence(4))//0
cl(persistence(25))//2
cl(persistence(999))//4