var limit = 1000,
    a, b, c, tmp;

for (a = 1; a < limit; a++) {
  for (b = a+1; b < limit; b++) {
    for (c = b+1; c < limit; c++) {
      if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) && a + b + c === 1000) {
        console.log(a + ' ' + b + ' ' + c);
      }
    }
  }
}

// Execution time: 783ms
