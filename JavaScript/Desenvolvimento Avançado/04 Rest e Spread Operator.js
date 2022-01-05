// Rest e Spread Operator. São utilizados com (arrays, strings, objetos literais e objetos interaveis)

// Realizar operação com argumentos indefinidos para função
//Antes
function sum() {
    // Variavel para soma
    var value = 0;
    // repetição para listar todos os argumentos
    for (let i = 0; i < arguments.length; i++) { // Arguments é uma variavel reservada que já traz por padrão uma lista com todos os argumentos
        value += arguments[i];
    }
    return value
}

console.log(sum(1, 2, 3, 4));

// Rest operator
    //Converte todos os argumentos em um array
//Nova forma de fazer com rest Operator (...)
function sum2(...arg) {
    return arg.reduce((accumulated, value) => accumulated + value, 0); // Utilizando funções de array para realizar a soma
}

console.log(sum2(1, 2, 3, 4));

// Realizando através de arrow
const sum3 = (...args) => {
    return args.reduce((accumulated, value) => accumulated + value, 0);
}

console.log(sum3(1, 2, 3, 4, 5));

//Spread Operator
    // Passa um array como parametro para a próxima função
const multiply = (...rest) => {
    return rest.reduce((accumulated, value) => accumulated * value, 1);
}

const sum4 = (...spread) => {
    console.log('Total A multiplicação dos valores: ' + multiply(...spread));
    return spread.reduce((accumulated, value) => accumulated + value, 0);
}

 console.log('A soma de todos os valores: ' + sum4(1, 2, 3, 4, 5));

