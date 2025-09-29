function verificaInicioOuFim(texto, substring) {
  const comeca = texto.startsWith(substring);
  const termina = texto.endsWith(substring);

  if (comeca && termina) {
    return `Sim, começa e termina com "${substring}"`;
  } else if (comeca) {
    return `Sim, começa com "${substring}"`;
  } else if (termina) {
    return `Sim, termina com "${substring}"`;
  } else {
    return `Não começa nem termina com "${substring}"`;
  }
}

console.log(verificaInicioOuFim("Olá, mundo!, de novo Olá", "Olá"));
console.log(verificaInicioOuFim("O miserável é um miserável!", "um"));
console.log(verificaInicioOuFim("Envelhecer e morrer é o que dá sentido e beleza ao tempo fugaz de uma vida humana", "humana"));
