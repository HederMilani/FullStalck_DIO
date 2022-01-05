// Defaut Function Arguments

function multiply (a, b = 1) { // ao atribuir um valor no parametro, se não vier algum valor pelo instanciamento da função este (1) sera atribuido automaticamente
    return a * b;
};

console.log(multiply(5, 4));

//Lazy evaluation
function radomNumber() {
    return Math.random() * 10; //Gerar um numero randomico
}

function newMultiply (a, b = radomNumber()) { // Pode ser atribuido uma função pelo default function arguments
    var m = 'A multiplicação entre ' + a + ' e ' + b + ' é ' + (a * b);
    return m;
}

console.log(newMultiply(5));