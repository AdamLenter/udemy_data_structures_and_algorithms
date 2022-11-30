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
}

const first = new Node("First");
const second = new Node("Second");
first.next = second;
second.previous = first;

console.log(first);
console.log(second);


