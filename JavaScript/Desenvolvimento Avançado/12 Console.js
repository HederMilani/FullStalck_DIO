//Console

console.log('Hello Word');      // Escrever algo no console de saida de forma normal
console.warn('Hello Word');     // Escreve no console em amarelo com um simbolo de advertencia 
console.error('Hello Word');    // Escreve em vermelho com um simbolo de erro

console.trace();                // Traz informação de onde o comendo foi executado

console.group('My Group');      // Criar um grupo para agrupar mensagens
console.log('Hello Word 1');
console.log('Hello Word 2');
console.groupEnd('My Group');  // Finalizar o agrupamento de mensagens

console.time('Log time');       // Apresenta o tempo de execução do código
setTimeout(() => {
    console.timeEnd('Log time');    // Ponto final do calculo de tempo
}, 2000);

console.table([                     // Cria uma tabela para apresentação dos dados em arryes
    'Heder Milani', 'Heder Carlos'
]);

console.assert(1 === 0, 'Ops');     // Escreve na tela caso a consição apresentada seja falsa

