function fatorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    return "Digite um número inteiro positivo";
  }
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(fatorial(5.3));
console.log(fatorial(3));
console.log(fatorial(4));
