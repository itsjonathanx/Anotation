// Sort
// O método Sort nos ajuda a classificar a matriz de acordo com nossa condição.
// Se a condição for verdadeira. então retornamos 1 ou então retornamos -1.
// Sort também cria um novo array e o array original não é tocado.

// ES5
const companies = [
  { name: "Camp One", category: "Finance", start: 1990, end: 2012 },
  { name: "Camp Two", category: "Tech", start: 1998, end: 2007 },
  { name: "Camp Three", category: "Business", start: 1999, end: 2003 },
  { name: "Camp Four", category: "Import", start: 1992, end: 2002 },
  { name: "Camp Five", category: "Export", start: 1991, end: 2011 },
];

let sortedStartComp = companies.sort(function(a, b) {
  if(a.start > b.start) {
    return 1
  } else {
    return -1
  }
})
console.log(sortedStartComp)

// ES6
let sortedEndComp = companies.sort((a, b) => (a.end > b.end) ? 1 : -1)
console.log(sortedEndComp)

// Another Example
const ages = [13, 17, 19, 18, 22, 16, 56, 34, 63, 5] 

let sortAge1 = ages.sort((a, b) => a - b) // para ordem crescente
console.log(sortAge1)

let sortAge2 = ages.sort((a, b) => b - a) // para ordem decrescente 
console.log(sortAge2)