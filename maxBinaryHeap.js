class maxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);

        if(this.values.length > 0) {
            let sorted = false;

            let currentIndex = this.values.length - 1;

            while(currentIndex > 0 && !sorted) {
                let compareIndex = Math.floor((currentIndex - 1)/2);

                if(val > this.values[compareIndex]) {
                    //We need to swap the values:
                    this.values[currentIndex] = this.values[compareIndex];
                    this.values[compareIndex] = val;
                    currentIndex = compareIndex;
                }
                else {
                    sorted = true;
                }
            }
        }
        return this;
    }

    extractMax() {
        if(this.values.length === 0) {
            return undefined;
        }
        
        const oldHead = this.values[0];
        const newHead = this.values[this.values.length - 1];
        
        this.values[0] = newHead;
        this.values.pop();

        let currentIndex = 0;
        let compareIndex = 0;

        while(true && currentIndex < this.values.length) {
            if(this.values[(currentIndex * 2) + 1]) {
                if(this.values[(currentIndex * 2) + 2]) {
                    if(this.values[(currentIndex * 2) + 1] > this.values[(currentIndex * 2) + 2]) {
                        compareIndex = (currentIndex * 2) + 1;
                    }
                    else {
                        compareIndex = (currentIndex * 2) + 2;
                    }
                }
                else {
                    compareIndex = (currentIndex * 2) + 1;
                }
            }
            else {
                break;
            }
            if(this.values[compareIndex] > newHead) {
                this.values[currentIndex] = this.values[compareIndex];
                this.values[compareIndex] = newHead;
                currentIndex = compareIndex;
            }
            else {
                break;
            }
        }
        return oldHead;
    }
}


let heap = new maxBinaryHeap();
heap.insert(19);
heap.insert(12);
heap.insert(25);
heap.insert(100);
heap.insert(17);
heap.insert(5);
heap.insert(36);
heap.extractMax();
console.log(heap);