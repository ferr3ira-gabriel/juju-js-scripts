function testeDeAtaque(valorDado, modificador, dificuldade) {
  return (valorDado + modificador) >= dificuldade;
}

console.log(testeDeAtaque(12, 3, 15));
console.log(testeDeAtaque(7, 2, 12));
console.log(testeDeAtaque(19, -2, 18));
