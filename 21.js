function getFactors(n) {
  var result = [1];

  for (var bottom = 2, top = n; bottom < top; bottom++) {
    for (var i = top; i > bottom; i--) {
      if (bottom * i == n) {
        top = i;
        result.push(bottom, top);
        break;
      }
    }
  }

  return result.reduce(function(a, b) { return a + b});
}

var sums = {}, fact = [], tmp_1, tmp_2;

for (var i = 1; i <= 10000; ++i) {
  sums[i] = getFactors(i);
}

for (var i = 0; i < 10000; ++i) {
  if (i !== fact[fact.length - 1]) {
    tmp_1 = sums[i];      // Sum of factor for current number
    tmp_2 = sums[tmp_1];  // Get factor of sum of factor

    // [1] Check if is not a prime number
    //  |             [2] Check s is not the same number (es: 6 or 28)
    //  |              |             [3] Check if is an amicable number
    //  |              |              |
    if (tmp_1 !== 1 && i !== tmp_1 && i === tmp_2) {
      fact.push(i, tmp_1);
    }
  }

}

console.log(fact.reduce(function(a, b) {return a + b }));

// Execution time: 39512ms  <- Yep, I need to revisit this one
