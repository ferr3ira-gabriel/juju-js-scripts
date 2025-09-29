function extrairValorPorChaveEncadeada(obj, caminho) {
  let chaves = caminho.split(".");
  let atual = obj;

  for (let chave of chaves) {
    if (atual && chave in atual) {
      atual = atual[chave];
    } else {
      return null;
    }
  }

  return atual;
}

console.log(extrairValorPorChaveEncadeada({ a: { b: { c: 10 } } }, "a.b.c"));
console.log(extrairValorPorChaveEncadeada({ d: { e: { f: 20 } } }, "d.e.f"));
console.log(extrairValorPorChaveEncadeada({ a: { b: { c: 15 } } }, "a.b.d"));
