class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const node = new Node(val);

        if(!this.root) {
            this.root = node;
        }
        else {
            let terminate = false;

            let comparison = this.root;
            while(!terminate) {
                if(node.val < comparison.val) {
                    if(!comparison.left) {
                        comparison.left = node;
                        terminate = true;
                    }
                    else {
                        comparison = comparison.left;
                    }
                }
                else if(node.val > comparison.val) {
                    if(!comparison.right) {
                        comparison.right = node;
                        terminate = true;
                    }
                    else {
                        comparison = comparison.right;
                    }
                }
                else {
                    return undefined;
                }
            }
        }
    return this;
    }

    find(val) {

        if(!this.root) {
            return false;
        }

        let current = this.root
        
        while(true) {
            if(current.val === val) {
                return true;
            }
            else {
                if(val < current.val) {
                    //The value should go to the left:
                    if(current.left) {
                        current = current.left;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    if(current.right) {
                        current = current.right;
                    }
                    else {
                        return false;
                    }
                }
            }
        }
       
    }

    bfs() {
        let queue = [];
        let visited = [];

        if(this.root) {
            queue.push(this.root);

            while(queue.length > 0) {
                let current = queue[0];

                if(current.left) {
                    queue.push(current.left)
                }
                
                if(current.right) {
                    queue.push(current.right);
                }

                visited.push(current);
                queue.shift();
            }
        }
    return visited;
    }
}

let tree = new BinarySearchTree();
tree.insert(20);
tree.insert(15);
tree.insert(5);
tree.insert(12);
tree.insert(60);
tree.insert(55);

console.log(tree.bfs().length);
