const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

// Retorna uma função, então está invocando a função Factory
const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();

/** Padrão Sngleton - Faz cache do objeto retornado
 * As duas constantes tem a mesma referênca do mesmo objeto
 * Independente de quem alterar o valor, o objeto vai ser o mesmo para os dois
*/
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor);

/** Nova Instância
 * Cada invocação do objeto terá a sua própria instância 
 */
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor);
