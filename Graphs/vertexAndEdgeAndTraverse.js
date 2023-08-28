class Graph {
  constructor() {
    this.adjacencyList = [];
  }

  addVertx(vertex) {
    if (this.adjacencyList[vertex]) return true;

    this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    if (v1 === v2) return "vertex and Edge are same";
    if (!this.adjacencyList[v1]) this.addVertx(v1);
    if (!this.adjacencyList[v2]) this.addVertx(v2);

    let vertexValues = this.adjacencyList[v1];

    if (vertexValues.includes(v1)) return "Edge Present";

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);

    return this.adjacencyList;
  }

  DFSTravasrse(start) {
    const visted = {},
      result = [];
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visted[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visted[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }
}

let graph = new Graph();

// adding vertexes
graph.addVertx("A");
graph.addVertx("B");
graph.addVertx("C");
graph.addVertx("D");
graph.addVertx("E");
graph.addVertx("F");

// adding vertex
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("F", "E");
