// EventEmitter
    //Gerenciamento de eventos esclusivo do NODE.JS

const EventEmitter = require('events'); //Realizar a importação da biblioteca de eventos

const emitter = new EventEmitter(); //Instanciando um novo EventEmitter

//Realizar a leitura de um evento
emitter.on('User Logged', data => {
    console.log(data);
});

//Emitir um novo evento
emitter.emit('User Logged', {user: 'Heder Milani'});

//Outra forma de fazer com uma classe personalizada
class Users extends EventEmitter {
    userLogged(data1) {
        this.emit('User logged', data1);
    }
}

const users = new Users();
users.on('User logged', data => {
    console.log(data);
})
users.userLogged({user: 'Heder Carlos'});