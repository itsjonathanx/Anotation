// Map
// O método map cria um novo array e executa uma função particular para cada elemento do array.
// Isso não altera a matriz original, pois cria uma nova matriz.

// Exibindo o nome dos heroes

let heroes = [
  { name: "SpiderMan", franchise: "Marvel" },
  { name: "IronMan", franchise: "Marvel" },
  { name: "BatMan", franchise: "DC" },
  { name: "SuperMan", franchise: "DC" },
]

// ES6
let heroNames = heroes.map((name) => name.name)
console.log(heroNames)

// ES5
let franchise = heroes.map(function getFranchise(franchise) {
  return franchise.franchise
})
console.log(franchise)

// usando dois maps juntos como exemplo
let number= [2, 4, 6, 8, 10, 12, 14]
let nums = number.map(perNumber => Math.sqrt(perNumber)).map(perNumber => perNumber * 2)
console.log(nums)