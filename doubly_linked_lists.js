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
}


list = new DoublyLinkedList();
list.push("Hello");
list.push("Yo yo yo");
list.push("Another one");
console.log(list);


