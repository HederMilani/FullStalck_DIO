//Arrow function

var sum = (a, b) => {
    if ((a+b) >= 10) {
        return 'Soma grande';
    } else {
        return "Soma pequena";
    }
};

console.log(sum(5, 12));

//Utilizando arrow function com this (sempre ira referenciar o contexto das chaves em que está)

var obj = {
    showContext: function showContext() {
        setTimeout(() => {
            this.log('After 1000 ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();

// Funções contrutoras
function Car() {
    this.foo = 'bar';
}
console.log(new Car);

