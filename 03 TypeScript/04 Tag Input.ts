// Tag Input
    //Captura de dados da pagina

//Capturar dados da pagina HTML 
const input = document.getElementById('input') as HTMLInputElement; // O 'as' informa o tipo de dado corresponde a entrada  no caso (valor)

//Acompanhar evento de digitação
input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;  //Armazena o que foi digitado na variavel
    console.log(i.value);
})