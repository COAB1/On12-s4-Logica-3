const serumaninhos = require('./database')

const listaOrdenada = serumaninhos.sort((primeiro, segundo) => {
  return primeiro.idade - segundo.idade
})

console.table(listaOrdenada)


const entrada = require('readline-sync')

const filtrarAlunasPorIdade = entrada.question('quer encontrar alunas pela idade? s/n')

if (filtrarAlunasPorIdade.toLocaleUpperCase() === "S") {
  console.log('essas sao as idades disponiveis')
  console.log(27, 29, 45)

  const qualIdadeDesejada = entrada.question('qual idade desejada? ')
  console.log(qualIdadeDesejada)

  const idades = serumaninhos.filter(pessoa => pessoa.idade == qualIdadeDesejada)

  console.log(idades)

} else {
  console.log('aqui todas as pessoas')
  console.log(listaOrdenada)
}