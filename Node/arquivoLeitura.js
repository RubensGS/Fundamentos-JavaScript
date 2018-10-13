const fs = require('fs')
// __dirname => nome do diretório atual - Sempre disponível em arquivos Node
const caminho = __dirname + '/arquivo.json'

// Ler de forma sincrona
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);

// Ler de forma assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`);
})
// Forma mais eficaz
const config = require('./arquivo.json')
console.log(config.db);

// Ler um diretorio
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...');
    console.log(arquivos);
})


