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
}

let tree = new BinarySearchTree();
tree.insert(20);
tree.insert(15);
tree.insert(5);
tree.insert(12);
tree.insert(60);
tree.insert(55);

console.log(tree.find(5));
