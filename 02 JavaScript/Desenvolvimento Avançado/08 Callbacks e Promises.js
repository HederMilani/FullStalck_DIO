// Callback
    // Realizar funções sincronas conforme necessidade na hora de instanciar

function doOneFunction(Callback) {
    setTimeout (function(){
        Callback("First Data.")
    }, 1000 )
}
function doTwoFunction(Callback) {
    setTimeout(function() {
        Callback("Second Data.")
    }, 1000 )
}

//Função para instanciar o callback
function doAll() {
    try { 
        doOneFunction(function(data1) {
            var dataProceced1 = data1.split('');
            try {
                doTwoFunction(function(data2){
                    var dataProceced2 = data2.split('');
                    try {
                        setTimeout(console.log(
                            dataProceced1, dataProceced2
                        ), 10000)
                    } catch (error) {
                        // Tratmento de erros
                    }
                })
            } catch (error) {
                // Tratmento de erros
            }
        }) 
    } catch (error) {
        // Tratmento de erros
    }
}

doAll();

// Promises
    // uma forma de simplificar o Callback através de uma método construtor ja com o resolve(função a ser realizada) e reject(tratamento de erro)

const doOneFunction2 = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("First Data 2.")
    }, 1000)
})    
const doTwoFunction2 = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("Second Data 2.")
    }, 1000)
})

/* Status de Promises
    pending - enta em execução pendente de resultado
    fulfiled - execução finalizada
    rejected - Encontrado algum erro
*/

doOneFunction2()
    .then(data3 => console.log(data3))
    .catch(error1 => console.log(error1));
doTwoFunction2()
    .then(data4 => console.log(data4))
    .catch(error2 => console.log(error2));

// Realizando a execução em paralelo
Promise.all([doOneFunction2(), doTwoFunction2()]).then(data5 => {
    console.log(data5)
})