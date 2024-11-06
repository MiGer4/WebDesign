//Prototypal inheritance
    //Task1
    let animal = {
        jumps: null
    };
    let rabbit = {
        __proto__: animal,
        jumps: true
    };

    alert( rabbit.jumps ); // true

    delete rabbit.jumps;

    alert( rabbit.jumps ); // null

    delete animal.jumps;

    alert( rabbit.jumps ); // undefined
    //Task 2
    let head = {
        glasses: 1
    };

    let table = {
        pen: 3,
        __proto__: head
    };

    let bed = {
        sheet: 1,
        pillow: 2,
        __proto__: table
    };

    let pockets = {
        money: 2000,
        __proto__: bed
    };

    alert( pockets.pen ); // 3
    alert( bed.glasses ); // 1
    alert( table.money ); // undefined
    //Task 3
    animal = {
        eat() {
            this.full = true;
        }
    };

    rabbit = {
        __proto__: animal
    };

    rabbit.eat();// object rabbit
    //Task 4
    let hamster = {
        stomach: [],

        eat(food) {
            this.stomach.push(food);
        }
    };

    let speedy = {
        __proto__: hamster,
        stomach: []
    };

    let lazy = {
        __proto__: hamster,
        stomach: []
    };

    // Speedy one found the food
    speedy.eat("apple");
    alert( speedy.stomach ); // apple

    // Lazy one's stomach is empty
    alert( lazy.stomach ); // <nothing>
//F.prototype
    //Task 1
    function Rabbit() {}
    Rabbit.prototype = {
        eats: true
    };

    rabbit = new Rabbit();

    Rabbit.prototype = {};

    alert( rabbit.eats ); // true

    function Rabbit() {}
    Rabbit.prototype = {
        eats: true
    };

    rabbit = new Rabbit();

    Rabbit.prototype.eats = false;

    alert( rabbit.eats ); // false

    function Rabbit() {}
    Rabbit.prototype = {
        eats: true
    };

    rabbit = new Rabbit();

    delete rabbit.eats;

    alert( rabbit.eats ); // true

    function Rabbit() {}
    Rabbit.prototype = {
        eats: true
    };

    rabbit = new Rabbit();

    delete Rabbit.prototype.eats;

    alert( rabbit.eats ); // undefined
    //Task 2
    function User(name) {
        this.name = name;
    }

    let user = new User('John');
    let user2 = new user.constructor('Pete');

    alert( user2.name ); // Pete
//Native prototypes
    //Task 1
    Function.prototype.defer = function(ms) {
        setTimeout(this, ms);
    };

    function f() {
        alert("Hello!");
    }

    f.defer(1000); // shows "Hello!" after 1 sec
    //Task 2
    Function.prototype.defer = function(ms) {
        let f = this;
        return function(...args) {
            setTimeout(() => f.apply(this, args), ms);
        }
    };

    function f(a, b) {
        alert( a + b );
    }

    f.defer(1000)(1, 2); // shows 3 after 1 sec
//Prototype methods, objects without __proto__
    //Task 1'
    let dictionary = Object.create(null, {
        toString: { 
            value() { 
                return Object.keys(this).join();
            }
        }
    });

    dictionary.apple = "Apple";
    dictionary.__proto__ = "test";

    for(let key in dictionary) {
        alert(key); // "apple", then "__proto__"
    }

    alert(dictionary); // "apple,__proto__"
    //Task 2
    function Rabbit(name) {
        this.name = name;
    }
    Rabbit.prototype.sayHi = function() {
        alert( this.name );
    }

    rabbit = new Rabbit("Rabbit");

    rabbit.sayHi();                        // Rabbit
    Rabbit.prototype.sayHi();              // undefined
    Object.getPrototypeOf(rabbit).sayHi(); // undefined
    rabbit.__proto__.sayHi();              // undefined