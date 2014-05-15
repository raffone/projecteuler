var max = [0, 0], remainders, current;

for (var i = 1000, j; i > 0; --i) {
  j = 1;

  // Initialize array with first remainder
  remainders = [1 % i];

  while (true) {
    current = remainders[remainders.length - 1] * 10 % i;

    // if remainder is already present we found a cycle
    if (remainders.indexOf(current) !== -1) {

      // if length is more the current max
      if (remainders.length > max[1]) {
        max[0] = i;
        max[1] = remainders.length;
      }
      break;
    }

    // Push current remainder to stack
    remainders.push(current);

    // If current remainder is more than the starting number we are done
    if (current >= i) break;
  }

}

console.log(max);

// Execution time: 50ms
