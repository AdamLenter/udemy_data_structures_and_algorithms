class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        const WEIRD_PRIME = 31;
        
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        const index = this._hash(key);

        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);

        return this;
    }

    get(key) {
        const index = this._hash(key);
        
        if(this.keyMap[index]) {
            for(let i = 0; i < this.keyMap[index].length; i++) {
                
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }
}

const ht = new HashTable;
ht.set("fred", "Its me");
ht.set("mitch", "pizza");
ht.set("doug", "homey");

console.log(ht.get("turkey"));