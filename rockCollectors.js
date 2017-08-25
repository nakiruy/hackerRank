function get_rock_index(quantity) {
  let original = quantity.slice();
  quantity.sort(function(a, b) {
      return a - b;
  });
  let sum = quantity.map(function(num, i) {
     return num + original[i]; 
  });
  let frequency = {};
  for(var i = 0; i < sum.length; i++) {
      if (frequency[sum[i]]) {
         frequency[sum[i]] += 1 
      } else {
         frequency[sum[i]] = 1
      }
  }
  //return the max of the object and array
  let max = Object.keys(frequency).reduce(function(a, b) {
      return frequency[a] > frequency[b] ? a : b;
  });
  return sum.lastIndexOf(Number(max));
}