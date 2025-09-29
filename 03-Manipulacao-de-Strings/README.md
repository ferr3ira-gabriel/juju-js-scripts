# 📝 Manipulação de Strings

Esta pasta contém scripts que demonstram como trabalhar com strings (texto) em JavaScript.

## 📁 Arquivos Incluídos

### 🔍 `verificaInicioOuFim.js`
**Função:** Verifica se uma string começa ou termina com uma substring específica
- **O que faz:** Usa `startsWith()` e `endsWith()` para analisar o início e fim de strings
- **Conceitos aprendidos:**
  - Métodos `startsWith()` e `endsWith()`
  - Lógica condicional complexa
  - Interpolação de strings
- **Exemplo de uso:** `verificaInicioOuFim("Olá, mundo!", "Olá")` retorna informações sobre início/fim

### 🔎 `contemPalavra.js`
**Função:** Verifica se uma string contém uma palavra específica (case-insensitive)
- **O que faz:** Converte ambas as strings para minúsculas e usa `includes()`
- **Conceitos aprendidos:**
  - Método `includes()`
  - `toLowerCase()` para normalização
  - Busca case-insensitive
- **Exemplo de uso:** `contemPalavra("Eu amo JavaScript", "javascript")` retorna `true`

### 🔤 `transformarPalavraEmMinuscula.js`
**Função:** Converte uma string para minúsculas
- **O que faz:** Usa `toLowerCase()` para transformar texto
- **Conceitos aprendidos:**
  - Método `toLowerCase()`
  - Transformação de strings
- **Exemplo de uso:** `transformarPalavraEmMinuscula("CASA")` retorna `"casa"`

### 📝 `organizarFrase.js`
**Função:** Organiza palavras em uma frase baseada em suas posições numéricas
- **O que faz:** Ordena um array de [palavra, posição] e junta as palavras
- **Conceitos aprendidos:**
  - Ordenação por propriedade específica
  - `map()` para extrair dados
  - `join()` para concatenar strings
- **Exemplo de uso:** `organizarFrase([["mundo", 2], ["Olá ", 1]])` retorna `"Olá mundo"`

### 🔄 `mudarPosicaoDasPalavras.js`
**Função:** Transpõe uma matriz de caracteres (linhas viram colunas)
- **O que faz:** Converte uma matriz de linhas em uma matriz de colunas
- **Conceitos aprendidos:**
  - Manipulação de matrizes 2D
  - Loops aninhados
  - Transposição de matrizes
- **Exemplo de uso:** Transpõe uma matriz de letras

### 🔤 `encontrarLetrasDoComecoEFim.js`
**Função:** Encontra a primeira e última letra de uma matriz de caracteres
- **O que faz:** Achata a matriz, ordena e retorna a primeira e última letra
- **Conceitos aprendidos:**
  - `flat()` para achatar arrays
  - Ordenação de caracteres
  - Acesso ao primeiro e último elemento
- **Exemplo de uso:** `encontrarLetrasDoComecoEFim([['g','z'],['b','m']])` retorna `"bg"`

## 🎯 Objetivos de Aprendizado

- **Métodos de string essenciais:**
  - `toLowerCase()` - conversão para minúsculas
  - `includes()` - busca de substring
  - `startsWith()` e `endsWith()` - verificação de início/fim
  - `join()` - concatenação de arrays
- **Manipulação de texto** e normalização
- **Busca e verificação** em strings
- **Trabalho com matrizes** de caracteres
- **Ordenação e organização** de dados

## 💡 Dicas para Iniciantes

1. **Strings são imutáveis:** Métodos como `toLowerCase()` retornam uma nova string
2. **Case sensitivity:** JavaScript diferencia maiúsculas de minúsculas
3. **Use console.log():** Sempre teste suas transformações de string
4. **Pratique com textos reais:** Use frases do seu dia a dia

## 🔧 Métodos de String Importantes

```javascript
// Conversão de caso
string.toLowerCase();               // minúsculas
string.toUpperCase();               // maiúsculas

// Busca
string.includes(substring);         // contém substring
string.startsWith(prefix);          // começa com
string.endsWith(suffix);            // termina com

// Manipulação
string.split(separador);            // divide em array
array.join(separador);              // une array em string
```

## 🚀 Próximos Passos

Depois de dominar estes conceitos, você pode:
- Aprender sobre expressões regulares (regex)
- Trabalhar com formatação de texto
- Implementar algoritmos de busca de texto
- Explorar bibliotecas como Lodash para manipulação avançada
