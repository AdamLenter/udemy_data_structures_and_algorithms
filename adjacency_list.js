class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
}

const graph = new Graph();
const tokyo = graph.addVertex("Tokyo");
const detroit = graph.addVertex("Detroit");
graph.addEdge("Tokyo", "Detroit");
console.log(graph);