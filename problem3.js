// Largest prime factor
// Problem 3

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

/* Full disclosure; this isn't my solution. I worked on my own
   but it needed optimization.
   
   I found this solution on stack overflow and loved the answer. 
   I refactored it a little but it largely remains the work of
   "Nick A".                            
*/

(function iife() {

  console.log('Problem 3')
  
  // generate an array of primes using a prime sieve
  function genPrimes(n){
    let primes = new Uint32Array(n+1)
    primes.fill(1)
    for (let i = 2; i < Math.sqrt(n); i++){
      if (primes[i]) {
        for (let j = 2 * i; j < n; j += i){
          primes[j] = 0
        }
      }
    }
    let primeVals = []
    for (let i = 2; i < primes.length; i++){
      if (primes[i]) {
        primeVals.push(i)
      }
    }
    return primeVals
  }
      
  function primeFactor(x, primes){
    const c = x < primes.length ? x : primes.length
    for (let i = c; i > 1; i--) {
      if(x % primes[i] == 0){
        return primes[i]
      }
    }
  }

  const primes = genPrimes(15487457)
  console.log(primeFactor(600851475143, primes))

})()
