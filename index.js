function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function named() {
        console.log("I have a name.")
    }
}

function returnsAnonymousFunction () {
    return function() {
        console.log("I have no name.")
    } 
}