/*
  Celcius em fahrenheint

  Crie uma função que receba uma string em Celcius ou fahrenheit e faça a transformação de uma unidade para outra

  C = (F - 32) * 5/9

  F = C * 9/5 + 32 
*/

// Meu exemplo
function alterandoUnidade(grau, unidade) {
  const celcius = (grau - 32) * 5/9
  const fahrenheit = grau * 9/5 + 32
  let result = "";

  if(unidade === "C") {
    result = celcius + "C"
  }

  else if (unidade === "F") {
    result = fahrenheit + "F" 
  }

  else {
    result += "Grau não identificado!!"
  }

  return result
}

console.log(alterandoUnidade(10, "F"))
console.log(alterandoUnidade(50, "C"))
console.log(alterandoUnidade(50, "Z"))



// Outro exemplo
// transformDegree
function transformDegree(degree) {
  const celciusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  // fluxo de erro
  if(!celciusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }

  // fluxo ideal, F -> C
  let updateDegree = Number(degree.toUpperCase().replace("F", ""))
  let formula = fahrenheit => (fahrenheit - 32) * 5/9 
  let degeeSign = 'C'

  // fluxo alternativo C -> F
  if(celciusExists) {
    updateDegree = Number(degree.toUpperCase().replace("C", ""))
    formula = celcius => celcius * 9/5 + 32 
    degeeSign = 'F'
  }

  return formula(updateDegree) + degeeSign
}

try {
  console.log(transformDegree('10c'))
  console.log(transformDegree('50f'))
  console.log(transformDegree('10z'))
} catch (error) {
  console.log(error.message)
}