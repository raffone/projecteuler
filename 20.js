// Temporary solution until I find a way to do it natively (hate this stuff)

var bigInt = require("big-integer");

for (var start = 100, i = start, result = bigInt(1); i > 0; i--) {
  result = result.multiply(i);
}

result = result.value.join('').split('').reduce(function(a, b) { return +a + +b })

console.log(result);

// Execution time: 15ms
