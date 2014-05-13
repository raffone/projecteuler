function getFactors(n) {
  var result = [1];

  for (var i = 2; i < Math.floor(Math.sqrt(n)) + 1; i++) {
    if (n % i === 0) {
      result.push(i, n / i);
    }
  }

  return result
          .sort(function(a, b) { return a - b })
          .filter(function(el, i, arr) { return el != arr[i + 1] })
          .reduce(function(a, b) { return a + b });
}

var ab = [], numbers = {}, limit = 28123, result = [];

// Find all abundant numers
for (var i = 12; i <= limit; ++i) {
  if (getFactors(i) > i) ab.push(i);
}

// Prepare object with all true values from 1 to limit
for (var i = 1; i <= limit; ++i) {
  numbers[i] = true;
}

// Sum abundant numbers and set the related key in the object to false
for (var i = 0; i < ab.length; ++i) {
  for (var j = i; j < ab.length; ++j) {
    var sum = ab[i] + ab[j];
    if (sum > limit) break;
    numbers[sum] = false;
  }
}

// Push to result array all valid numbers
for (var key in numbers) {
  if (numbers[key]) result.push(+key);
}

console.log(result.reduce(function(a, b) { return a + b }));

// Execution time: 1ms
