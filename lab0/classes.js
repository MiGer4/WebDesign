//Class basic syntax
    //Task 1
    class Clock {
        constructor({ template }) {
            this.template = template;
        }

        render() {
            let date = new Date();

            let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            let output = this.template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        }

        stop() {
            clearInterval(this.timer);
        }

        start() {
            this.render();
            this.timer = setInterval(() => this.render(), 1000);
        }
    }


    let clock = new Clock({template: 'h:m:s'});
    clock.start();
//Class inheritance
    //Task 1
    class Animal {

        constructor(name) {
            this.name = name;
        }

    }

    class Rabbit extends Animal {
        constructor(name) {
            super(name);
            this.created = Date.now();
        }
    }

    let rabbit = new Rabbit("White Rabbit");
    alert(rabbit.name); // White Rabbit
    //Task 2
    class ExtendedClock extends Clock {
        constructor(options) {
            super(options);
            let { precision = 1000 } = options;
            this.precision = precision;
        }

        start() {
            this.render();
            this.timer = setInterval(() => this.render(), this.precision);
        }
    };
//Static properties and methods
    //Task 1
    class Rabbit extends Object {
        constructor(name) {
            super(); // need to call the parent constructor when inheriting
            this.name = name;
        }
    }

    rabbit = new Rabbit("Rab");

    alert( rabbit.hasOwnProperty('name') ); // true
//Class checking: "instanceof"
    //Task 1
    function A() {}
    function B() {}

    A.prototype = B.prototype = {};

    let a = new A();

    alert( a instanceof B ); // true