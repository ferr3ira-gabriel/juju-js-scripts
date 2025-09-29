function removerNulos(obj) {
  let resultado = {};
  for (let chave in obj) {
    if (obj[chave] !== null) {
      resultado[chave] = obj[chave];
    }
  }
  return resultado;
}

console.log(removerNulos({ nome: "Ana", idade: null, cidade: "São Paulo" }));
console.log(removerNulos({ nome: null, idade: 22, cidade: "São Paulo" }));
console.log(removerNulos({ nome: "Ana", idade: 24, cidade: null }));
