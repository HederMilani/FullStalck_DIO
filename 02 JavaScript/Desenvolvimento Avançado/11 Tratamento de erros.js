// Tetratamento de erro com try-catch
    
try {                               //Coleta o erro sem parar a execução do codigo
    console.log(name);
    const name = 'Heder Milani';
} catch(err) {                      //Tratativa para o erro caso ocorra
    console.log('Error: ', err);    //Apresentar o erro no console
}

console.log('Keep going');

//Criar mensagen customizada para o erro
try {
    const myError = new Error('Custon error mensage');  //Criação da variavel de erro
    throw myError;      //instanciando o erro
} catch(err) {
    console.log(err);
}

//Criar uma classe para customização dos erros
class CustonError extends Error {       //Criar a classe
    constructor({message, data}) {      //Método contrutor da classe
        super(message);                  //Usar o construtor da superclasse
        this.data = data;
    }
}

try {
    const newError = new CustonError({
        message: 'New custon error message error',
        data: {
            type: 'Server erro',
            codgo: 123
        }
    }); 

    throw newError;
} catch (err) {
    console.log(err);
    console.log(err.data);
}
