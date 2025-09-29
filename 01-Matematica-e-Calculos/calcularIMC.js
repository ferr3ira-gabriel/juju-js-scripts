function calcularIMC(matriz) {
  function classificarIMC(imc) {
    if (imc <= 18.5) return "Abaixo do normal";
    if (imc <= 24.9) return "Peso normal";
    if (imc <= 29.9) return "Sobrepeso";
    if (imc <= 34.9) return "Obesidade grau 1";
    if (imc <= 39.9) return "Obesidade grau 2";
    return "Obesidade grau 3";
  }

  let resultado = matriz.map(([nome, peso, altura, idade]) => {
    let imc = peso / (altura * altura);
    return {
      nome: nome,
      imc: imc.toFixed(2),              // formata com 2 casas decimais em string
      classificacao: classificarIMC(imc),
      idade: idade
    };
  });

  resultado.sort((a, b) => parseFloat(a.imc) - parseFloat(b.imc));

  return resultado;
}

let entrada = [
  ["Carlos", 75, 1.80, 45],
  ["José", 90, 1.70, 40],
  ["Maria", 55, 1.65, 32]
];

console.log(calcularIMC(entrada));
