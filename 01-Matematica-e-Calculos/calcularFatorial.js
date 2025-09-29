function calcularFatorial(n) {
  if (n < 0) {
    return "Número inválido";
  }
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(calcularFatorial(5));
console.log(calcularFatorial(1000000));
console.log(calcularFatorial(-1));
