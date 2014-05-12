// Reference used: http://stackoverflow.com/a/8002423/75684

var fs = require('fs'),
    util = require('util'),
    content = fs.readFileSync('18.txt', 'utf8');

var maxPath = function(data) {

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

// Print result
util.print(maxPath(content));

// export module for use in 67 solution.
module.exports.maxPath = maxPath;

// Execution time: 0ms
