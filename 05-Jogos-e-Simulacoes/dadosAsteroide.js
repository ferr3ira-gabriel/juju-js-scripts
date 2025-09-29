function dadosAsteroide(dados) {
  let [nome, vel, dist, diam] = dados.split(",").map(v => v.trim());

  vel = parseInt(vel);
  dist = parseFloat(dist);
  diam = parseInt(diam);

  let risco = "Baixo";

  if (dist < 10 || vel > 50000) {
    risco = "Alto";
  } else if (vel > 30000 && vel <= 50000 && dist >= 10) {
    risco = "Moderado";
  }

  // Aumentar risco se diâmetro > 500m
  if (diam > 500) {
    if (risco === "Baixo") risco = "Moderado";
    else if (risco === "Moderado") risco = "Alto";
  }

  return {
    asteroide: nome,
    velocidadeKmh: vel,
    distanciaMilhoesKm: dist.toFixed(2),
    diametroMetros: diam,
    risco: risco
  };
}

console.log(dadosAsteroide("Apophis, 50000, 20, 450"));
