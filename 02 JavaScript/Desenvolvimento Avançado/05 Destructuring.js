// Destructuring Assignment
    // Capaz de dividir arrays em variaveis individuais

// Normal
var fruit = ['apple', 'banana', 'orange'];
var apple = fruit[0];
var banana = fruit[1];
var orange = fruit[2];

console.log(apple, banana, orange);

// com destructuring
var [apple2, banana2, orange2] = ['apple', 'banana', 'orange'];

console.log(apple2, banana2, orange2);
 //ou
 var [apple3, banana3, orange3] = [fruit[0], fruit[1], fruit[2]];

 console.log(apple3, banana3, orange3);

    // também é capaz de ser utilizado com objeto

//normal
var person = {
    nome : 'Celso',
    idade : 20,
    nota : {
        nota1 : 60,
        diciplinas : ['tic', 'ecd', 'poo']
    }
};
var nome2 = person.nome;
var idade2 = person.idade;
var nota2 = person.nota.nota1;
var dici2 = person.nota.diciplinas[0];
console.log(nome2, idade2, nota2, dici2);

// Com destrusturing - podendo usar em multiniveis
var {nome, idade : idade3, nota : {nota1, diciplinas: [dic1, dic2, dic3]}} = person;
console.log(nome, idade3, nota1, dic1, dic2, dic3);

// também pode ser utilizado em argumentos e parametros.
function sum([a, b] = [0 , 0]) { // Podendo utilizar o defout values "0 ,0" caso falte algum parametro
    return a + b;
}
var arr = [5, 10];

console.log(sum(arr));