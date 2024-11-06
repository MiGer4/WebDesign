//Methods of primitives
    //Task 1
    let str = "Hello";

    str.test = 5;

    alert(str.test);//error
//Numbers
    //Task 1
    let a = +prompt("The first number?", "");
    let b = +prompt("The second number?", "");

    alert( a + b );
    //Task 2
    alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded)
    //Task 3
    function readNumber() {
        let num;

        do {
            num = prompt("Enter a number please?", 0);
        } while ( !isFinite(num) );

        if (num === null || num === '') return null;

        return +num;
    }

    alert(`Read: ${readNumber()}`);
    //Task 4
    let i = 0;
    while (i < 11) {
        i += 0.2;
        if (i > 9.8 && i < 10.2) alert( i );
    }
    //Task 5
    function random(min, max) {
        return min + Math.random() * (max - min);
    }

    alert( random(1, 5) );
    alert( random(1, 5) );
    alert( random(1, 5) );
    //Task 6
    function randomInteger(min, max) {
        // now rand is from  (min-0.5) to (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    alert( randomInteger(1, 3) );
//Strings
    //Task 1
    function ucFirst(str) {
        if (!str) return str;
        
        return str[0].toUpperCase() + str.slice(1);
    }

    alert( ucFirst("john") ); // John
    //Task 2
    function checkSpam(str) {
        let lowerStr = str.toLowerCase();

        return lowerStr.includes('viagra') || lowerStr.includes('xxx');
    }

    alert( checkSpam('buy ViAgRA now') );
    alert( checkSpam('free xxxxx') );
    alert( checkSpam("innocent rabbit") );
    //Task 3
    function truncate(str, maxlength) {
        return (str.length > maxlength) ?
            str.slice(0, maxlength - 1) + '…' : str;
    }
    //Task 4
    function extractCurrencyValue(str) {
        return +str.slice(1);
    }
//Arrays
    //Task 1
    let fruits = ["Apples", "Pear", "Orange"];

    let shoppingCart = fruits;

    shoppingCart.push("Banana");

    alert( fruits.length ); // 4
    //Task 2
    let styles = ["Jazz", "Blues"];
    styles.push("Rock-n-Roll");
    styles[Math.floor((styles.length - 1) / 2)] = "Classics";
    alert( styles.shift() );
    styles.unshift("Rap", "Reggae");
    //Task 3
    let arr = ["a", "b"];

    arr.push(function() {
        alert( this );
    })

    arr[2](); // a,b,function(){...}
    //Task 4
    function sumInput() {

        let numbers = [];
        while (true) {
            let value = prompt("A number please?", 0);
            if (value === "" || value === null || !isFinite(value)) break;
            numbers.push(+value);
        }

        let sum = 0;
        for (let number of numbers) {
            sum += number;
        }
        return sum;
    }

    alert( sumInput() );
    //Task 5
    function getMaxSubSum(arr) {
        let maxSum = 0;
        let partialSum = 0;

        for (let item of arr) { // for each item of arr
        partialSum += item; // add it to partialSum
        maxSum = Math.max(maxSum, partialSum); // remember the maximum
        if (partialSum < 0) partialSum = 0; // zero if negative
        }

        return maxSum;
    }
//Array methods
    //Task 1
    function camelize(str) {
        return str
            .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
            .map(
            // capitalizes first letters of all array items except the first one
            // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
                (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
            )
            .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
    }
    //Task 2
    function filterRange(arr, a, b) {
        // added brackets around the expression for better readability
        return arr.filter(item => (a <= item && item <= b));
    }

    arr = [5, 3, 8, 1];

    let filtered = filterRange(arr, 1, 4);

    alert( filtered ); // 3,1 (matching values)

    alert( arr );
    //Task 3
    function filterRangeInPlace(arr, a, b) {

        for (let i = 0; i < arr.length; i++) {
            let val = arr[i];
        // remove if outside of the interval
            if (val < a || val > b) {
                arr.splice(i, 1);
                i--;
        }
        }
    }

    arr = [5, 3, 8, 1];

    filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

    alert( arr ); // [3, 1]
    //Task 4
    arr = [5, 2, 1, -10, 8];

    arr.sort((a, b) => b - a);

    alert( arr );
    //Task 5
    function copySorted(arr) {
        return arr.slice().sort();
    }

    arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted );
    alert( arr );
    //Task 6
    function Calculator() {

        this.methods = {
            "-": (a, b) => a - b,
            "+": (a, b) => a + b
        };

        this.calculate = function(str) {

            let split = str.split(' '),
                a = +split[0],
                op = split[1],
                b = +split[2];

            if (!this.methods[op] || isNaN(a) || isNaN(b)) {
                return NaN;
            }

            return this.methods[op](a, b);
        };

        this.addMethod = function(name, func) {
            this.methods[name] = func;
        };
    }
    //Task 7
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let users = [ john, pete, mary ];

    let names = users.map(item => item.name);

    alert( names ); // John, Pete, Mary
    //Task 8
    john = { name: "John", surname: "Smith", id: 1 };
    pete = { name: "Pete", surname: "Hunt", id: 2 };
    mary = { name: "Mary", surname: "Key", id: 3 };

    users = [ john, pete, mary ];

    let usersMapped = users.map(user => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id
    }));

    /*
    usersMapped = [
        { fullName: "John Smith", id: 1 },
        { fullName: "Pete Hunt", id: 2 },
        { fullName: "Mary Key", id: 3 }
    ]
    */

    alert( usersMapped[0].id ); // 1
    alert( usersMapped[0].fullName ); // John Smith
    //Task 9
    function sortByAge(arr) {
        arr.sort((a, b) => a.age - b.age);
    }

    john = { name: "John", age: 25 };
    pete = { name: "Pete", age: 30 };
    mary = { name: "Mary", age: 28 };

    arr = [ pete, john, mary ];

    sortByAge(arr);

    alert(arr[0].name); // John
    alert(arr[1].name); // Mary
    alert(arr[2].name); // Pete
    //Task 10
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    let count = {
        '123': 0,
        '132': 0,
        '213': 0,
        '231': 0,
        '321': 0,
        '312': 0
    };

    for (let i = 0; i < 1000000; i++) {
        let array = [1, 2, 3];
        shuffle(array);
        count[array.join('')]++;
    }
    for (let key in count) {
        alert(`${key}: ${count[key]}`);
    }
    //Task 11
    function getAverageAge(users) {
        return users.reduce((prev, user) => prev + user.age, 0) / users.length;
    }

    john = { name: "John", age: 25 };
    pete = { name: "Pete", age: 30 };
    mary = { name: "Mary", age: 29 };

    arr = [ john, pete, mary ];

    alert( getAverageAge(arr) ); // 28
    //Task 12
    function unique(arr) {
        let result = [];

        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }

        return result;
    }

    let strings = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    alert( unique(strings) ); // Hare, Krishna, :-O
    //Task 13
    function groupById(array) {
        return array.reduce((obj, value) => {
            obj[value.id] = value;
            return obj;
        }, {})
    }
