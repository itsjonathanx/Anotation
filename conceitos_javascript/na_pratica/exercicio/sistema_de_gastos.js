/* 
  Sistemas de gatos familiar

  Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas[]
    * despesas[]
  
  Agora, crie uma função que irá calcular o total de receita e despesas e irá mostrar uma mensagem se a ia está com saldo positivo ou negativo, seguindo do valor do saldo
*/

let gastosFamiliar = {
  receitas: [1000, 1200],
  despesas: [400, 62.5, 159.60, 405.43, 345.98]
}

function soma(array) {
  let total = 0;

  for(let value of array) {
    total += value
  }

  return total;
}

function calcularGastos() {
  const calculaReceitas = soma(gastosFamiliar.receitas)
  const calculaDespesas = soma(gastosFamiliar.despesas)
  
  const saldo = calculaReceitas - calculaDespesas 
  
  const itsOK = saldo >= 0

  let balanceText = "negativo"
  
  if(itsOK) {
    balanceText = "positivo"
  }

  console.log(`Seu saldo é ${balanceText}: ${saldo.toFixed(2)}R$`)
}

calcularGastos()