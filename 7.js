var primes = [2];

function isPrime(n) {

  for (var i = 0; i < primes.length; i++) {
    if (n % primes[i] === 0) return false
  }

  primes.push(n);

  return true
}

var j = 3;

while (true) {
  isPrime(j++);
  if (primes.length === 10001) break;
}

console.log(primes[10000]);
