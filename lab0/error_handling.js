//Error handling, "try...catch"
    //Task 1
    function f() {
        try {
            alert('start');
            return "result";
        } catch (err) {
            /// ...
        } finally {
            alert('cleanup!');
        }
    }

    f(); // cleanup!
//Custom errors, extending Error
    //Task 1
    class FormatError extends SyntaxError {
        constructor(message) {
            super(message);
            this.name = this.constructor.name;
        }
    }

    let err = new FormatError("formatting error");

    alert( err.message ); // formatting error
    alert( err.name ); // FormatError
    alert( err.stack ); // stack

    alert( err instanceof SyntaxError ); // true