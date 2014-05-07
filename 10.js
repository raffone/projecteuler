var primes = [2], result, limit = 2000000, len = 0;

function isPrime(n) {

  for (var i = 0; i < primes.length; i++) {
    if (n % primes[i] === 0) return false
  }

  len = primes.push(n) - 1;

  return true
}

var j = 3;

while (primes[len] < limit) {
  isPrime(j++);
}

primes.pop()
result = primes.reduce(function(a,b) { return a + b; })

console.log(result);

