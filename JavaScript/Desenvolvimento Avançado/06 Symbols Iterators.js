// Symbols
    // É uma maneira de gerar um identificar unico

//Invocando 

const uniqueID = Symbol('Id'); // Valor passado para o Symbol é apenas para identificar em um debug

console.log(uniqueID);

// Como utilizar
    //como uma propriedade privada em objetos

const helo = {
    uniqueID: ['ID']
};
console.log(helo);

//Interator

// Well Know Symbols
    //Simbol.iterator - Objetos interaveis(capa'zes de realizar interações)

    const arr = [1, 2, 3, 4];
    const it = arr[Symbol.iterator]();
    const it2 = arr[Symbol.iterator]();

    while(true) {
        let {value, done} = it.next(); // Adiciona os dois dados de next em variaveis

        if (done) {
            break;
        }

        console.log(value);
    }
    // Está errado desta forma 
    while (!it2.next().done) {
        console.log(it2.next().value);
    }

    // Outra forma de fazer sem o Symbol 
    // Utilizando a função nativa do Interator de alguns tipos de dados
    for (let value of arr) {
        console.log(value);
    }

    //Realizando Iteração em objeto (não possui a função nativa)

    const obj = {                   // Criando o objeto
        values: [1, 2, 3, 4, 5],    // Dados do objeto
        [Symbol.iterator]() {       // Criando a propriedade iterativa
            let i = 0;              // instanciar um indice para controle
            return {                // Adicionando o retorno da propriedade iterativa
                next: () => {       // Arow function para uma função de controle
                    i++;

                    return {        // Adicionando o retorno da função de controle
                        value : this.values[i -1],  // buscando o valor a ser retornado
                        done : i > this.values.length // verificar se indice é maior que numero de posições para retorno booleano
                    };
                }
            };
        }
    };

    const iteration = obj[Symbol.iterator]();

    while(true) {
        let {value, done} = iteration.next();

        if(!done) {
            console.log(value);
        } else {
            break;
        }
    }

    for (let value of obj) {
        console.log(value);
    }
