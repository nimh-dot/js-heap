// Implementing Heaps in JavaScript

// The add() and remove() methods handle the insertion and deletion process
// The heapifyDown() method maintains the heap structure when an element is deleted.
// The heapifyUp() method maintains the heap structure when an element is added to the heap. 
// The peek() method returns the root element of the heap and swap() method interchanges value at two nodes.

// The helper methods like rightChild, leftChild, parent  help us to get the element and its children at the specified index.

class Heap {
    constructor() {
        this.heap = [];
    }

    // helper methods
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    getSize() {
        return this.heap.length;
    }

    print() {
        console.log('Heap:', this.heap);
    }
    // end of helper methods

    peek() {
        return this.heap.length ? this.heap[0] : null;
    }

    add(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    remove() {
        const removedValue = this.peek();

        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        this.heapifyDown();
        return removedValue;
    }

    heapifyUp() {
        let i = this.heap.length - 1;
        while (this.getParentIndex(i) >= 0 && this.heap[i] > this.heap[this.getParentIndex(i)]) {
            this.swap(i, this.getParentIndex(i));
            i = this.getParentIndex(i);
        }
    }

    heapifyDown() {
        let i = 0;

        while (i * 2 + 1 < this.heap.length) {
            let largerChildIndex = i * 2 + 1;
            if (i * 2 + 2 < this.heap.length && this.heap[i * 2 + 2] > this.heap[i * 2 + 1]) {
                largerChildIndex = i * 2 + 2;
            }
            if (this.heap[largerChildIndex] <= this.heap[i]) break;
            this.swap(i, largerChildIndex);
            i = largerChildIndex;
        }
    }

}