var limit = 101,
    i = limit, j = limit,
    tmp_i = 0, tmp_j = 0;

while (i-- > 1) {
  tmp_i += Math.pow(i, 2)
}

while (j-- > 1) {
  tmp_j += j
}

console.log(Math.pow(tmp_j, 2) - tmp_i);
