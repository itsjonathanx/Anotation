// Reduce
// O método Reduce reduz todo o array a um único valor.
// o método reduz executa uma determinada função para cada valor na matriz da esquerda para direita
// (começando do índice 0 até o comprimento da matriz -1), por exemplo, temos que encontrar a soma de todas as idades,
// portanto, sem o loop for, podemos fazer isso usando reduzir a função.
// Temos que dar 0 para definir o valor inicial a partir do qual os valores começarão, embora seja opcional, portanto, você pode ignorá-lo.

const ages = [13, 17, 19, 18, 22, 76, 56, 34, 63, 5] 

// ES6
const ageSum1 = ages.reduce((total, age) => {
  return total + age
}, 0)
console.log(ageSum1)

// ES5
const ageSum2 = ages.reduce(function(total, age) {
  return total + age
}, 0)
console.log(ageSum2)
