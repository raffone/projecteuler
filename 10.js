var all = [], primes = [], result, limit = 2000000, i = 1, j = 2;

// array with 2000000 elements
while (i++ < limit) {
  all.push(true);
}

// filter array with the sieve of Eratosthenes
for (var j = 2, len = all.length; j < len; j++) {
  if (j > Math.sqrt(limit)) break;
  if (all[j]) {
    for (var k = j + j; k < len; k += j) {
      all[k] = false;
    }
  }
}

// push all true values to primes array
for (var j = 0, len = all.length; j < len; j++) {
  if (j > 1 && all[j]) {
    primes.push(j);
  }
}

// Sum all values
result = primes.reduce(function(a, b) { return a + b; });

console.log(result);

// Execution time: 385ms
