//: Playground - noun: a place where people can play

import UIKit

// 1 -> 2 -> 3 -> nil

class Node {
    let value: Int
    var next: Node?
    
    init(value: Int, next: Node?) {
        self.value = value
        self.next = next
    }
}

let threeNode = Node(value: 3, next: nil)
let twoNode = Node(value: 2, next: threeNode)
let oneNode = Node(value: 1, next: twoNode)

func printList(head: Node?) {
    var currentNode = head
    while currentNode != nil {
        print(currentNode?.value ?? -1)
        currentNode = currentNode?.next
    }
}

printList(head: oneNode)

// nil <- 1 -> 2 -> 3 -> nil
// nil <- 1 <- 2 -> 3 -> nil
// nil <- 1 <- 2 <- 3

func reverseList(head: Node?) -> Node? {
    var currentNode = head
    var prev: Node?
    var next: Node?
    
    while currentNode != nil {
        next = currentNode?.next
        currentNode?.next = prev
        print("prev: \(prev?.value ?? -1), curr: \(currentNode?.value ?? -1), next: \(next?.value ?? -1)")
        prev = currentNode
        currentNode = next
    }
    
    return prev
}

let reversedList = reverseList(head: oneNode)
printList(head: reversedList)