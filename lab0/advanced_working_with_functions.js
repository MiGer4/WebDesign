//Recursion and stack
    //Task 1
    function sumTo(n) {
        return n * (n + 1) / 2;
    }

    alert( sumTo(100) );
    //Task 2
    function factorial(n) {
        return (n != 1) ? n * factorial(n - 1) : 1;
    }

    alert( factorial(5) ); // 120
    //Task 3
    function fib(n) {
        return n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
    }
    alert( fib(3) ); // 2
    alert( fib(7) ); // 13
    //Task 4
    let list = {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                value: 4,
                next: null
                }
            }
        }
    };

    function printList(list) {
        let tmp = list;

        while (tmp) {
            alert(tmp.value);
            tmp = tmp.next;
        }

    }

    printList(list);
    //Task 5
    list = {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    };

    function printReverseList(list) {
        let arr = [];
        let tmp = list;

        while (tmp) {
            arr.push(tmp.value);
            tmp = tmp.next;
        }

        for (let i = arr.length - 1; i >= 0; i--) {
            alert( arr[i] );
        }
    }

    printReverseList(list);
//Variable scope, closure
    //Task 1
    let name = "John";

    function sayHi() {
        alert("Hi, " + name);
    }

    name = "Pete";

    sayHi();//"Pete"
    //Task 2
    function makeWorker() {
        let name = "Pete";

        return function() {
            alert(name);
        };
    }

    name = "John";

    // create a function
    let work = makeWorker();

    // call it
    work(); // Pete
    //Task 3
    function makeCounter() {
        let count = 0;

        return function() {
            return count++;
        };
    }

    let counter = makeCounter();
    let counter2 = makeCounter();

    alert( counter() ); // 0
    alert( counter() ); // 1

    alert( counter2() ); // 0
    alert( counter2() ); // 1
    //Task 4
    function Counter() {
        let count = 0;

        this.up = function() {
            return ++count;
        };

        this.down = function() {
            return --count;
        };
    }

    counter = new Counter();

    alert( counter.up() ); // 1
    alert( counter.up() ); // 2
    alert( counter.down() ); // 1
    //Task 5
    let phrase = "Hello";

    if (true) {
        let user = "John";

        function sayHi() {
            alert(`${phrase}, ${user}`);
        }
    }

    sayHi();//error
    //Task 6
    function sum(a) {

        return function(b) {
            return a + b; // takes "a" from the outer lexical environment
        };

    }

    alert( sum(1)(2) ); // 3
    alert( sum(5)(-1) ); // 4
    //Task 7
    let x = 1;

    function func() {
        console.log(x); // error

        let x = 2;
    }

    func();
    //Task 8
    function inBetween(a, b) {
        return function(x) {
            return x >= a && x <= b;
        };
    }

    let arr = [1, 2, 3, 4, 5, 6, 7];
    alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
    //Task 9
    function byField(fieldName){
        return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
    }
    //Task 10
    function makeArmy() {
        let shooters = [];

        let i = 0;
        while (i < 10) {
            let j = i;
            let shooter = function() { // shooter function
                alert( j ); // should show its number
            };
            shooters.push(shooter);
            i++;
        }

        return shooters;
    }

    let army = makeArmy();

    // Now the code works correctly
    army[0](); // 0
    army[5](); // 5
//Function object, NFE
    //Task 1
    function makeCounter() {
        let count = 0;

        function counter() {
            return count++;
        }

        counter.set = value => count = value;

        counter.decrease = () => count--;

        return counter;
    }
    //Task 2
    function sum(a) {

        let currentSum = a;

        function f(b) {
            currentSum += b;
            return f;
        }

        f.toString = function() {
            return currentSum;
        };

        return f;
    }

    alert( sum(1)(2) ); // 3
    alert( sum(5)(-1)(2) ); // 6
    alert( sum(6)(-1)(-2)(-3) ); // 0
    alert( sum(0)(1)(2)(3)(4)(5) ); // 15
//Scheduling: setTimeout and setInterval
    //Task 1
    function printNumbers(from, to) {
        let current = from;

        let timerId = setInterval(function() {
            alert(current);
            if (current == to) {
                clearInterval(timerId);
            }
            current++;
        }, 1000);
    }

    // usage:
    printNumbers(5, 10);
    function printNumbers(from, to) {
        let current = from;

        setTimeout(function go() {
            alert(current);
            if (current < to) {
                setTimeout(go, 1000);
            }
            current++;
        }, 1000);
    }

    // usage:
    printNumbers(5, 10);
    //Task 2
    let i = 0;

    setTimeout(() => alert(i), 100); // 100000000

    // assume that the time to execute this function is >100ms
    for(let j = 0; j < 100000000; j++) {
        i++;
    }
//Decorators and forwarding, call/apply
//Task 1
function spy(func) {

    function wrapper(...args) {
        // using ...args instead of arguments to store "real" array in wrapper.calls
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}
//Task 2
function delay(f, ms) {

    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    };

}

let f1000 = delay(alert, 1000);

f1000("test"); // shows "test" after 1000ms
//Task 3
function debounce(func, ms) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), ms);
    };
}
//Task 4
function throttle(func, ms) {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        isThrottled = true;

        func.apply(this, arguments); // (1)

        setTimeout(function() {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}
//Function binding
    //Task 1
    function f() {
        alert( this ); // null
    }

    let user = {
        g: f.bind(null)
    };

    user.g();
    //Task 2
    function f() {
        alert(this.name);
    }

    f = f.bind( {name: "John"} ).bind( {name: "Pete"} );

    f(); // John
    //Task 3
    function sayHi() {
        alert( this.name );
    }
    sayHi.test = 5;

    let bound = sayHi.bind({
        name: "John"
    });

    alert( bound.test ); // undefined
    //Task 4
    function askPassword(ok, fail) {
        let password = prompt("Password?", '');
        if (password == "rockstar") ok();
        else fail();
    }

    user = {
        name: 'John',

        loginOk() {
            alert(`${this.name} logged in`);
        },

        loginFail() {
            alert(`${this.name} failed to log in`);
        },

    };

    askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
