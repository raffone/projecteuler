function maxPath(data) {

  // Convert multiline string in array and split numbers strings in array
  data = data.split('\n').map(function(el) { return el.split(' ')});

  // Loop through until only one row remains
  while (data.length > 1) {

    // Get reference last row
    var last = data.length - 1;

    // For each element in last arrow
    for (var i = 0, sums; i < data[last].length - 1; ++i) {

      // Sum current and next number with next row
      sums = [];
      sums.push(+data[last][i] + +data[last - 1][i]);
      sums.push(+data[last][i + 1] + +data[last - 1][i]);

      // Change number in next row with the maximum of the two
      data[last - 1][i] = Math.max.apply(null, sums);
    }

    // Delete last row, we don't need it anymore
    data.pop();

  }

  return data;
};

function getPrimes(limit) {
  limit += 1

  var all = [], primes = [], i = 1, j = 2;

  while (i++ <= limit) {
    all.push(true);
  }

  // filter array with the sieve of Eratosthenes
  for (var j = 2, len = all.length; j < all.length; j++) {
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

  return primes
};


function isPrime(n) {
  var list = getPrimes(n)
  if (list[list.length - 1] == n) return true;
  return false
};


module.exports.maxPath = maxPath
module.exports.getPrimes = getPrimes
module.exports.isPrime = isPrime


