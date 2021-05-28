// function expression
// function anonymous

// parâmetros (parameters)
const sum = function(number1, number2) {
  console.log(number1 + number2)
}
sum(2, 3) // arguments - argumentos

// arrow function
const sayMyName = (name = 'Jonathan') => {
  return name
}
console.log(sayMyName())
console.log(sayMyName('João'))

// callback function
function callBackFunction(name) {
  console.log('Antes da função callback')

  name()
  
  console.log('Depois da função callback')
}

callBackFunction(
  () => {
    console.log('Estou em uma callback')
  }
)

/*
  Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword
*/
function Person(name) {
  this.name = name
  this.walk = function() {
    return name + ' está andando'
  }
} 
const jonathan = new Person('Jonathan')
const caio = new Person('Caio')

console.log(jonathan.walk())
console.log(caio.walk())

let myName = new String("John")
console.log(myName)

let date = new Date("2021-05-28")
console.log(date)