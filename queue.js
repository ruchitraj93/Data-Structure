/*
Applications
1. Serving requests on a single shared resource, like a printer, CPU task scheduling etc.
2. In real life scenario, Call Center phone systems uses Queues to hold people calling them in an order, until a service representative is free.
3. Handling of interrupts in real-time systems. The interrupts are handled in the same order as they arrive i.e First come first served.

*/


// Implemented using Objects for better efficiency
function createQueue() {
    let storage = {};
    let head = 0;
    let tail = 0;

    function enQueue(item) {
        storage[tail] = item;
        tail++;
    }

    function deQueue() {
        let size = tail - head;
        if(size <= 0) {
            return null;
        }
        let item = storage[head];
        delete storage[head];
        head++;

        // Reset the counter
        if(head === tail) {
            head = 0;
            tail = 0;
        }
        return item;
    }

    function size() {
        return tail-head;        
    }

    function peek() {
        return storage[tail - 1]
    }

    function print() {
        const result = [];
        for(let key in storage) {
            result.push(storage[key]);
        }
        return result
    }

    return {
        enQueue,
        deQueue,
        print,
        size,
        peek
    }
}

const myQueue = createQueue();
myQueue.enQueue(20)
myQueue.enQueue(40)
console.log(myQueue.peek())

/*
Time Complexity
    enQueue -> O(1)
    deQueue -> O(1)

*/