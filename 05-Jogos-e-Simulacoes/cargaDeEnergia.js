function cargaDeEnergia(cargaInicial, cargaPorSegundo, tempoMaximo) {
  const cargaFinal = cargaInicial + (cargaPorSegundo * tempoMaximo);
  return cargaFinal >= 100;
}

console.log(cargaDeEnergia(50, 10, 5));
console.log(cargaDeEnergia(20, 15, 0));
console.log(cargaDeEnergia(30, 0, 3));
