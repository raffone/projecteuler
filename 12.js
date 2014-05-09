var j = 1, k, current;

function getTriangle(n) {
  for (var i = 0, sum = 0; i <= n; ++i) sum += i;
  return sum
}

while(true) {
  current = getTriangle(j++);
  k = 1;
  count = 0;

  while (k < Math.sqrt(current)) {
    if (current % k++ === 0 ) {
      count += 2;
    }
  }

  if (count > 500 ) {
    console.log(current);
    break;
  }

}

// Execution time: 607ms
