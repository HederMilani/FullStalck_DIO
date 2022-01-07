//Types
    // Mesmas funções da inteface alem de permitir a junção de interfaces

interface IAnimal2 {
    name: string;
    tipo: 'Terrestre' | 'Aquatico';
    domestico: boolean;
} 

interface IFelino2 extends IAnimal2{
    visaoNoturna: boolean;
}

interface ICanino {
    porte: 'Pequeno' | 'Medio' | 'Grande';
}

type TDomestico = IFelino2 | ICanino;

const cachorro: TDomestico = {
    name: 'Cachorro',
    domestico: true,
    porte: 'Pequeno',
    tipo:'Terrestre',
}
