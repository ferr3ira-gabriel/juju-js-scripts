function extrairValor(obj, chave) {
  if (chave in obj) {
    return obj[chave];
  }
  return null;
}

console.log(extrairValor({ nome: "Ana", idade: 22 }, "nome"));
console.log(extrairValor({ nome: "José", idade: 32 }, "idade"));
console.log(extrairValor({ a: 10, b: 20 }, "c"));
