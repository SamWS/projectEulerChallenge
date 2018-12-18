// Summation of primes
// Problem 10

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

(function iife() {

    let arr = [];

    const isPrime = num => {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i === 0) return false;
        }
        return num !== 1 && num !== 0;
    };

    for (let i = 0; i < 2000000; i++) {
        isPrime(i) && arr.push(i);
    }

    console.log('Sum of all primes below two million:', arr.reduce((x, y) => x + y));

})();
