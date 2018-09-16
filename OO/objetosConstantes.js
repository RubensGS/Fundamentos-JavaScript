// pessoa -> 123 -> {...}
// faz referência a posição de memória que o objeto está, não para o objeto em si

const pessoa = { nome: 'Joao' };
pessoa.nome = 'Pedro';
console.log(pessoa);

// Congela o objeto. Não consegue mexer no objeto mais
Object.freeze(pessoa);

const pessoaConstante = Object.freeze({ nome: 'Joao' });