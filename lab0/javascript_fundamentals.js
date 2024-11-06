// Hello, world!
    //Task_1     
    <html>
    <body>
        <script>
            alert( "I'm JavaScript!" );
        </script>
    </body>
    </html>
    function show_alert(){
    alert( "I'm JavaScript!" );
}
    //Task_2
    <script src="alert.js"></script>
    
    //file alert.js
    alert("I'm JavaScript!");


// Variables
    //Task_1
    let admin, name;
    name = "John";
    admin = name;
    alert(admin);
    
    //Task_2
    let ourPlanetName = "Earth";
    let currentUserName = "Pivo";
//Data types
    //Task 1
    name = "Ilya";

    alert( `hello ${1}` ); // hello 1

    alert( `hello ${"name"}` ); // hello name

    alert( `hello ${name}` ); // hello Ilya
//Interaction: alert, prompt, confirm
    //Task 1
    <html>
    <body>
        <script>
            let name = prompt("What is your name?", "");
            alert(name);
        </script>
    </body>
    </html>
//Basic operators, maths
    //Task 1
    let a = 1, b = 1;

    let c = ++a; // 2
    let d = b++; // 1
    //Task 2
    a = 2;
    let x = 1 + (a *= 2); // a = 4, x = 5
    //Task 3
    "" + 1 + 0      //10
    "" - 1 + 0      //-1
    true + false    //1
    6 / "3"         //2
    "2" * "3"       //6
    4 + 5 + "px"    //9px
    "$" + 4 + 5     //$45
    "4" - 2         //2
    "4px" - 2       //Nan
    "  -9  " + 5    //  -9  5
    "  -9  " - 5    //-14
    null + 1        //1
    undefined + 1   //Nan
    " \t \n" - 2    //-2
    //Task4
    a = +prompt("First number?", 1);
    b = +prompt("Second number?", 2);

    alert(a + b); // 3
//Comparisons
    //Task 1
    5 > 4                   //true
    "apple" > "pineapple"   //false
    "2" > "12"              //true
    undefined == null       //true
    undefined === null      //false
    null == "\n0\n"         //false
    null === +"\n0\n"       //false
//Conditional branching: if, '?'
    //Task 1
    if ("0") {
        alert( 'Hello' );
        }//"0" not 0
    //Task 2
    name = prompt("What is the “official” name of JavaScript?","")
    if (name == "ECMAScript") {
        alert("Correct")
    }
    else {
        alert("You don’t know? ECMAScript!")
    }
    //Task 3
    let value = prompt('Type a number', 0);

    if (value > 0) {
        alert( 1 );
    } else if (value < 0) {
        alert( -1 );
    } else {
        alert( 0 );
    }
    //Task 4
    let result = a + b < 4 ? 'Below': 'Over';
    //Task 5
    let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
//Logical operators
    //Task 1
    alert( null || 2 || undefined );//2
    //Task 2
    alert( alert(1) || 2 || alert(3) );//undefined
    //Task 3
    alert( 1 && null && 2 );//null
    //Task 4
    alert( alert(1) && alert(2) );//1 and undefined
    //Task 5
    alert( null || 2 && 3 || 4 );//3
    //Task 6
    if (age >= 14 && age <= 90){}
    //Task 7
    if (age < 14 || age > 90){}
    //Task 8
    if (-1 || 0) alert( 'first' );//execute
    if (-1 && 0) alert( 'second' );
    if (null || -1 && 1) alert( 'third' );//execute
    //Task 9
    let userName = prompt("Who's there?", '');

    if (userName === 'Admin') {

        let pass = prompt('Password?', '');

        if (pass === 'TheMaster') {
            alert( 'Welcome!' );
        } else if (pass === '' || pass === null) {
            alert( 'Canceled' );
        } else {
            alert( 'Wrong password' );
        }

    } else if (userName === '' || userName === null) {
            alert( 'Canceled' );
        } else {
            alert( "I don't know you" );
        }
//Loops: while and for
    //Task 1
    let i = 3;

    while (i) {
        alert( i-- );
    }//1
    //Task 2
    i = 0;
    while (++i < 5) alert( i ); // 1 - 4

    i = 0;
    while (i++ < 5) alert( i ); // 1 - 5
    //Task 3
    for (let i = 0; i < 5; i++) alert( i );// 0 - 4

    for (let i = 0; i < 5; ++i) alert( i );// 0 - 4
    //Task 4
    for (let i = 2; i <= 10; i++) {
        if (i % 2 == 0) {
            alert( i );
        }
    }
    //Task 5
    i = 0;
    while (i < 3) {
        alert( `number ${i}!` );
        i++;
    }
    //Task 6
    let num;

    do {
        num = prompt("Enter a number greater than 100?", 0);
    } while (num <= 100 && num);
    //Task 7
    let n = 10;

    nextPrime:
    for (let i = 2; i <= n; i++) { // for each i...

        for (let j = 2; j < i; j++) { // look for a divisor..
            if (i % j == 0) continue nextPrime; // not a prime, go next i
        }

        alert( i ); // a prime
    }
//The "switch" statement
    //Task 1
    if(browser == 'Edge') {
        alert("You've got the Edge!");
    } else if (browser == 'Chrome'
        || browser == 'Firefox'
        || browser == 'Safari'
        || browser == 'Opera') {
            alert( 'Okay we support these browsers too' );
        } else {
            alert( 'We hope that this page looks ok!' );
        }
    //Task 2
    a = +prompt('a?', '');

    switch (a) {
        case 0:
            alert( 0 );
            break;

        case 1:
            alert( 1 );
            break;

        case 2:
        case 3:
            alert( '2,3' );
            break;
    }
//Functions
    //Task 1
    function checkAge(age) {
        if (age > 18) {
            return true;
        } else {
        // ...
            return confirm('Did parents allow you?');
        }
    }
    function checkAge(age) {
        if (age > 18) {
            return true;
        }
        // ...
        return confirm('Did parents allow you?');
    } // no difference
    //Task 2
    function checkAge(age) {
        return (age > 18) ? true : confirm('Did parents allow you?');
    }
    function checkAge(age) {
        return (age > 18) || confirm('Did parents allow you?');
    }
    //Task 3
    function min(a, b) {
        return a < b ? a : b;
    }
    //Task 4
    function pow(x, n) {
        let result = x;

        for (let i = 1; i < n; i++) {
        result *= x;
        }

        return result;
    }

    x = prompt("x?", '');
    n = prompt("n?", '');

    if (n < 1) {
        alert(`Power ${n} is not supported, use a positive integer`);
    } else {
        alert( pow(x, n) );
    }
//Arrow functions, the basics
    //Task 1
    function ask(question, yes, no) {
        if (confirm(question)) yes();
        else no();
    }

    ask(
        "Do you agree?",
        () => alert("You agreed."),
        () => alert("You canceled the execution.")
    );
