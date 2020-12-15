/*
Application: 
1. Browser's Execution Stack
2. Reverse String
3.Valid Parentheses checking
4. Syntax parsing
*/
 
 function createStack (maxSize = 10) {
    const _stack = [];
    let _top = -1;
    
    function push(val) {
        if(_top >= maxSize - 1) {
            return "stack overflow"
        }
        else {
            _stack.push(val);
            _top++;
        }
    }

    function pop() {
        if(_top > -1) {
            let last = _stack[_top];
            _stack.pop();
            _top--
            return last
        }
        else {
            return null;
        }
    }

    function size() {
        console.log(_top + 1)
    }

    function seek() {
        if(_top > -1) {
            return _stack[_top]
        }
        else {
            return null;
        }
    }

    function search(val) {
        const temp = [];
        let found = null;
        while(_top > -1) {
            if(_stack[_top] === val) {
                found = _top
                break;
            }
            else {
                temp.push(_stack.pop());
                _top--;
            }
        }
        for(let i = 0; i < temp.length; i++) {
            _stack.push(temp.pop());
        }
        return found;
    }

    function empty() {
        while(_top > -1) {
            _stack.pop();
            _top--;
        }
    }

    function print() {
        console.log(_stack)
    }

    return {
        push,
        print,
        pop,
        size,
        seek,
        search,
        empty
    }
 }

 const myStack = createStack(5);
 myStack.push("Ruchit");
 myStack.push("Raj");
 myStack.empty()
 myStack.print()

/*
Time Complexity
1. push -> O(1)
2. pop -> O(1)
3. size -> O(1)
4. peek -> O(1)
5. search -> O(n)
6. empty -> On(n)
*/