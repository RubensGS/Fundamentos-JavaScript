console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis() {
    console.log('Dentro de uma função...');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);
}

logThis();

// Fora da função this aponta para o module.exports
// Dentro de uma função o this aponta para o global

