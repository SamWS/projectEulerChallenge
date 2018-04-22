// 10001st prime
// Problem 7

// By listing the first six prime numbers: 
//         2, 3, 5, 7, 11, and 13, 
// we can see that the 6th prime is 13.
// What is the 10 001st prime number?

(function iife() {

  console.log('Problem 7')

  function isPrime(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }

  function specificPrime(limit) {
    let num = 0
    let prime = 0
    for (var i = 1; num <= limit; i++) {
      if (isPrime(i)) {
        prime = i
        num++
      }
    }
    return prime
  }

  console.log('1001st prime:', specificPrime(10001))

})()

// Answer: 104743
