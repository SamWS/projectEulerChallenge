// Special Pythagorean triplet
// Problem 9

// A Pythagorean triplet is a set of three natural numbers,
// a < b < c, for which,
//            a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

(function iife() {

    // function findTriplet() {
    // 	let a,
    // 			b,
    // 			c
    // 	const max = 1000

    // 	for (a = 1; a < 333; a++) {
    // 		for (b = a + 1; b < (max - a) / 2; b++) {
    // 			c = 1000 - b - a
    // 			if (c * c == (a * a) + (b * b)) {
    // 				console.log(a, b, c)
    // 				return a * b * c
    // 			}
    // 		}
    // 	}
    // 	return null
    // }
    for (var a = 1; a < 500; a++) {
        for (var b = 1; b < 500; b++) {
            for (var c = 1; c < 500; c++) {
                if (a * a + b * b === c * c && a + b + c === 1000) {
                    console.log(a * b * c)
                }
            }
        }
    }

    // console.log(findTriplet())

})();
