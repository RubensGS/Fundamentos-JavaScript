const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Retorna as chaves do objeto
// [ 'nome', 'idade', 'peso' ]
console.log(Object.keys(pessoa));

// Retorna os valores do objeto
// [ 'Rebeca', 2, 13 ]
console.log(Object.values(pessoa));

// Retorna um array contendo subArrays das chaves e valores do objeto
// [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]
console.log(Object.entries(pessoa));

// Percorre o array exibindo suas chaves e valores
/**
 * nome: Rebeca
 * idade: 2
 * peso: 13
 */
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
});

// Percorre o array usando o destructing
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

// Concatena objetos em um objeto maior
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
console.log(obj);

// Congela o objeto
Object.freeze(obj);
obj.c = 1234;
console.log(obj);