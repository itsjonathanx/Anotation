// Filter

// filtrar idades igual ou maior que 18  
const ages = [13, 17, 19, 18, 22, 16, 56, 34, 63, 5] 

// ES6
let above18 = ages.filter(e => {
  if(e >= 18) {
    console.log(e)
  }
})

// ES5
let below18 = ages.filter(function setBelow18(e) {
  if(e < 18) {
    console.log(e)
  }
})

// retornando nome de cada herói de sua respectiva franquia 
let heroes = [
  { name: "SpiderMan", franchise: "Marvel" },
  { name: "IronMan", franchise: "Marvel" },
  { name: "BatMan", franchise: "DC" },
  { name: "SuperMan", franchise: "DC" },
]

// retornando heróis da marvel
// ES6
let marvel = heroes.filter((hero) => {
  return hero.franchise == "Marvel"
})
console.log(marvel)

// retornando heróis da DC
// ES5
let DC = heroes.filter(function heroDC(hero) {
  return hero.franchise == "DC"
})
console.log(DC)
