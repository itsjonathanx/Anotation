// For Each

// loop For simples
const ages = [13, 17, 19, 18, 22, 76, 56, 34, 63, 5] 

for (let index = 0; index < ages.length; index++) {
  //console.log(ages[index])
}

// usando For Each

// ES6
ages.forEach((e, i) => {
  // console.log(`${e} is on index number ${i+1}`) 
})

// ES5
ages.forEach(function setAges(e, i) {
  console.log(`${e} is on index number ${i+1}`)
})