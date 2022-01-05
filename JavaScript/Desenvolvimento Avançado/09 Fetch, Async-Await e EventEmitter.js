// Fetche
    // Realizar requisições utilizando promises

fetch('http://localhost:8080/data.jason') //Realiza a requição para o servidor especifico
    .then(responseStream => {       // Realiza o tratamento dos dados retornado pela requisição
        if (responseStream.status === 200) {    //Realiza a verificação do status da requisição (200 representa que está tudo certo)
            return responseStream.json();       //Realiza o retorno de acordo com o tipo de conexão realizada (jason)
        } else {
            throw new Error('Request Error');   //Retorno de erro na requisição
        }
    })
    .then(data => {
        console.log(data);      //Realiza o retorno dos dados da requisição 
    })
    .catch(err => {
        console.log('Erro: ', err); //Retorna evento de erro em rede na conexão
    })

// Async / Await
    //Async - uma forma de criar promises de forma mais simples e enchuta
    //Await - aguarda para que outras promises sejam resolvidas

const asyncTimer = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(54321);
        }, 1000);
    });
}
const simpleFunction = async () => {
    const data1 = await asyncTimer();
    return data1;
};

simpleFunction().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
