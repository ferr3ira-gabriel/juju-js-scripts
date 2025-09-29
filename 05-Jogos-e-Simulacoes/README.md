# 🎮 Jogos e Simulações

Esta pasta contém scripts que simulam sistemas de jogos e cenários interativos.

## 📁 Arquivos Incluídos

### 🚀 `dadosAsteroide.js`
**Função:** Simula análise de risco de asteroides baseada em velocidade, distância e diâmetro
- **O que faz:** 
  - Recebe dados de um asteroide (nome, velocidade, distância, diâmetro)
  - Calcula nível de risco (Baixo, Moderado, Alto)
  - Considera múltiplos fatores para determinar o perigo
- **Conceitos aprendidos:**
  - Destructuring assignment
  - Lógica condicional complexa
  - Análise de múltiplos critérios
  - Formatação de números decimais
- **Exemplo de uso:** `dadosAsteroide("Apophis, 50000, 20, 450")` retorna objeto com análise de risco

### ⚡ `cargaDeEnergia.js`
**Função:** Simula sistema de carga de energia com tempo limite
- **O que faz:** 
  - Calcula se a energia final será suficiente (≥100)
  - Considera carga inicial, taxa por segundo e tempo máximo
  - Retorna true/false se a carga será adequada
- **Conceitos aprendidos:**
  - Cálculos com múltiplas variáveis
  - Simulação de sistemas
  - Lógica de negócio
- **Exemplo de uso:** `cargaDeEnergia(50, 10, 5)` verifica se a energia será suficiente

### ⚔️ `testeDeAtaque.js`
**Função:** Simula sistema de teste de ataque de RPG
- **O que faz:** 
  - Combina valor do dado com modificador
  - Compara com dificuldade para determinar sucesso
  - Simula mecânica de RPG clássica
- **Conceitos aprendidos:**
  - Sistemas de RPG
  - Combinação de valores aleatórios e fixos
  - Lógica de sucesso/falha
- **Exemplo de uso:** `testeDeAtaque(12, 3, 15)` simula um teste de ataque

## 🎯 Objetivos de Aprendizado

- **Sistemas de simulação:**
  - Modelagem de cenários do mundo real
  - Análise de múltiplos fatores
  - Cálculos baseados em regras
- **Lógica de jogos:**
  - Sistemas de RPG
  - Mecânicas de sucesso/falha
  - Simulação de recursos
- **Análise de dados:**
  - Processamento de entrada complexa
  - Classificação baseada em critérios
  - Formatação de resultados

## 💡 Dicas para Iniciantes

1. **Pense em regras do mundo real:** Como funcionam os sistemas que você está simulando?
2. **Teste com valores extremos:** O que acontece com valores muito altos ou baixos?
3. **Documente as regras:** Escreva comentários explicando a lógica
4. **Experimente diferentes cenários:** Teste vários casos de uso

## 🎲 Conceitos de Jogos e Simulações

```javascript
// Sistema de risco (como no asteroide)
if (critério1 || critério2) {
    risco = "Alto";
} else if (critério3 && critério4) {
    risco = "Moderado";
} else {
    risco = "Baixo";
}

// Sistema de teste (como no RPG)
const resultado = valorDado + modificador;
const sucesso = resultado >= dificuldade;

// Sistema de recursos (como na energia)
const valorFinal = valorInicial + (taxa * tempo);
const adequado = valorFinal >= limite;
```

## 🚀 Próximos Passos

Depois de dominar estes conceitos, você pode:
- Implementar sistemas de RPG mais complexos
- Criar simuladores de física simples
- Desenvolver jogos de texto
- Trabalhar com geração de números aleatórios
- Explorar bibliotecas de jogos como Phaser.js
