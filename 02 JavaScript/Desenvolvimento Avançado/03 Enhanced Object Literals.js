// Enhanced Object Literals

var prop1 = 'Propriedade 1';
var prop2 = 'Propriedade 2';

function method2 () {
    console.log('Método 2');
}
function method3() {
    console.log('Método 3');
}

 // objeto literal
var obj = {
    prop1 : prop1, //Como era feito anteriormente
    prop2,          //Como pode ser feito agora ( se propriedade e variavel tiverem o mesmo nome)  

    // o Mesmo ocorre para métodos
    method1 : function method1() {
        console.log('Método 1');
    },
    method2 : method2,
    method3,
    method4() {
        console.log('Método 4');
    }
}

console.log(obj);
obj.method1();
obj,method2();
obj.method3();
obj.method4();

