function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20;
global.desc = 0.1;
console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

// Primeiro passa o contexto, depois os parâmetros da função.
console.log(getPreco(carro, 0.17, '$'));

// Primeiro passa o contexto, depois dentro do array passa os parâmetros da função. 
console.log(getPreco(carro, [0.17, '$']));