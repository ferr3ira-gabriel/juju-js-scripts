# 📊 Matemática e Cálculos

Esta pasta contém scripts que demonstram operações matemáticas e cálculos diversos em JavaScript.

## 📁 Arquivos Incluídos

### 🏥 `calcularIMC.js`
**Função:** Calcula o Índice de Massa Corporal (IMC) para uma lista de pessoas
- **O que faz:** Recebe uma matriz com dados de pessoas (nome, peso, altura, idade) e calcula o IMC de cada uma
- **Conceitos aprendidos:** 
  - Manipulação de arrays com `map()`
  - Cálculos matemáticos
  - Ordenação de arrays com `sort()`
  - Formatação de números decimais
- **Exemplo de uso:** `calcularIMC([["Carlos", 75, 1.80, 45], ["José", 90, 1.70, 40]])`

### 🔢 `calcularFatorial.js`
**Função:** Calcula o fatorial de um número usando loop
- **O que faz:** Calcula n! (n fatorial) de forma iterativa
- **Conceitos aprendidos:**
  - Loops `for`
  - Validação de entrada (números negativos)
  - Operadores de multiplicação
- **Exemplo de uso:** `calcularFatorial(5)` retorna `120`

### 🔢 `fatorial.js`
**Função:** Versão alternativa do cálculo de fatorial com validação aprimorada
- **O que faz:** Calcula fatorial com verificação de números inteiros
- **Conceitos aprendidos:**
  - `Number.isInteger()` para validação
  - Tratamento de diferentes tipos de entrada
- **Exemplo de uso:** `fatorial(4)` retorna `24`

### 🌡️ `converterParaFahrenheit.js`
**Função:** Converte temperatura de Celsius para Fahrenheit
- **O que faz:** Aplica a fórmula de conversão: F = (C × 9/5) + 32
- **Conceitos aprendidos:**
  - Fórmulas matemáticas
  - Operações aritméticas
- **Exemplo de uso:** `converterParaFahrenheit(20)` retorna `68`

## 🎯 Objetivos de Aprendizado

- **Operações matemáticas básicas** (soma, subtração, multiplicação, divisão)
- **Manipulação de números** (formatação, validação, conversão)
- **Estruturas de controle** (loops, condicionais)
- **Funções matemáticas** (fatorial, conversões)
- **Validação de entrada** (números negativos, tipos de dados)

## 💡 Dicas para Iniciantes

1. **Comece simples:** Teste cada função com valores pequenos primeiro
2. **Entenda as fórmulas:** Leia sobre IMC e conversão de temperatura para entender o contexto
3. **Pratique com loops:** O fatorial é um ótimo exemplo para entender loops
4. **Valide sempre:** Sempre verifique se os dados de entrada são válidos

## 🚀 Próximos Passos

Depois de dominar estes conceitos, você pode:
- Explorar funções matemáticas mais avançadas
- Aprender sobre recursão (fatorial recursivo)
- Trabalhar com bibliotecas matemáticas como Math.js
- Implementar calculadoras mais complexas
