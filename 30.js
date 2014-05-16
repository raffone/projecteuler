var result = [],
    power = 5,
    min = Math.pow(1, power) * power,
    max = Math.pow(9, power) * power;

for (var i = min, tmp; i < max; ++i) {
  tmp = i.toString()
         .split('')
         .map(function(el) { return Math.pow(el, power) })
         .reduce(function(a, b) { return a + b });

  if (tmp === i) result.push(i);
}

console.log(result.reduce(function(a, b) { return a + b }));

// Execution time: 800ms
