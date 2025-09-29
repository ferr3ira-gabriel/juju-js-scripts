function contemPalavra(texto, palavra) {
  return texto.toLowerCase().includes(palavra.toLowerCase());
}

console.log(contemPalavra("Eu amo JavaScript", "JavaScript"));
console.log(contemPalavra("A vida é como uma caixa de chocolates. Você nunca sabe o que vai encontrar", "bombons"));
console.log(contemPalavra("Que a Força esteja com você", "força"));
