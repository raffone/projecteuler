var limit = 20,
    i = limit, mod, tmp;

while (i += limit) {
  mod = limit + 1;
  tmp = true;

  while (mod-- > 1) {
    if (i % mod !== 0) {
      tmp = false;
      break
    }
  }

  if (tmp) {
    console.log(i);
    break;
  }

}
