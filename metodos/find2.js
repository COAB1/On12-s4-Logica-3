const estudantes = [
    {
        nome: 'Luna',
        idade: 28,
        local: 'SP'
    },
    {
        nome: 'Caroline',
        idade: 39,
        local: 'PE'
    },
    {
        nome: 'Mari',
        idade: 31,
        local: 'PE'
    }

]

let alunasPernambuco = estudantes.find(estudante => estudante.local === 'PE')
console.log(alunasPernambuco)