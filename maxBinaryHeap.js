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
}


let heap = new maxBinaryHeap();
heap.insert(19);
heap.insert(12);
heap.insert(25);
heap.insert(100);
heap.insert(17);
heap.insert(5);
heap.insert(36);
console.log(heap);