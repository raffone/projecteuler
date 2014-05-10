var n = 600851475143;

function prime_factors(n) {
    var factors = [];
    var d = 2;

    while (n > 1) {
        while (n % d == 0) {
            factors.push(d);
            n /= d;
        }

        d = d + 1;

        if (d * d > n) {
            if (n > 1) factors.push(n);
            break;
        }
    }

    return factors;
}

console.log(prime_factors(600851475143));

// Execution time: 0ms
