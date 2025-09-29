function encontrarLetrasDoComecoEFim(matriz) {
  let letras = matriz.flat();
  letras.sort();
  return letras[0] + letras[letras.length - 1];
}

console.log(encontrarLetrasDoComecoEFim([['g','z','w','p','e'],['b','m','x','a','h'],['c','q','l','r','s'],['d','n','v','f','k'],['j','y','o','i','t']]));
console.log(encontrarLetrasDoComecoEFim([['z'], ['a']]));
console.log(encontrarLetrasDoComecoEFim([['a','z']]));
