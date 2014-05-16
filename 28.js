var matrix = [],
    size = 1001,
    length = Math.pow(size, 2),
    center = Math.floor(size / 2),
    lastPosition = [center, center],
    repetitions = 1,
    direction = 'right',
    sum = 1;

// Create matrix of 1001 by 1001
for (var i = 0; i < size; ++i) {
  matrix.push([]);
  for (var k = 0; k < size; ++k) {
    matrix[i].push(0);
  }
}

// Iterate in a clockwise direction from the middle
for (var i = 1, x, y, r, d; i < length;) {
  r = repetitions;
  d = direction;

  // Set middle cell to 1
  if (i === 1) matrix[center][center] = i;

  while (r-- > 0) {

    // Check if final cell (and increment iterator)
    if (++i > length) break;

    // Get last position
    x = lastPosition[0];
    y = lastPosition[1];

    // Set number to position
    if (d === 'right') matrix[y][++x] = i;
    if (d === 'bottom') matrix[++y][x] = i;
    if (d === 'left') matrix[y][--x] = i;
    if (d === 'top') matrix[--y][x] = i;

    // Update position
    lastPosition[0] = x;
    lastPosition[1] = y;

    // Increment repetition if last down or up
    if (d === 'top' && r === 0) repetitions++;
    if (d === 'bottom' && r === 0) repetitions++;

    // Next direction to take
    if (d === 'right' && r === 0) direction = 'bottom';
    if (d === 'bottom' && r === 0) direction = 'left';
    if (d === 'left' && r === 0) direction = 'top';
    if (d === 'top' && r === 0) direction = 'right';
  }
}

// Sum diagonals
for (var i = 0, k = size - 1; i < size; ++i, --k) {
  if (i !== center) {
    sum += matrix[i][i]; // top-left to bottom-right
    sum += matrix[i][k]; // top-right to bottom-left
  }
}

console.log(sum);

// Execution time: 70ms
