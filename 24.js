function factorial(n) {
  for (var i = n, result = n; i > 1;) result *= --i;
  return result;
}

function permutations(n) {
  var arr = n.split(''),
      len = arr.length,
      total = factorial(arr.length),
      result = [n],
      left, right;

  for (var k = 0; k < total - 1; ++k) {
    var i = len - 1,
        j = len;

    // Left side
    while (i--) {
      if (arr[i] < arr[i + 1]) {
        left = arr[i];
        break;
      }
    }

    // Right side
    while (j--) {
      if (arr[j] > arr[i]) {
        right = arr[j];
        break;
      }
    }

    // Switch values
    arr[i] = right;
    arr[j] = left;

    // Reverse to the right of i
    arr = [].concat(arr.slice(0, i + 1), arr.slice(i + 1).reverse());

    result.push(arr.join(''));
  }

  return result;
}

console.log(permutations('0123456789')[1000000 - 1]);

// Execution time: 3794ms
