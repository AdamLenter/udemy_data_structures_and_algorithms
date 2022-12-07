class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);

        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    pop(){
        if(this.length === 0) {
            return undefined;
        }

        const currentTail = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            const newTail = currentTail.previous;
            newTail.next = null;
            this.tail = newTail;
        }

        this.length--;
        return currentTail;
    }

    shift(){
        if(this.length === 0) {
            return undefined;
        }
        else {
            const currentHead = this.head;

            if(this.length === 1) {
                this.head = null;
                this.tail = null;
            }
            else {
                const newHead = this.head.next;
                this.head = this.head.next;
                this.head.previous = null;
            }
        this.length--;

        currentHead.next = null;
        return currentHead;
        }
    }

    unshift(val) {
        const newNode = new Node(val);

        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            const originalHead = this.head;
            this.head = newNode;
            newNode.next = originalHead;
            originalHead.previous = newNode;
            this.length++;
        }
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) {
            return null;
        }
        let currentNode;
        if(index <= this.length/2) {
            currentNode = this.head;
            for(let i = 1; i <= index; i++) {
                currentNode = currentNode.next;
            }
        }
        else {
            currentNode = this.tail;
            for(let i = this.length - 2; i >= index; i--) {
                currentNode = currentNode.previous;
            }
        }

        return currentNode;
    }

    set(index, val) {
        const nodeToUpdate = this.get(index);

        if(nodeToUpdate) {
            nodeToUpdate.val = val;
            return true;
        }

        return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) {
            return false;
        } 
        if(index === 0) {
            return !!this.unshift(val);
        }
        if(index === this.length) {
            return !!this.push(val)
        }

        let newNode = new Node(val);

        let currentNode = this.get(index);
        let previousNode = currentNode.previous;
        previousNode.next = newNode;
        newNode.previous = previousNode;
        newNode.next = currentNode;
        currentNode.previous = newNode;

        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index > this.length) {
            return undefined;
        } 
        if(index === 0) {
            return this.shift();
        }
        if(index === this.length - 1) {
            return this.pop();
        }
        const nodeToRemove = this.get(index);
        const previousNode = nodeToRemove.previous;
        const nextNode = nodeToRemove.next;

        previousNode.next = nextNode;
        nextNode.previous = previousNode;

        nodeToRemove.next = null;
        nodeToRemove.previous = null;
        this.length--;

        return nodeToRemove;
    }

    reverse(){
        let currentNode = this.head;
        let newNext = null;
        let previousNode;
        for(let i = 1; i < this.length; i++) {
            currentNode = currentNode.next;
            previousNode = currentNode.previous;
            previousNode.next = newNext;
            previousNode.previous = currentNode;
            newNext = previousNode;
            }

        currentNode.next = previousNode;
        currentNode.previous = null;

        const temporaryHead = this.tail;
        this.tail = this.head;
        this.head = temporaryHead;

        return this;
        }

    print() {
        let currentNode = this.head;
        console.log(currentNode.val);

        for(let i = 0; i < this.length - 1; i++) {
            currentNode = currentNode.next;
            console.log(currentNode.val);
        } 
    }
}


list = new DoublyLinkedList();
list.push("Hello");
list.push("my");
list.push("name");
list.push("is");
list.push("Fred");
list.reverse();
console.log(list.head.next);
list.print();


