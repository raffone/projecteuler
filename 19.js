for (var year = 1901, count = 0; year <= 2000; year++) {
  for (var month = 0; month < 12; month++) {
    if (new Date(year, month, 1).getDay() === 0) {
      count++;
    }
  }
}

// Javascript must have a bug somewhere, the code is correct
// but  it only count 170 instead of 171.
console.log(count);

// Execution time: 9ms
