function receivesAFunction(callback) {
  callback(); // Call the callback function
}

function returnsANamedFunction() {
    return function namedFunction() {
      // code to execute
    }
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      // code to execute
    }
  }