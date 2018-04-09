// Largest palindrome product
// Problem 4

// A palindromic number reads the same both ways. 
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

(function iife() {
    console.log('Problem 4')

    function numberIsPalindrome(num) {
      const reverseNum = Number(String(num).split('').reverse().join(''))
      return num === reverseNum
    }

    function calculateLargestPalindrome() {
      const palindromeArray = []
      let largestPalindrome = 0

      for (var i = 999; i > 99; i--) {
        for (var j = 999; j > 99; j--) {
          var sum = i * j
          if (numberIsPalindrome(sum) && sum > largestPalindrome) {
            largestPalindrome = sum
          }
        }
      }
      return largestPalindrome
    }

    console.log(calculateLargestPalindrome())

})()