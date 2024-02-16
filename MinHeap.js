// Implementing Heaps in JavaScript

// The add() and remove() methods handle the insertion and deletion process
// The heapifyDown() method maintains the heap structure when an element is deleted.
// The heapifyUp() method maintains the heap structure when an element is added to the heap. 
// The peek() method returns the root element of the heap and swap() method interchanges value at two nodes.

// The helper methods like rightChild, leftChild, parent  help us to get the element and its children at the specified index.

class MaxHeap {
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
        let parentIndex = this.getParentIndex(i);
        while (i > 0 && this.heap[i] < this.heap[parentIndex]) {
            this.swap(i, parentIndex);
            i = parentIndex;
            parentIndex = this.getParentIndex(parentIndex);
        }
    }

    heapifyDown() {
        let i = 0;

        while (i * 2 + 1 < this.heap.length) {
            let smallestChildIndex = i * 2 + 1;
            let rightChildIndex = i * 2 + 2;
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
                smallestChildIndex = rightChildIndex;
            }
            if (this.heap[smallestChildIndex] >= this.heap[i]) break;
            this.swap(i, smallestChildIndex);
            i = smallestChildIndex;
        }
    }

}