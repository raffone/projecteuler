// Same as 18.js

var fs = require('fs'),
    util = require('util'),
    maxPath = require('./18').maxPath,
    content = fs.readFileSync('67.txt', 'utf8');

// Print result

util.print(maxPath(content));

// Execution time: 8ms
