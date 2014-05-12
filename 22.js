var fs = require('fs'),
    content = fs.readFileSync('22.txt', 'utf8').replace(/"/g, '').split(',').sort(),
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    values = {};

// Assign value for each letter
for (var i = 0, slice; i < alphabet.length;) {
  slice = alphabet.substr(i, 1);
  values[slice] = ++i;
}

for (var i = 0, tmp; i < content.length; ++i) {

  // Get sum of word's letters value
  content[i] = content[i]
                .split('')
                .map(function(el) { return values[el]})
                .reduce(function(a, b) { return a + b });

  // Multiply to iterator value to get score
  content[i] *= i + 1;

}

console.log(content.reduce(function(a, b) { return a + b }));

// Execution time: 29ms
