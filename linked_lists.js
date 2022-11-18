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

        if(indexNumber > this.length) {
            return undefined;
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
}

const list = new SinglyLinkedList();
list.push("Hello");
list.push("my");
list.push("name");
list.push("is");
list.push("Adam");

console.log(list.get(4));