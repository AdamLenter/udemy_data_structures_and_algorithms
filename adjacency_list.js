class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
        return this;
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        return this;
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex)=>vertex != vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertex)=>vertex != vertex1);
    }
}

const graph = new Graph();
const tokyo = graph.addVertex("Tokyo");
const detroit = graph.addVertex("Detroit");
const boston = graph.addVertex("Boston");
const tb = graph.addEdge("Tokyo", "Boston");
const td = graph.addEdge("Tokyo", "Detroit");
const db = graph.addEdge("Detroit", "Boston");
graph.removeEdge("Tokyo", "Boston");

console.log(graph);