var numbers = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
  1000: 'onethousand'
};

function getLength(n) {

  var arr = n.toString().split('').reverse().map(function(el) { return +el}),
  answer = [];

  if (n < 10 || n === 1000) return numbers[n].length;

    for (var i = 0; i < arr.length; ++i) {
      // check first digit
      if (i === 0) {

        // if next digit is > 1 then it's a composite word
        if (arr[1] > 1) {
          answer.push(numbers[arr[0]]);
          answer.push(numbers[arr[1] * 10]);

        // ...else pick from 1 to 20
        } else {
          answer.push(numbers[arr[1] * 10 + arr[0]]);
        }
      }

      // Check if is more than one hundred
      if (i === 2) {

        if (arr[0] + arr[1] !== 0) {
          answer.push('and');
        }

        answer.push(numbers[arr[2]] + numbers[100]);

      }
    }

    // reverse and join sentence, count chars
    return answer.reverse().join('').length;
}

// Sum n of chars for all numbers from 1 to 1000
for (var j = 1, result = 0; j <= 1000; ++j) {
  result += getLength(j);
}

console.log(result);

// Execution time: 8ms
