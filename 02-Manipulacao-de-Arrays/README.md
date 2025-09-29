# 📋 Manipulação de Arrays

Esta pasta contém scripts que demonstram como trabalhar com arrays em JavaScript.

## 📁 Arquivos Incluídos

### 🔍 `encontrarKthMaior.js`
**Função:** Encontra o k-ésimo maior elemento de um array
- **O que faz:** Ordena o array em ordem decrescente e retorna o elemento na posição k
- **Conceitos aprendidos:**
  - Ordenação de arrays com `sort()`
  - Acesso a elementos por índice
  - Funções de comparação personalizadas
- **Exemplo de uso:** `encontrarKthMaior([3, 2, 1, 5, 6, 4], 2)` retorna `5`

### 🎯 `primeiraOcorrencia.js`
**Função:** Encontra o índice da primeira ocorrência de um elemento
- **O que faz:** Usa `indexOf()` para localizar a posição de um valor
- **Conceitos aprendidos:**
  - Método `indexOf()`
  - Retorno de índices
  - Tratamento de elementos não encontrados
- **Exemplo de uso:** `primeiraOcorrencia([5, 7, 7, 8, 8, 10], 8)` retorna `3`

### 📈 `maiorNumero.js`
**Função:** Encontra o maior número em um array
- **O que faz:** Usa `Math.max()` com spread operator para encontrar o valor máximo
- **Conceitos aprendidos:**
  - Spread operator (`...`)
  - Função `Math.max()`
  - Arrays como argumentos de função
- **Exemplo de uso:** `maiorNumero([3, 8, 1, 9, 5])` retorna `9`

### ✅ `numeroExiste.js`
**Função:** Verifica se um número existe em um array
- **O que faz:** Usa `includes()` para verificar a presença de um elemento
- **Conceitos aprendidos:**
  - Método `includes()`
  - Retorno de valores booleanos
  - Busca em arrays
- **Exemplo de uso:** `numeroExiste(10, [4, 10, 55, 8, 0])` retorna `true`

## 🎯 Objetivos de Aprendizado

- **Métodos de array essenciais:**
  - `sort()` - ordenação
  - `indexOf()` - busca por índice
  - `includes()` - verificação de existência
  - `Math.max()` - valor máximo
- **Manipulação de índices** e posições
- **Ordenação** (crescente e decrescente)
- **Busca e filtragem** de elementos
- **Spread operator** para expandir arrays

## 💡 Dicas para Iniciantes

1. **Entenda os índices:** Arrays começam no índice 0
2. **Pratique ordenação:** Experimente com diferentes tipos de dados
3. **Use console.log():** Sempre teste suas funções para ver os resultados
4. **Pense em casos extremos:** O que acontece com arrays vazios?

## 🔧 Métodos de Array Importantes

```javascript
// Ordenação
array.sort((a, b) => a - b);        // crescente
array.sort((a, b) => b - a);        // decrescente

// Busca
array.indexOf(valor);               // índice da primeira ocorrência
array.includes(valor);              // true/false se existe

// Valores extremos
Math.max(...array);                 // maior valor
Math.min(...array);                 // menor valor
```

## 🚀 Próximos Passos

Depois de dominar estes conceitos, você pode:
- Aprender sobre `filter()`, `map()`, `reduce()`
- Trabalhar com arrays multidimensionais
- Implementar algoritmos de busca mais complexos
- Explorar estruturas de dados como Sets e Maps
