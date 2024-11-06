//Generators
    //Task 1
    function* pseudoRandom(seed) {
        let value = seed;

        while(true) {
            value = value * 16807 % 2147483647;
            yield value;
        }

    };

    let generator = pseudoRandom(1);

    alert(generator.next().value); 
    alert(generator.next().value); 
    alert(generator.next().value); 
