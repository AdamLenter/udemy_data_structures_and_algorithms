class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }

    shortestRoute(startingVertex, endingVertex) {
        let priorityQueue = new PriorityQueue;
        let distances = {};
        let previous = {};

        Object.keys(this.adjacencyList).forEach((key) => {
            if(key === startingVertex) {
                distances[key] = 0;
            }
            else {
                distances[key] = Infinity;
            }
            previous[key] = null;
            priorityQueue.enqueue(key, distances[key]);
        })
        
        distances[startingVertex] = 0;
            
        while(priorityQueue.values.length) {
            const testVertex = priorityQueue.dequeue().val;
            
            if(testVertex.val === endingVertex) {
                break;
            }

            this.adjacencyList[testVertex].forEach((neighbor)=> {
                if((distances[testVertex] + neighbor.weight < distances[neighbor.node]  )) {
                    distances[neighbor.node] = distances[testVertex] + neighbor.weight;
                    
                    previous[neighbor.node] = testVertex;
                    priorityQueue.enqueue(testVertex, distances[neighbor.node]);
                }
            })
        }
        let newOrder = [endingVertex];
        let current = endingVertex;

        while(previous[current]) {
            newOrder.push(previous[current]);
            current = previous[current];
        }

        newOrder = newOrder.reverse();
        return newOrder;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }

}

const graph = new WeightedGraph();
const a = graph.addVertex("A");
const b = graph.addVertex("B");
const c = graph.addVertex("C");
const d = graph.addVertex("D");
const e = graph.addVertex("E");
const f = graph.addVertex("F");


graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
graph.addEdge("B", "E", 3);

console.log(graph.shortestRoute("A", "E"));