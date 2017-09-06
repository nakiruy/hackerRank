function minNum(A, K, P) {
    let count = 0
    if (K - A >= P) {
        count++;
    } else if (A + P > K) {
        count = -1;
    }
    return count;
  }

console.log(minNum(3, 5, 1));
console.log(minNum(4, 5, 1));
console.log(minNum(5, 5, 1));