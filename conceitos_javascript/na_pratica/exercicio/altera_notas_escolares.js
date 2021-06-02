/* 
  Transformar notas escolares

  Crie um algoritmo que transforma as notas do sistemas numéricos para sistemas de notas em caracteres tipo A B C

  * de 90 para cima - A
  * entre 80 - 89   - B
  * entre 70 - 79   - C
  * entre 60 - 69   - D
  * menor que 60    - F 
*/

function alterarNota(nota) {
  if(nota >= 90 && nota <= 100) {
    return 'Nota do aluno é: A'
  } 
  else if (nota >= 80 && nota <= 89) {
    return 'Nota do aluno é: B'
  } 
  else if (nota >= 70 && nota <= 79) {
    return 'Nota do aluno é: C'
  } 
  else if (nota >= 60 && nota <= 69) {
    return 'Nota do aluno é: D'
  } 
  else if (nota >= 0 && nota <= 59) {
    return 'Nota do aluno é: F'
  }
  else {
    return 'Nota inválida!!'
  }
}

console.log(alterarNota())  