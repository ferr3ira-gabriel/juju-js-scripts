function numeroExiste(x, array) {
  return array.includes(x);
}

console.log(numeroExiste(10, [4, 10, 55, 8, 0]));
console.log(numeroExiste(-55, [9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(numeroExiste(1, [1]));
