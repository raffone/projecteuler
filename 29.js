// Temporary solution until I find a way to do it natively (hate this stuff)

var bigInt = require('big-integer'),
    combinations = [], limit = 100;

for (var i=2; i <= limit; ++i) {
  for (var j=2; j <= limit; ++j) {
    combinations.push( bigInt(i).pow(j).toString() )
  }
}

combinations = combinations.sort().filter(function(el, i, arr){ return el !== arr[i+1]; })

console.log(combinations.length)

// Execution time: 7806ms <- yep, horrible i know
