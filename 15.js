function countPaths(n) {

  // Good ol' Pascal's triangle
  for (var i = 0, j = 0, triangle = [[1], [1, 1]], sum, len = n * 2 + 1; i < len; ++i) {

    if (i > 1) {

      j = triangle[i - 1].length;

      // Create new array
      triangle.push([]);

      // Add first 1
      triangle[i].push(1);

      // For each couple of numbers of the previous row
      while (--j > 0) {

        // Sum them...
        sum = triangle[i - 1][j - 1] + triangle[i - 1][j];

        // ...and push to array
        triangle[i].push(sum);
      }

      // Add last 1
      triangle[i].push(1);

    }
  }

  // Get max value from last array containing the answer
  return Math.max.apply(null, triangle[triangle.length - 1]);
}

console.log(countPaths(20));

// Execution time: 0ms
