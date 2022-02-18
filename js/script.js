"use strict";
const cl = (massege) => console.log(massege)

/////////////////////////
////////////////////////
// task: Who likes it?
// You probably know the "like" system from Facebook and other pages. People can "like" 
// blog posts, pictures or other items. We want to create the text that should be 
// displayed next to such an item.

// Implement the function which takes an array containing the names of people that like 
// an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// solve task: 
function likes(names) {
    switch (names.length) {
        case 0:
            return 'no one likes this'
        case 1:
            return names.join('') + ' likes this'
        case 2:
            return names.join(' ahd ') + ' like this'
        case 3: 
            return names[0] + ', ' + names[1] + ' and ' + 
                   names[2] + ' like this'
        default: 
            return names[0] + ', ' + names[1] + ' and ' + 
            (names.length - 2) + ' others like this'
    }
  }


  cl(likes([]))//, 'no one likes this');
  cl(likes(['Peter']))//, 'Peter likes this');
  cl(likes(['Jacob', 'Alex']))//, 'Jacob and Alex like this');
  cl(likes(['Max', 'John', 'Mark']))//, 'Max, John and Mark like this');
  cl(likes(['Alex', 'Jacob', 'Mark', 'Max']))//, 'Alex, Jacob and 2 others like this');