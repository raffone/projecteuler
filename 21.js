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

var fact = [], tmp_1, tmp_2;

for (var j = 0; j < 10000; ++j) {
  if (j !== fact[fact.length - 1]) {
    tmp_1 = getFactors(j);      // Sum of factor fro current number
    tmp_2 = getFactors(tmp_1);  // Get factor of sum of factor

    // [1] Check if is not a prime number
    //  |             [2] Check s is not the same number (es: 6 or 28)
    //  |              |             [3] Check if is an amicable number
    //  |              |              |
    if (tmp_1 !== 1 && j !== tmp_1 && j === tmp_2) {
      fact.push(j, tmp_1);
    }
  }

}

console.log(fact.reduce(function(a, b) {return a + b }));

// Execution time: 46618ms  <- Yep, I need to revisit this one
