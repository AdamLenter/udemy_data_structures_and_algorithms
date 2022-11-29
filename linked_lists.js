class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        this.length += 1;

        if(!this.head) {
            this.head = node;
            this.tail = node;
        }
        else { 
            this.tail.next = node;
            this.tail = node;
        }
    }

    pop() {
        if(!this.head) {
            return undefined;
        }

        var newTail = this.head;
        for(let i = 0; i < this.length - 2; i++) {
            newTail = newTail.next;
        }

        const oldTail = this.tail;
        this.tail = newTail;
        this.tail.next = null;
        this.length = this.length - 1;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return oldTail;
    }

    shift() {
        if(this.length === 0) return undefined;
        const oldHead = this.head;
        this.head = oldHead.next;
        this.length--;

        if(this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }

    unshift(val) {
        const newNode = new Node(val);

        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    return this;
    }

    get(indexNumber) {

        if(indexNumber < 0 || indexNumber > this.length) {
            return null;
        }

        if(indexNumber === 0) {
            return this.head;
        }

        let currentVal = this.head;

        for(let i = 0; i < indexNumber; i++) {
            currentVal = currentVal.next;
        }
        return currentVal;
    }

    set(index, val) {
        let nodeToUpdate = this.get(index);
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

        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        const newNode = new Node(val);
        
        const previousValue = this.get(index - 1);

        newNode.next = previousValue.next;
        previousValue.next = newNode;

        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) {
            return undefined;
        }

        if(index === 0) {
            return this.shift();
        }
        if(index === this.length - 1) {
            return this.pop();
        }
        
        const previousIndex = this.get(index - 1);

        const itemToRemove = previousIndex.next 
        previousIndex.next = itemToRemove.next;

        this.length--;
        return itemToRemove;
    }
}

const list = new SinglyLinkedList();
list.push("Hello");
list.push("my");
list.push("name");
list.push("is");
list.push("Adam");

console.log(list.remove(4));
