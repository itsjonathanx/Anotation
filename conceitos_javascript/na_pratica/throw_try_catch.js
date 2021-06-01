// throw
function sayMyName( name = '') {
  if(name === '') {
    throw 'Nome é obrigatório'
  }
}

// try...catch
try {
  sayMyName()
} catch(e) {
  console.log(e)
}