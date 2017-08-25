function leftRotation(n, d) {
  for (var i = 0; i < d; i++) {
    let firstElement = n[0];
    n.shift();
    n.push(firstElement);
  }
  return n;
}