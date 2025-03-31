function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  return function named() {
    console.log("I have a name.");
  };
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("I have no name.");
  };
}
