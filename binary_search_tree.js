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
}

let tree = new BinarySearchTree();
tree.insert(20);
tree.insert(15);

console.log(tree);
