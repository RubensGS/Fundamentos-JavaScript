const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

// Faz requisições HTTP em servidores externos a aplicação
const axios = require('axios');

const chineses = f => f.pais === 'China';
const mulheres = f => f.genero === 'F';
// Função Reduce
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
}

axios.get(url).then(resp => {
    const funcionarios = resp.data;
    //console.log(funcionarios);


    // mulher chinesa com menor salario ?
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
    console.log(func);
    
})