// Temporary solution until I find a way to do it natively (hate this stuff)

var bigInt = require("big-integer");

var result = bigInt(2)
              .pow(1000)
              .value
                .reverse()
                .join('')
                .split('')
                .reduce(function(a, b) { return +a + +b; })

console.log(result);

// Execution time: 15ms
