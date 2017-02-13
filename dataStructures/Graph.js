'use strict';

class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(value) {
    this.nodes.push({
      value: value,
      edges: []
    });
  }

  find(value) {
    return this.nodes.find(function(node) {
      return node.value === value;
    });
  }

  addEdge(startValue, endValue) {
    var startNode = this.find(startValue);
    var endNode = this.find(endValue);

    if (!startNode || !endNode) return;

    startNode.edges.push(endNode);
  }

}

var g = new Graph();
