//: Playground - noun: a place where people can play

import UIKit

let numbers = [1, 2, 4, 6, 8, 9, 11, 13, 16, 17, 20]

// O(n) time complexity.. this is noob shite!
func linearSearch(searchValue: Int, array: [Int]) -> Bool {
    for num in array {
        if num == searchValue {
            return true
        }
    }
    return false
}

print(linearSearch(searchValue: 4, array: numbers))

// O(log n) time complexity.. this is what big boys use!
func binarySearch(searchValue: Int, array: [Int]) -> Bool {
    var low = 0
    var high = array.count - 1
    
    while low <= high {
        let mid = (low + high) / 2
        let midValue = array[mid]
        
        print("midValue: \(midValue), leftIndex: \(low), rightIndex: \(high), [\(array[low]), \(array[high])]")
        
        if searchValue == midValue {
            return true
        }
        
        if searchValue < midValue {
            high = mid - 1
        }
        
        if searchValue > midValue {
            low = mid + 1
        }
    }
    
    return false
}

print(binarySearch(searchValue: 13, array: numbers))
