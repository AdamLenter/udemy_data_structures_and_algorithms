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
}

const list = new SinglyLinkedList();
list.push("Hello");
list.push("my");
list.push("name");
list.push("is");
list.push("Adam");
console.log(list);