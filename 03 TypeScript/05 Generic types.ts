// Generic Types

function SumItemList<NaoSei>(array: any[], value: NaoSei) { // <> indica um tipo generico onde sera definido automaticamente pelo tipo de dado de entrada.
    return array.map(item => item + value);
}

console.log (SumItemList([1, 2, 3], 5));

