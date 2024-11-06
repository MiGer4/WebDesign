//Proxy and Reflect
    //Task 1
    let user = {
        name: "John"
    };

    function wrap(target) {
        return new Proxy(target, {
            get(target, prop, receiver) {
                if (prop in target) {
                    return Reflect.get(target, prop, receiver);
                } else {
                    throw new ReferenceError(`Property doesn't exist: "${prop}"`)
                }
            }
        });
    }

    user = wrap(user);

    alert(user.name); // John
    alert(user.age); // ReferenceError: Property doesn't exist: "age"
    //Task 2
    let array = [1, 2, 3];

    array = new Proxy(array, {
        get(target, prop, receiver) {
            if (prop < 0) {
                // even if we access it like arr[1]
                // prop is a string, so need to convert it to number
                prop = +prop + target.length;
            }
        return Reflect.get(target, prop, receiver);
        }
    });


    alert(array[-1]); // 3
    alert(array[-2]); // 2
    //Task 3
    let handlers = Symbol('handlers');

    function makeObservable(target) {
        // 1. Initialize handlers store
        target[handlers] = [];

        // Store the handler function in array for future calls
        target.observe = function(handler) {
            this[handlers].push(handler);
        };

        // 2. Create a proxy to handle changes
        return new Proxy(target, {
            set(target, property, value, receiver) {
                let success = Reflect.set(...arguments); // forward the operation to object
                    if (success) { // if there were no error while setting the property
                    // call all handlers
                    target[handlers].forEach(handler => handler(property, value));
                    }
                return success;
            }
        });
    }

    user = {};

    user = makeObservable(user);

    user.observe((key, value) => {
        alert(`SET ${key}=${value}`);
    });

    user.name = "John";
//Eval: run a code string
    //Task 1
    let expr = prompt("Type an arithmetic expression?", '2*3+2');

    alert( eval(expr) );
//Reference Type
    //Task 1
    let user = {
        name: "John",
        go: function() { alert(this.name) }
    };

    (user.go)() // John
    //Task 2
    let obj, method;

    obj = {
        go: function() { alert(this); }
    };

    obj.go();               // (1) [object Object]      -> That’s a regular object method call.

    (obj.go)();             // (2) [object Object]      -> The same, parentheses do not change the order of operations here, the dot is first anyway.

    (method = obj.go)();    // (3) undefined            -> property accessors (dot or square brackets) return a value of the Reference Type.

    (obj.go || obj.stop)(); // (4) undefined            ->Any operation on it except a method call (like assignment = or ||) turns it into an ordinary value, which does not carry the information allowing to set this.
