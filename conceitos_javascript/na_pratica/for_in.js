// for...in

let person = {
  name: 'Jonathan',
  age: 22,
  weight: 60
}

for(let property in person) {
  console.log(property)
  console.log(person[property])
}