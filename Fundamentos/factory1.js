// Função que retorna objetos
// Função que cria vários objetos com a mesma estrutura

// Factory Simples - Pode ser valores constantes ou pode receber valores por parâmetros
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa());
