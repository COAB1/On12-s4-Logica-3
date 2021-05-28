# Lógica aplicada - Arrays, Objetos e Métodos 🚀

**Semana 4 – Resolução de Problemas/Lógica aplicada e JavaScript (sintaxe básica)**

## Sumário

1. [Objetos](#objetos)
2. [Arrays](#arrays)
3. [Métodos de iteração](#métodos-de-iteração)
4. [Extra: Introdução a Programação Orientada a Objeto com JS](#poo-com-javascript-introdução)
5. [Ferramentas da semana: readline e nodemon](#readline-e-nodemon)

### Chamada, apresentação das monitoras e acordos
<img src="https://i.pinimg.com/474x/b4/17/86/b41786b5e7627ed0c678a0ef4a62e9f6.jpg" alt="video chamada" width="200">

* Usar as reações do zoom e levantar a mão para sinalizar que gostaria de falar
* Enviar as dúvidas no chat
* Manter microfone desligado quando outras pessoas estiverem falando
* Manter câmera ligada o máximo possível
* Momento mão no código, momento de olho na tela

<br>
---

## Objetos

Objeto é um tipo de dado que contém uma coleção de propriedades organizadas em pares de chave (ou nome) e valor, sendo o valor qualquer tipo de dado (número, texto, função ou até mesmo outro objeto).

### Inicializando objetos

Para criar um novo Objeto, podemos atribuir a uma variável uma lista de elementos entre chaves, separados por vírgula e com a notação de `chave : valor`. Também é possível utilizando a palavra reservada `new` ou a partir de uma função.

```javascript
const pessoa = {
  nome: 'Ariel',
  idade: 25,
  profissao: 'desenvolvedora',
};
```

```javascript
const pessoa = new Object();

pessoa.nome = 'Ariel';
pessoa.idade = 25;
pessoa.profissao = 'desenvolvedora';
```

### Acessando valores

Notação de ponto

```javascript
const pessoa = {
  nome: 'Ariel',
  idade: 25,
  profissao: 'desenvolvedora',
};

console.log(pessoa.nome); // Ariel
console.log(pessoa.idade); // 25
console.log(pessoa.profissao); // desenvolvedora
```

Notação de colchetes (ou índice)

```javascript
const pessoa = {
  nome: 'Ariel',
  idade: 25,
  profissao: 'desenvolvedora',
};

console.log(pessoa['nome']); // Ariel
console.log(pessoa['idade']); // 25
console.log(pessoa['profissao']); // desenvolvedora
```
Mais exemplos:


Declaração de objetos

```js
const objeto = new Object()
objeto.nome = 'cadeira'
objeto.tipo = 'madeira'
objeto.peso = 7

const pokemon = {
  nome: 'Pikachu',
  tipo: 'elétrico',
  altura: 40.6,
}
```

Acessando o valor de uma propriedade do objeto.

```js
console.log(pokemon.nome) // Pikachu
```

Declarando uma variável de mesmo nome que a propriedade.

```js
const nome = pokemon.nome
const tipo = pokemon.tipo
const altura = pokemon.altura

console.log(nome) // Pikachu
console.log(tipo) // elétrico
console.log(altura) // 40.6
```

Atribuição via desestruturação

```js
const { nome, tipo, altura } = pokemon

console.log(nome) // Pikachu
console.log(tipo) // elétrico
console.log(altura) // 40.6
```

MDN: [destructuring assignment](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao)

### Date

```js
const hoje = new Date()

console.log(hoje) // 2020-09-05T10:56:49.693Z

const dia = hoje.getDate()
const mes = hoje.getMonth()
const ano = hoje.getFullYear()

console.log(dia, mes, ano) // 5 8 2020 🤔

const dataFormatada = hoje.toLocaleDateString('pt-BR')
console.log(dataFormatada) // 05/09/2020

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const dataLonga = hoje.toLocaleDateString('pt-BR', options)
console.log(dataLonga) // sábado, 5 de setembro de 2020
```
MDN: [date](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date),
[toLocaleDateString](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)

## Arrays

Um array (ou lista) permite armazenar um conjunto de dados e atribuí-los a uma variável, sendo esta a estrutura de dados mais simples possível.

### Inicializando Arrays

Para criar um novo Array, podemos atribuir a uma variável uma lista de elementos entre colchetes e separados por vírgula. Também é possível utilizando a palavra reservada `new` e instanciando os valores que queremos atribuir ou apenas especificando o seu tamanho.

```javascript
const alunasReprograma = ['Andreia', 'Fernanda', 'Mariana', ...];
```

```javascript
const alunasReprograma = new Array('Andreia', 'Fernanda', 'Mariana', ...);
```

### Acessando valores

Para acessar o valor de um Array, use a notação de colchetes e informe a posição que deseja acessar, lembrando que a contagem começa em zero.

```javascript
const alunasReprograma = ['Andreia', 'Fernanda', 'Mariana', ...];

console.log(alunasReprograma[0]) // Andreia
console.log(alunasReprograma[1]) // Fernanda
console.log(alunasReprograma[2]) // Mariana
```

### Métodos de iteração

- `filter` retorna um novo array com os elementos filtrados.
- `find` retorna o primeiro elemento que achar igual ao elemento passado por parâmetro.
- `indexOf` retorna a posição do item passado por parâmetro ou -1 caso não tenha encontrado.
- `length` retorna um número que representa o tamanho do array.
- `map` retorna um novo array sem alterar o array original, criando uma cópia com as alterações que desejamos.
- `pop` remove e retorn o último item do array.
- `push` adiciona um item na última posição do array.
- `shift` remove e retorna o primeiro item do array.
- `slice` copia o array para outra variável.
- `splice` remove o item da posição passada por parâmetro
- `unshift` adiciona um item na primeira posição do array.


#### for...of

```js
for (numero of numeros) {
  const dobro = numero * 2

  console.log(dobro)
}
// 18
// 4
// 10
```
MDN: [for...of](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of)

---
#### map
> O método `map()` invoca a função `callback` passada por argumento para cada elemento do Array e devolve um novo Array como resultado. *Fonte: [MDN map](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)*

```js
function dobrar(item) {
  return item * 2
}

const numerosDobrados = numeros.map(dobrar)

console.log(numerosDobrados) // [18, 4, 10]
```

Deixando mais conciso:

```js
const numerosDobrados = numeros.map(function (item) {
  return item * 2
})

console.log(numerosDobrados) // [18, 4, 10]
```

Refatorando para JS moderno:

```js
const numerosDobrados = numeros.map(item => item * 2)

console.log(numerosDobrados) // [18, 4, 10]
```

Obs: o método `map` não alterar o array original. Ele retorna um array novo com o resultado do `map`.

---

#### find

> O método find executa a função callback uma vez para cada elemento presente no array até que encontre um onde callback  retorne o valor true. Se o elemento é encontrado, find retorna imediatamente o valor deste elemento. Caso contrário, find retorna undefined. *Fonte MDN: [find](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find)*

```js
function procuraCinco(item) {
  return item === 5
}

const achouCinco = numeros.find(procuraCinco)

console.log(achouCinco) // 5
```

---

#### filter

```js
function impar(item) {
  return item % 2 !== 0
}

const numerosImpares = numeros.filter(impar)
```

Deixando mais conciso:

```js
const numerosImpares = numeros.filter(function (item) {
  return item % 2 !== 0
})
```

Refatorando para JS moderno:

```js
const numerosImpares = numeros.filter(item => item % 2 !== 0)

console.log(numerosImpares) // [9, 5]
```

Obs: o método `filter` não altera o array original. Ele retorna um array novo com o resultado do `filter`.

MDN: [filter]()

---

#### sort
O método `sort` recebe uma função de callback opcional. Caso a função não seja fornecida, o array segue a ordenação dos caracteres Unicode.
> Se o parâmetro funcaoDeComparacao é fornecido, o array será ordenado de acordo com o valor de retorno da funcaoDeComparacao. Considerando que a e b são dois elementos sendo comparados, então:
>  - Se `funcaoDeComparacao(a, b)` for menor que 0, ordena `a` para um índice anterior a `b`, i.e. `a` vem primeiro.
>  - Se `funcaoDeComparacao(a, b)` retornar 0, deixa `a` e `b` inalterados em relação um ao outro, mas ordenado em relação a todos os outros elementos.
>  - Se `funcaoDeComparacao(a, b)` é maior que 0, ordena `b` para um índice anterior que `a`. `funcaoDeComparacao(a, b)` sempre deve retornar o mesmo valor dado um par específico de elementos `a` e `b` como seus dois parâmetros. Se resultados inconsistentes são retornados, então a ordenação é indefinida.
>
> *Fonte MDN: [sort](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)*


```js
function funcaoDeComparacao(a, b) {
  
  if (a < b) {
    return -1 // ao retornar valor negativo, a ordem fica [a, b]
  } else if (a > b) {
    return 1 // ao retornar valor positivo, a ordem fica [b, a]
  } else {
    return 0 // ao retornar valor nulo, a ordem permanece [a, b]
  }
}

numeros.sort(funcaoDeComparacao)

console.log(numeros) // [2, 5, 9]
```

Deixando mais conciso:

```js
function funcaoDeComparacao(a, b) {
  return a - b
}

numeros.sort(funcaoDeComparacao)

console.log(numeros) // [2, 5, 9]
```

Refatorando para JS moderno:

```js
numeros.sort((a, b) => a - b)

console.log(numeros) // [2, 5, 9]
```

**Obs: o método `sort` altera o array original!**

---

#### reduce

O método `reduce` recebe uma função callback com alguns parâmetros e essa função é executada a cada elemento presente no array. O resultado é a redução do array a um valor só. Normalmente, utilizamos os dois primeiros parâmetros: `acumulador` e `itemAtual`.

Por exemplo, podemos executar a soma de todos os valores do array utilizando o método `reduce`:

```js
function somarTodos(acumulador, itemAtual) {
  return acumulador + itemAtual
}

const numerosSomados = numeros.reduce(somarTodos)

console.log(numerosSomados) // 16
```

Deixando mais conciso:

```js
const numerosSomados = numeros.reduce(function (acumulador, itemAtual) {
  return acumulador + itemAtual
})

console.log(numerosSomados) // 16
```

Refatorando para JS moderno:

```js
const numerosSomados = numeros.reduce((acumulador, itemAtual) => acumulador + itemAtual)

console.log(numerosSomados) // 16
```
## POO com Javascript Introdução

### class x function 

*O que é a programação orientada a objetos? 

*É um paradigma de desenvolvimento, uma forma de construir e analisar a nossa lógica,além disso é utilizado muito na maioria dos sistemas atuais* 

*Tudo o que fazemos na POO é trabalhar com objetos.Ela foi criada para tentarmos representar objetos do mundo real nos códigos, com estados e comportamentos.*

*Os 4 pilares da programação orientada a objeto:*

*herança: podemos extender propriedades e metodos de uma classe mae para uma classe filha.Isso serve para replicar as caracteristicas de um objeto para outro. Isso nos ajuda a escrever códigos sem repetir tanto as mesmas linhas de código.*

*encapsulamento: conceito simples e poderoso, pois guarda a lógica da nossa classe, deixando nossos atributos de forma privada e só podemos acessar utilizando os metodos de get e set.*

*polimorfismo: a capacidade de objetos compativeis, se passar por outro em certas ocaciões. Podemos dessa forma herdar metodos, e reescrever todos os comportamentos. "Podemos brincar a vontade com o DNA do nosso sistema".*

*abstração: não é um conceito concreto, chega ser redundante. O super poder é criarmos a classe mãe o mais abstrata possível, ela recebe o nome de template, identidade ou superclasse. Não pode ser criado um onjeto diretamente dessa classe, mas sim das classes filhas que herdam as caracteristicas e comportamentos da classe mae.*

*Se você começou agora, vai perceber com o tempo a importancia desses 4 pilares, pois eles são as bases de técnicas e ferramentas que nos ajudam desde a concepção do projeto até codificação dele. Uma dessas técnicas é o design patterns que nos ajudar a manter um padrão de qualidade em nossos códigos. Além disso, muitas linguagens utilizam esse paradigma: java, python, .Net, Javascript e muitas outras.*

* Como entender classes no JS.

*Classes são como formas/moldes que definem os métodos e as propriedades para instanciarmos um objeto. Dentro dela não definimos nenhum dado ou informação é apenas a forma de como nosso objeto irá se parecer. Já objetos são as versões instanciadas dessas classes, essencialmente uma versão especifica dessa classe com os valores para as propriedades. Por exemplo se criarmos uma class Parede que recebe a propriedade cor, ela não diz qual cor será pintada essa parede, apenas diz que quando for criado um objeto nova parede ela irá receber um valor para cor.*

* E a palavra reservada this?

*Antes de 2015 as classes eram escritas como funções, após o es6 usamos a sintaxe class e a palavra reservada this é usada para internamente da classe associarmos um valor.*


* Qual a função do constructor nas classes?

*As classes em JavaScript têm um método constructor que permite definir campos quando o objeto é instanciado com uma class, ou seja, é esse método que faz a contrução do objeto quando a gente cria uma intância dessa classe usando a palavra reservada new. Cada classe pode ter apenas um constructor. Se houver mais de um, SyntaxError será lançado. O constructor também pode chamar o método super para chamar o constructor de outra classe se a classe estender uma classe mãe. Configurando assim a herança na POO.*

* Quais seriam as situações que seria mais lógico usar classe ao invés de uma função?

*O mais importante a lembrar: as classes são apenas funções JavaScript normais e antes eram declaradas sem o uso da class sintaxe. Que somente foi adicionado ao ES6(2015) para tornar mais fácil declarar e herdar objetos complexos.*

*A principal diferença entre a sintaxe class e function é que function sofre hoisting, enquanto class não. Isso significa que um objeto nunca pode ser instanciado executando uma classe que foi declarada posteriormente. Enquanto é possível executar uma funçao antes e declarar depois. Pois o interpretador do javascript eleva a função para o topo da página.*

*Agora para decidir quando usar class ou function, é muito importante lembrar dos conceitos da programação orientada a objeto. Por exemplo quando nós encapsulamos a lógica em uma class, o código fica muito mais limpo e de fácil entendimento em vez de criarmos várias funções.*

*Geralmente usamos classes para construir diferentes objetos com as mesmas propriedades. Exemplo conta bancária. Usamos também em algumas bibliotecas e supersets (class components no React e typescript nos types e interfaces)*

```
function Person(name) {
    this._name = name;
}

var person = new Person('Simara');

console.log(person)

```

```
class House {
    constructor(color) {
        this.color =  color;
    }

    getFurniture() {
        return 'sofa';
    }
}

const houseObject = new House('red');
const houseObject2 = new House('pink');

console.log(houseObject);
console.log(houseObject.getFurniture());

console.log(houseObject2);
console.log(houseObject2.getFurniture());
```
``` 
class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    sum() {
        return this.num1 + this.num2;
    }

    sub() {
        return this.num1 - this.num2;
    }

    mult() {
        return this.num1 * this.num2;
    }

    div() {
        return this.num1 / this.num2;
    }
}

calculadora();

const calculator = new Calculator(5, 6);

console.log(calculator.sum());
console.log(calculator.sub());
console.log(calculator.mult());
console.log(calculator.div());


function calculadora(num1, num2) {
    return num1 + num2
}

console.log(calculadora(1,2))

```

---
## Readline e Nodemon

- Readline-sync é um pacote maravilhoso para pegar inputs no terminal, ou seja pegar entradas de dados no sistema. Se você veio de programação front-end isso equivale a pegar o value do input de um usuário num formulário.

 - Dentro da pasta de seu projetinho instale digitando o comando no terminal: npm install readline-sync


- Nodemon é uma forma de executar o node atualizando automaticamente sempre que incluirmos e salvarmos novas informações nos arquivos.js
 - Dentro da pasta de seu projetinho instale digitando o comando no terminal: npm install nodemon
 - Crie o script start no package.json:
  "scripts": {
    "start": "nodemon app.js"
  }
 - Execute apenas uma vez: npm run start (após isso ele fica olhando nosso código e atualizando a execução do node)


## Exemplo chefão

Vamos criar um sistema que armazena informações de algumas alunas matrículadas no formato abaixo:

```
nome: string
idade: number
local: string
conteudoFavorito: string
```
Comportamento do sistema:

- deverá ser possível buscar alunas pela localidade
- caso a pessoa usuária escolha não buscar por localidade, deverá mostrar a tabela de alunas 
ordenada de forma crescente pela idade


Passo 1: npm init -y

Passo 2: npm i --save readline-sync

Passo 3: npm i --save-dev nodemon

Passo 4: crie o script de start

Passo 5: criar .gitignore

Passo 6: criar a database um array de objetos, não esquecer de exportar

Passo 7: criar o arquivo app.js

**`E bora codar!`**


**Desafio entregavel:**

#### Calma! É só uma TAREFINHA DE CASA pra chamar de sua! Já treinamos bastante com nossos exemplos na aula!

Vamos criar um sistema que armazena informações de livros para que seja possível gerenciar:
  - os livros que já lemos e os livros que estão na nossa listinha de desejos
  

> Passo a passo:
1) Crie uma pasta que irá conter os arquivos abaixo: 
- README.md
- app.js
- database.js
- Inicialize o npm 
- Crie o script de start
- Crie o .gitignore
- instale as dependências nodemon e readline-sync

2) No arquivo database crie e exporte a sua base no formato array de objetos contendo alguns dos livros que você já leu ou gostaria de ler com os seguintes campos:

```
nome: string
categoria: string
paginas: number
recomenda: boolean
leu: boolean
```

3) No arquivo app.js desenvolva sua lógica para o comportamento abaixo: 
  - deverá ser possível buscar livros pela categoria
  - Me recomenda livros pra ler? 
    Deverá listar livros que já foram lidos e que são recomendados 
  - Minha lista de desejo:
    Deverá listar livros que ainda não foram lidos 

- Caso a pessoa usuária não escolha uma forma de busca, deverá mostrar todos os livros cadastrados, ordenados de forma crescente por quantidade de páginas.

```
O comportamento esperado deve ser o pedido da entrada e a impressão das tabelas buscadas, conforme instrução acima.
```
4) No README.md você já sabe, conte sobre sua experiência e aprendizados com esse projeto.

5) A entrega é pelo classroom.

## Simara Conceição
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)