//Map and Set
    //Task 1
    function unique(arr) {
        return Array.from(new Set(arr));
    }
    //Task 2
    function aclean(arr) {
        let map = new Map();

        for (let word of arr) {
            // split the word by letters, sort them and join back
            let sorted = word.toLowerCase().split('').sort().join(''); // (*)
            map.set(sorted, word);
        }

        return Array.from(map.values());
    }

    arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    alert( aclean(arr) );
    //Task 3
    let map = new Map();

    map.set("name", "John");

    let keys = Array.from(map.keys());

    keys.push("more");

    alert(keys); // name, more
//WeakMap and WeakSet
    //Task 1
    let messages = [
        {text: "Hello", from: "John"},
        {text: "How goes?", from: "John"},
        {text: "See you soon", from: "Alice"}
    ];

    let readMessages = new WeakSet();

    // two messages have been read
    readMessages.add(messages[0]);
    readMessages.add(messages[1]);// readMessages has 2 elements


    readMessages.add(messages[0]);// readMessages still has 2 unique elements

    alert("Read message 0: " + readMessages.has(messages[0])); // true

    messages.shift();// now readMessages has 1 element (technically memory may be cleaned later)
    //Task 2
    messages = [
        {text: "Hello", from: "John"},
        {text: "How goes?", from: "John"},
        {text: "See you soon", from: "Alice"}
    ];
    let readMap = new WeakMap();

    readMap.set(messages[0], new Date(2017, 1, 1));// Date object we'll study later
