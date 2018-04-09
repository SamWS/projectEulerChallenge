// Smallest multiple
// Problem 5

// 2520 is the smallest number that can be divided by 
// each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly 
// divisible by all of the numbers from 1 to 20?

/*
  Solution is shit and ugly, will refactor later
  but basically I run through all numbers that can't
  be eliminated, ie what's divisible 20 is divisible
  by 2, 4, 5 and 10 so remove, what's divisible by 18
  is divisible by 9, 6 and 3 so on.
  Number.MAX... to set a high number and += by 2520 as
  it will need to be divisible in the higher number.
  It's fast but not pretty and not useful for any
  other limit.
*/

(function iife() {
  
  console.log('Problem 5')

  function findSolution() {
    for (var i = 2520; i <= Number.MAX_SAFE_INTEGER; i += 2520) {
      if (i % 11 === 0 && i % 13 === 0 && i % 14 === 0 && i % 16 === 0 && i % 17 === 0 && i % 18 === 0 && i % 19 === 0 && i % 20 === 0) {
        return i
      }
    }
  }

  console.log(findSolution())

})()
