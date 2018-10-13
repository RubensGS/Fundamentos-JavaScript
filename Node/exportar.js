// Mesma coisa

console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

// Jeito errado de substituir valor
exports = null;
console.log(module.exports);

// Jeito errado de substituir valor
exports = {
    nome: 'Teste'
}
console.log(module.exports);

// Jeito certo
module.exports = {
    publico: true
}
