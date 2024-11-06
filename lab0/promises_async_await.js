//Promise
    //Task 1
    let promise = new Promise(function(resolve, reject) {
        resolve(1);

        setTimeout(() => resolve(2), 1000);
    });

    promise.then(alert);//1
    //Task 2
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    delay(3000).then(() => alert('runs after 3 seconds'));
//Promises chaining
    //Task 1
    promise.then(f1).catch(f2);
    promise.then(f1, f2);// no, they are not equal:
//Error handling with promises
    //Task 1
    new Promise(function(resolve, reject) {
        setTimeout(() => {
            throw new Error("Whoops!");
        }, 1000);
    }).catch(alert);//no, it won't
//Async/await
    //Task 1
    async function loadJson(url) {
        let response = await fetch(url);

        if (response.status == 200) {
            let json = await response.json(); 
            return json;
        }

        throw new Error(response.status);
    }

    loadJson('https://javascript.info/no-such-user.json')
        .catch(alert); // Error: 404
    //Task 2
    class HttpError extends Error {
        constructor(response) {
            super(`${response.status} for ${response.url}`);
            this.name = 'HttpError';
            this.response = response;
        }
    }

    async function loadJson(url) {
        let response = await fetch(url);
        if (response.status == 200) {
            return response.json();
        } else {
            throw new HttpError(response);
        }
    }

    // Ask for a user name until github returns a valid user
    async function demoGithubUser() {

        let user;
        while(true) {
            let name = prompt("Enter a name?", "iliakan");

            try {
                user = await loadJson(`https://api.github.com/users/${name}`);
                break; // no error, exit loop
            } catch(err) {
                if (err instanceof HttpError && err.response.status == 404) {
                    // loop continues after the alert
                    alert("No such user, please reenter.");
                } else {
                // unknown error, rethrow
                throw err;
                }
            }
        }


        alert(`Full name: ${user.name}.`);
        return user;
    }

    demoGithubUser();
    //Task 3
    async function wait() {
        await new Promise(resolve => setTimeout(resolve, 1000));

        return 10;
    }

    function f() {
        // shows 10 after 1 second
        wait().then(result => alert(result));
    }

    f();