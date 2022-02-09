"use strict";
const cl = (massege) => console.log(massege)
const cd = (massege) => console.dir(massege)

/////////////////////////
//Break camelCase
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let result = []

    string.split('').forEach((letter, index, arr) => {
       if (letter.codePointAt() < 97 ) {
        result.push(' ')
       }
       result.push(letter)
    })

    return result.join('')
}





cl(solution('camelCasing'))//, 'camel Casing', 'Unexpected result')
cl(solution('camelCasingTest'))//, 'camel Casing Test'