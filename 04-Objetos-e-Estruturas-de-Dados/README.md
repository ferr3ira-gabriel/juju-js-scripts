# 🗂️ Objetos e Estruturas de Dados

Esta pasta contém scripts que demonstram como trabalhar com objetos e estruturas de dados em JavaScript.

## 📁 Arquivos Incluídos

### 🔑 `extrairValor.js`
**Função:** Extrai um valor de um objeto usando uma chave
- **O que faz:** Verifica se a chave existe no objeto e retorna o valor ou null
- **Conceitos aprendidos:**
  - Acesso a propriedades de objetos
  - Operador `in` para verificação de propriedades
  - Tratamento de valores não encontrados
- **Exemplo de uso:** `extrairValor({ nome: "Ana", idade: 22 }, "nome")` retorna `"Ana"`

### 🔗 `extrairValorPorChaveEncadeada.js`
**Função:** Extrai valores de objetos aninhados usando chaves encadeadas
- **O que faz:** Navega por um caminho de chaves (ex: "a.b.c") em objetos aninhados
- **Conceitos aprendidos:**
  - Objetos aninhados
  - Navegação por caminhos de propriedades
  - `split()` para dividir strings
  - Iteração com `for...of`
- **Exemplo de uso:** `extrairValorPorChaveEncadeada({ a: { b: { c: 10 } } }, "a.b.c")` retorna `10`

### 🧹 `removerNulos.js`
**Função:** Remove propriedades com valores null de um objeto
- **O que faz:** Cria um novo objeto sem as propriedades que têm valor null
- **Conceitos aprendidos:**
  - Iteração com `for...in`
  - Criação de novos objetos
  - Filtragem de propriedades
  - Comparação com `null`
- **Exemplo de uso:** `removerNulos({ nome: "Ana", idade: null, cidade: "São Paulo" })` retorna `{ nome: "Ana", cidade: "São Paulo" }`

### 👤 `adicionaNomeEIdadeNoObjeto.js`
**Função:** Cria um objeto com propriedades name e age
- **O que faz:** Usa shorthand property syntax para criar objetos
- **Conceitos aprendidos:**
  - Criação de objetos
  - Shorthand property syntax
  - Estruturação de dados
- **Exemplo de uso:** `adicionaNomeEIdadeNoObjeto("Marcos", 12)` retorna `{ name: "Marcos", age: 12 }`

## 🎯 Objetivos de Aprendizado

- **Manipulação de objetos:**
  - Acesso a propriedades com notação de ponto e colchetes
  - Verificação de existência de propriedades
  - Criação e modificação de objetos
- **Estruturas de dados aninhadas:**
  - Navegação em objetos complexos
  - Caminhos de propriedades
- **Filtragem e limpeza de dados:**
  - Remoção de valores indesejados
  - Criação de objetos limpos
- **Sintaxe moderna:**
  - Shorthand properties
  - Destructuring (implícito)

## 💡 Dicas para Iniciantes

1. **Objetos são coleções de pares chave-valor:** Cada propriedade tem um nome e um valor
2. **Use notação de ponto quando possível:** `obj.propriedade` é mais legível que `obj["propriedade"]`
3. **Sempre verifique se propriedades existem:** Evite erros de "undefined"
4. **Pratique com dados reais:** Use informações de pessoas, produtos, etc.

## 🔧 Operações com Objetos

```javascript
// Acesso a propriedades
objeto.propriedade;                 // notação de ponto
objeto["propriedade"];              // notação de colchetes

// Verificação de existência
"propriedade" in objeto;            // true/false
objeto.propriedade !== undefined;   // verificação alternativa

// Criação de objetos
const obj = { nome: "João", idade: 25 };  // literal
const obj2 = { nome, idade };             // shorthand
```

## 🚀 Próximos Passos

Depois de dominar estes conceitos, você pode:
- Aprender sobre destructuring assignment
- Trabalhar com JSON (JavaScript Object Notation)
- Explorar Map e Set para estruturas mais avançadas
- Implementar algoritmos de busca em objetos complexos
- Aprender sobre imutabilidade e spread operator
