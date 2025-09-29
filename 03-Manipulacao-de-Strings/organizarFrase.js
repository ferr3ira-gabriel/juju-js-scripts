function organizarFrase(matriz) {
  matriz.sort((a, b) => a[1] - b[1]);
  return matriz.map(item => item[0]).join("").trim();
}

console.log(organizarFrase([["mundo", 2], ["Olá ", 1]]));

console.log(organizarFrase([["futuros ", 2], ["Somos ", 1], ["cresceres", 3]]));

console.log(organizarFrase([
  ["O ", 1],
  ["roeu ", 3],
  ["roupa ", 5],
  ["a ", 4],
  ["rato ", 2],
  ["rei ", 7],
  ["Roma", 9],
  ["do ", 6],
  ["de ", 8]
]));
