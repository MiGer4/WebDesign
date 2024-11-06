//Objects
    //Task 1
    let user = {};
    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete";
    delete user.name;
    //Task 2
    function isEmpty(obj) {
        for (let key in obj) {
        // if the loop has started, there is a property
            return false;
        }
        return true;
    }
    //Task 3
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    };

    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }

    alert(sum); // 390
    //Task 4
    function multiplyNumeric(obj) {
        for (let key in obj) {
            if (typeof obj[key] == 'number') {
                obj[key] *= 2;
            }
        }
    }
//Object methods, "this"
    //Task 1
    function makeUser() {
        return {
            name: "John",
            ref: this
        };
    }

    let user = makeUser();
    alert( user.ref.name ); // Error: Cannot read property 'name' of undefined
    //Task 2
    let calculator = {
        sum() {
            return this.a + this.b;
        },

        mul() {
            return this.a * this.b;
        },

        read() {
            this.a = +prompt('a?', 0);
            this.b = +prompt('b?', 0);
        }
    };

    calculator.read();
    alert( calculator.sum() );
    alert( calculator.mul() );
    //Task 3
    let ladder = {
        step: 0,
        up() {
            this.step++;
            return this;
        },
        down() {
            this.step--;
            return this;
        },
        showStep() {
            alert( this.step );
            return this;
        }
    };

    ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
//Constructor, operator "new"
    //Task 1
    let obj = {};

    function A() { return obj; }
    function B() { return obj; }

    alert( new A() == new B() ); // true
    //Task 2
    function Calculator() {

        this.read = function() {
            this.a = +prompt('a?', 0);
            this.b = +prompt('b?', 0);
        };

        this.sum = function() {
            return this.a + this.b;
        };

        this.mul = function() {
            return this.a * this.b;
        };
    }

    calculator = new Calculator();
    calculator.read();

    alert( "Sum=" + calculator.sum() );
    alert( "Mul=" + calculator.mul() );
    //Task 3
    function Accumulator(startingValue) {
        this.value = startingValue;

        this.read = function() {
            this.value += +prompt('How much to add?', 0);
        };

    }

    let accumulator = new Accumulator(1);
    accumulator.read();
    accumulator.read();
    alert(accumulator.value);
