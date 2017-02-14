//: Playground - noun: a place where people can play

import UIKit

// ***************************************************************

// Filter
// Filter into [3, 3, 3] the standard way, and then using a HOF!
var filteredArray = [Int]()
for n in [1, 2, 3, 4, 3, 3] {
    if n == 3 {
        filteredArray.append(n)
    }
}
filteredArray

// let filteredHOF = numbers.filter({return $0 == 3})
let filtered = [1, 2, 3, 4, 3, 3].filter({return $0 % 2 == 0})
filtered

// ***************************************************************

// Map
// Transform [1, 2, 3, 4] into [2, 4, 6, 8]
var transformedArray = [Int]()
for n in [1, 2, 3, 4] {
    transformedArray.append(n * 2)
}
transformedArray

let mapped = [1, 2, 3, 4].map({ return $0 * 2 })
mapped

// ***************************************************************

// Reduce
// Sum [1, 2, 3, 4] into 10 using reduce
var sumElements = 0
for n in [1, 2, 3, 4] {
    sumElements += n
}
sumElements

let sum = [1, 2, 3, 4].reduce(0, {sum, number in sum + number})
sum
