// Multiples of 3 and 5
// Problem 1

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

(function iife() {

    console.log('Problem 1')

    function multiplesOf3And5(x) {
        const multiples = []
        for (let i = 0; i < x; i++) {
            if (i % 3 === 0 || i % 5 === 0) multiples.push(i)
        }
        return multiples.reduce((a, b) => {
            return a + b;
        })
    }

    console.log('Multiples of 3 and 5:', multiplesOf3And5(1000))

})()

// Answer: 233168
