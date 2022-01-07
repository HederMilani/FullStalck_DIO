//Interface
    // semelhantes aos structs da linguagem C

interface IAnimal {
    nome: string;
    tipo: 'Terrestre' | 'Aquatico';
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'Terrestre',
}

//Estendendo interface
interface IFelino extends IAnimal {
    visaoNoturna: boolean;
    executarRugido(altura: number): void 
}

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'Terrestre',
    visaoNoturna: true,
    executarRugido(altura: 4) {
        console.log('Altura do rugido: ' + altura);
    }
}

console.log(felino, animal);