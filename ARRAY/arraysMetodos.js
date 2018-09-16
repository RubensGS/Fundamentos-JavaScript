const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
console.log(pilotos);
// Remove o último elemento da pilha
pilotos.pop();
console.log(pilotos);

// Add um elemento na última posição da pilha
pilotos.push('Verstappen');
console.log(pilotos);

// Remove o elemento da primeia posição da pilha
pilotos.shift();
console.log(pilotos);

// Add um elemento na primeira posição da pilha
pilotos.unshift('Hamilton');
console.log(pilotos);

// Splice pode Add e remover elementos 
// Add
pilotos.splice(2, 0, 'Botas', 'Massa');
console.log(pilotos);

// remover 
pilotos.splice(3, 1);
console.log(pilotos);

// Slice - gera um novo array a partir do índice de outro array
const algunsPilotos1 = pilotos.slice(2);
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);