//Object.keys, values, entries
    //Task 1
    function sumSalaries(salaries) {

        let sum = 0;
        for (let salary of Object.values(salaries)) {
            sum += salary;
        }

        return sum; // 650
    }

    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };

    alert( sumSalaries(salaries) ); // 650
    //Task 2
    function count(obj) {
        return Object.keys(obj).length;
    }
//Destructuring assignment
    //Task 1
    let user = {
        name: "John",
        years: 30
    };

    let {name, years: age, isAdmin = false} = user;

    alert( name ); // John
    alert( age ); // 30
    alert( isAdmin ); // false
    //Task 2
    function topSalary(salaries) {

        let maxSalary = 0;
        let maxName = null;

        for(const [name, salary] of Object.entries(salaries)) {
            if (maxSalary < salary) {
                maxSalary = salary;
                maxName = name;
            }
        }

        return maxName;
    }
//Date at time
    //Task 1
    //new Date(year, month, date, hour, minute, second, millisecond)
    let d1 = new Date(2012, 1, 20, 3, 12);
    alert( d1 );
    //Task 2
    function getWeekDay(date) {
        let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

        return days[date.getDay()];
    }

    let date = new Date(2014, 0, 3); // 3 Jan 2014
    alert( getWeekDay(date) ); // FR
    //Task 3
    function getLocalDay(date) {

        let day = date.getDay();

        if (day == 0) { // weekday 0 (sunday) is 7 in european
            day = 7;
        }

        return day;
    }
    //Task 4
    function getDateAgo(date, days) {
        let dateCopy = new Date(date);

        dateCopy.setDate(date.getDate() - days);
        return dateCopy.getDate();
    }

    date = new Date(2015, 0, 2);

    alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
    alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
    alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
    //Task 5
    function getLastDayOfMonth(year, month) {
        let date = new Date(year, month + 1, 0);
        return date.getDate();
    }

    alert( getLastDayOfMonth(2012, 0) ); // 31
    alert( getLastDayOfMonth(2012, 1) ); // 29
    alert( getLastDayOfMonth(2013, 1) ); // 28
    //Task 6
    function getSecondsToday() {
        let d = new Date();
        return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
    }

    alert( getSecondsToday() );
    //Task 7
    function getSecondsToTomorrow() {
        let now = new Date();

        // tomorrow date
        let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

        let diff = tomorrow - now; // difference in ms
        return Math.round(diff / 1000); // convert to seconds
    }
    //Task 8
    function formatDate(date) {
        let dayOfMonth = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let diffMs = new Date() - date;
        let diffSec = Math.round(diffMs / 1000);
        let diffMin = diffSec / 60;
        let diffHour = diffMin / 60;

        // formatting
        year = year.toString().slice(-2);
        month = month < 10 ? '0' + month : month;
        dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
        hour = hour < 10 ? '0' + hour : hour;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        if (diffSec < 1) {
            return 'right now';
        } else if (diffMin < 1) {
            return `${diffSec} sec. ago`
        } else if (diffHour < 1) {
            return `${diffMin} min. ago`
        } else {
            return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
        }
    }
//JSON methods, toJSON
    //Task 1
    user = {
        name: "John Smith",
        age: 35
    };

    let user2 = JSON.parse(JSON.stringify(user));
    //Task 2
    let room = {
        number: 23
    };

    let meetup = {
        title: "Conference",
        occupiedBy: [{name: "John"}, {name: "Alice"}],
        place: room
    };

    room.occupiedBy = meetup;
    meetup.self = meetup;

    alert( JSON.stringify(meetup, function replacer(key, value) {
        return (key != "" && value == meetup) ? undefined : value;
    }));

    /*
    {
        "title":"Conference",
        "occupiedBy":[{"name":"John"},{"name":"Alice"}],
        "place":{"number":23}
    }
    */
