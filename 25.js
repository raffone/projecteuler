// Temporary solution until I find a way to do it natively (hate this stuff)

var bigInt = require('big-integer');

// Create limit number of 1000 digits
for (var i = 1, limit = [1]; i < 1000; ++i) {
  limit.push(0);
}

limit = bigInt(limit.join(''));

function fib() {
  var current = bigInt(1),
      before = bigInt(1),
      result = bigInt(2), // sum of first 2 terms
      iter = 2; // start from 2th term

  while (bigInt(result).lesser(limit)) {
    result = bigInt(current).add(before);
    before = bigInt(current);
    current = bigInt(result);

    iter++;
  }

  return iter;
}

console.log(fib());

// Execution time: 105ms

