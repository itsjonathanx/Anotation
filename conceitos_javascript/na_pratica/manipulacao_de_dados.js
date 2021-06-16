// Manipulando String e Números
// Transformando um número quebrado com 2 casas decimais e trocar ponto e vírgula
let phraseq = "Este site é para perdedores"
let re = /[aeiou]/gi
let newPhrase = phraseq.replace(re, "") 
console.log(newPhrase) 

// Manipulando Strings e Arrays
// Separe um texto que contem espaços, em um novo arrays onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_").toUpperCase()
console.log(phraseWithUnderscore)

// Manipulando Strings
// Verificar se o texto contém a palavra Amor
let verifyWordInPhrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"))

// Manipulando Array
// Criar Array com constructor
let createArrayWithConstructor = new Array('a', 'b', 'c')
console.log(createArrayWithConstructor)

// Manipulando Array um pouco mais complexo
console.log([
  "a",
  {type: "array"},
  function () { return "alo" },
][2]())

// Transformando uma cadeia de caracteres em elementos de um array
let word = "manipulação"
console.log(Array.from(word))

// Manipulando Arrays
let techs = ["html", "css", "js"] 

// adicionar um item no fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover do fim 
// techs.pop()
// remover do começo
// techs.shift()
// pegar somente alguns elementos do array
// console.log(techs.slice(1, 3))
// remover 1 ou mais items em qualquer posição do array
// techs.splice(1, 2)
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)