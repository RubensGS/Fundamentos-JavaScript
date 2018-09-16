// Quando a função é uma function declaration, o interpretador do JS executa elas antes de
// executar o código.

// function declaration

function soma(x,y) {
    return x + y;
}

// function expression

const sub = function (x,y) {
    return x - y;
}

// named function expression

const mult = function mult(x,y) {
    return x * y;
}
