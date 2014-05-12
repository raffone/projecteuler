// Same as 18.js

var fs = require('fs'),
    util = require('util'),
    module = require('./18'),
    content = fs.readFileSync('67.txt', 'utf8');

// Print result

util.print(module.maxPath(content));

// Execution time: 8ms
