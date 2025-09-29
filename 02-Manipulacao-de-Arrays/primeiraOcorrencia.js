function primeiraOcorrencia(nums, target) {
  return nums.indexOf(target);
}

console.log(primeiraOcorrencia([5, 7, 7, 8, 8, 10], 8));
console.log(primeiraOcorrencia([5, 7, 7, 8, 8, 10], 6));
console.log(primeiraOcorrencia([1, 2, 3, 3, 3, 4, 5], 3));