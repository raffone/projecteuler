var getPrimes = require('./utilities').getPrimes;

var primes = getPrimes(1000)
              .map(function(el) { return 0 - el })
              .reverse()
              .concat(getPrimes(1000));

function euler(n, a, b) {
  return (n * n) + (a * n) + b;
}

function getSequence(a, b) {
  var result = [], tmp = [], k = 0;

  while (true) {
    tmp = euler(k++, a, b);
    if (primes.indexOf(tmp) !== -1) {
      result.push(tmp);
    } else {
      break;
    }
  }

  return result;
}

var testing = [], len, max = [0, 0, 0, []];

for (var i = 0; i < primes.length; ++i) {
  for (var j = 0; j < primes.length; ++j) {
    len = getSequence(primes[i], primes[j]);

    if (len.length > max[2]) {
      max[0] = primes[i];
      max[1] = primes[j];
      max[2] = len.length;
    }
  }
}

console.log(max[0] * max[1]);

// Execution time: 170ms
