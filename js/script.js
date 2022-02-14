"use strict";
const cl = (massege) => console.log(massege)

/////////////////////////
////////////////////////
// task: Rot13
///ROT13 is a simple letter substitution cipher that replaces a letter 
// with the letter 13 letters after it in the alphabet. ROT13 is an example
//  of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered 
// with Rot13. If there are numbers or special characters included in the string, 
// they should be returned as they are. Only letters from the latin/english alphabet 
// should be shifted, like in the original Rot13 "implementation".
// solve task: 

function rot13(message) {
    let alphabetUpperCase = []
    let alphabetLowerCase = []
    
    for (let i = 65; i <= 90; i++) {
        alphabetUpperCase.push(String.fromCodePoint(i))
    }
    for (let i = 97; i <= 122; i++) {
        alphabetLowerCase.push(String.fromCodePoint(i))
    }

    function change(x) {

        if (x.codePointAt() >= 65 && x.codePointAt() <= 90) {
            let indexX = alphabetUpperCase.indexOf(x)
            let indexXPlus13 = alphabetUpperCase.indexOf(x) + 13
            if (indexX + 13 > alphabetUpperCase.length-1) {
                indexXPlus13 = 12 - (alphabetUpperCase.length-1 - indexX)
            }
            return alphabetUpperCase[indexXPlus13]
        }

        if (x.codePointAt() >= 97 && x.codePointAt() <= 122) {
            let indexX = alphabetLowerCase.indexOf(x)
            let indexXPlus13 = alphabetLowerCase.indexOf(x) + 13
            if (indexX + 13 > alphabetLowerCase.length-1) {
                indexXPlus13 = 12 - (alphabetLowerCase.length-1 - indexX)
            }
            return alphabetLowerCase[indexXPlus13]
        }

        return x
    }

    return message.split('')
                  .map(x => change(x))
                  .join('')
  }




  cl(rot13("test"))//"grfg"
  cl(rot13("Test"))//"Grfg"
  cl(rot13("Ruby is cool!"))//Ehol vf pbby!
  cl(rot13("aaAA"))//nnNN
 