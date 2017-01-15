'use strict';

class Tree {
  constructor() {
    this.root = null;
  }

  traverse(callback) {
    function walk(node) {
      callback(node);
      node.children.forEach(walk);
    }

    walk(this.root);
  }

  add(value, parentValue) {
    var newNode = {
      value: value,
      children: []
    };

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    this.traverse(function(node) {
      if (node.value === parentValue) {
        node.children.push(newNode);
      }
    });

  }
}

var t = new Tree();
