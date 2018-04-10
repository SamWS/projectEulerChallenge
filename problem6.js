// Sum square difference
// Problem 6

// The sum of the squares of the first ten natural numbers is,
//               12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
//             (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first 
// ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one
// hundred natural numbers and the square of the sum.

(function iife() {

    console.log('Problem 6')

    function sumSquares(num) {
      let total = 0
      for (var i = 1; i <= num; i++) {
        total += Math.pow(i, 2)
      }
      return total
    }

    function squareSum(num) {
      let total = 0;
      for (var i = 1; i <= num; i++) {
        total += i
      }
      return Math.pow(total, 2)
    }

    const difference = squareSum(100) - sumSquares(100)
    
    console.log(difference)

})()
