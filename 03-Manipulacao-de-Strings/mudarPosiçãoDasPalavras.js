function mudarPosiçãoDasPalavras(letras) {
  let linhas = letras.length;
  let colunas = letras[0].length;

  let resultado = [];

  for (let j = 0; j < colunas; j++) {
    let novaLinha = [];
    for (let i = 0; i < linhas; i++) {
      novaLinha.push(letras[i][j]);
    }
    resultado.push(novaLinha);
  }

  return resultado;
}

// Caso 1
let letras1 = [
  ['c','p','p','r','b'],
  ['a','a','r','a','a'],
  ['s','t','o','t','l'],
  ['a','a','s','o','a']
];
console.log(mudarPosiçãoDasPalavras(letras1));

// Caso 2
let letras2 = [
  ['c','l','a','s','p'],
  ['a','e','m','a','o'],
  ['r','i','i','b','r'],
  ['r','t','g','o','t'],
  ['o','e','o','r','a']
];
console.log(mudarPosiçãoDasPalavras(letras2));

// Caso 3
let letras3 = [
  ['c','f','t','v','p'],
  ['a','r','e','e','a'],
  ['l','u','m','n','r'],
  ['o','t','p','t','a'],
  ['r','a','o','o','1'],
  ['e','s','s','s','o']
];
console.log(mudarPosiçãoDasPalavras(letras3));
