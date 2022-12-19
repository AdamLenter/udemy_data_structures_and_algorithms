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
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex)=>vertex !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertex)=>vertex !== vertex1);

        return this;
    }

    removeVertex(vertexToRemove) {
        for(let i = 0; i < this.adjacencyList[vertexToRemove].length; i++) {
            const connectedVertex = this.adjacencyList[vertexToRemove][i];
            this.adjacencyList[connectedVertex] = this.adjacencyList[connectedVertex].filter((vertex)=>vertex !== vertexToRemove);
        }

        delete this.adjacencyList[vertexToRemove];
        return this;
    }

    depthFirstRecursive(start) {
        let result = [];
        let visited = {};
        const adjacencyList = this.adjacencyList;
        
        (function dfs(vertex){
            visited[vertex] = true;
            result.push(vertex);

            for(let i = 0; i < adjacencyList[vertex].length; i++) {
                if(adjacencyList[vertex][i] in visited == false) {
                    return dfs(adjacencyList[vertex][i]);
                }
            }
            
        })(start)

        return result;
    }

    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};

        let currentVertex;

        visited[start] = true;

        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor=> {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
    }
}

const graph = new Graph();
const tokyo = graph.addVertex("Tokyo");
const detroit = graph.addVertex("Detroit");
const boston = graph.addVertex("Boston");
const miami = graph.addVertex("Miami");
const london = graph.addVertex("London");
const tb = graph.addEdge("Tokyo", "Boston");
const td = graph.addEdge("Tokyo", "Detroit");
const db = graph.addEdge("Detroit", "Boston");
const mb = graph.addEdge("Miami", "Boston");
const mt = graph.addEdge("Miami", "Tokyo");
const ld = graph.addEdge("London", "Detroit");

console.log(graph.depthFirstIterative("Miami"));