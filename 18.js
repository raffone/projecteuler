// readfile
fs = require('fs');
fs.readFile('18.txt', 'utf8', function(err, data) {
  if (err) return console.log(err);
  sum(data);

});


function sum(data) {
  data = data.split('\n').map(function(el) { return el.split(' ')});

  var last = 0, path = [], max = 0;

  for (var i = 0; i < data.length; ++i) {

    if (data[i].length === 1) {
      path.push(data[i][0]);
      last = 0;

    } else {
      max = +data[i][last] > +data[i][last + 1] ? last : last + 1;
      path.push(data[i][max]);
      last = max;
    }

  }

  path = path.reduce(function(a, b) { return +a + +b; });

  console.log(path);
}











// Execution time: 8ms
