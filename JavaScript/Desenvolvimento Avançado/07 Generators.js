// Generatos
    // São interfaces capazes de criares e descriarem pausas em funções

function* hello() { //O asteristico representa que o generator pode ser utilizado nesta função
    console.log('Hello!'); 
    yield (1);                      // Comando reservado para realizar a pausa para utilização do next()
    console.log('From');            
    let value = yield;          // Possivel Trazer o valor do momento da chamada da função
    console.log(value);
}

// Adicionando função ao iterador
const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('Function!!'));

// Criando um objeto iteravel com Generators e Symbol
const obj = {
    values: [1, 2, 3, 4, 5, 6],
    *[Symbol.iterator]() {              // Adicionando a função generator em um symbol com o *
        for (let i = 0; i < this.values.length; i++) { // Fazer verificação dos indices através do for
            yield this.values[i];       // Retornando o valor a cada iteração
        }
    }
};

for(let value of obj) {
    console.log(value);
}
