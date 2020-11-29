class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    // Insert at first

    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++;
    }

    // Insert at last

    insertLast(data) {
        let node = new Node(data);
        let current;
        if(!this.head) {
            this.head = node;
        }
        else{
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node
        }
        this.size++;
    }

    // Insert at index

    insertAt(data, index) {
        // if index is out of scope
        if(index > 0 && index > this.size) {
            console.log("Invalid argument")
        }
        // if first index
        else if(index === 0) {
            return this.head = new Node(data, this.head)
            return;
        }
       else if(index === this.size) {
            this.insertLast(data);
        }
        else {
            let node = new Node(data);
            let previous, current;
            current = this.head;
            for(let i = 0; i < index - 1 ; i++) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
            this.size++;
        }
    }

    // Get at index
    getAt(index) {
        let current = this.head;
        let count = 0;
        while(current) {
            if(count == index) {
                console.log(current.data)
            }
            count++;
            current = current.next;
        }
        return null;
    }

    // Remove at index

    removeAt(index) {
        let current = this.head;
        if(index > this.size) {            
            console.log('Invalid Argument')
            return -1;
        }
        else if( index === 0) {
            this.head = current.next
        }
        else {
            let previous = null;
            for(let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            this.size--;
        }
         
    }

    // clear list

    clearList() {
        this.head = null;
        this.size = 0;
    }

    // print list
    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

}

const ll = new LinkedList();

ll.insertFirst(300)
ll.insertFirst(200)
ll.insertFirst(100)
ll.insertLast(400)
ll.insertAt(500,4)
ll.clearList();
ll.printListData();
// ll.getAt(2)