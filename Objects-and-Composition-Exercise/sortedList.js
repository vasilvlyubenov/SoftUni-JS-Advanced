function createSortedList() {

    return {
        list: [],
        size: 0,
        add(num) {
            this.list.push(num);
            this.list.sort((a, b) => a - b);
            this.size++;
            return;
        },

        remove(index) {
            if (index < this.list.length && index >= 0) {
                this.list.splice(index, 1);
                this.size--;
                
                return;
            }
        },

        get(index) {
            if (index < this.list.length && index >= 0) {
                return this.list[index];
            }
        }
    };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));