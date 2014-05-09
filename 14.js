function getSequence(n) {
  var counter = 1;
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
    counter++;
  }
  return counter;
}

for (var i = 0, max = [0,0]; i < 1000000; ++i) {

  // Check if current sequence length is higher and previous one
  if (getSequence(i) > max[1]) {

    // If true update max values
    max[0] = i;
    max[1] = getSequence(i);
  }
}

console.log(max);

// Execution time: 2640ms
