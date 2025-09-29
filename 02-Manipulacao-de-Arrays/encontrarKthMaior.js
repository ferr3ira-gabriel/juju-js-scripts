function encontrarKthMaior(array, k) {
  array.sort((a, b) => b - a);
  return array[k - 1];
}

console.log(encontrarKthMaior([3, 2, 1, 5, 6, 4], 2));
console.log(encontrarKthMaior([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
console.log(encontrarKthMaior([1], 1));
