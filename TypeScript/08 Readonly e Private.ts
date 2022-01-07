// Pivate
    //Deixar os itens privados a classe que o implementa
//Readonly
    //Permitir apenas a leitura dos itens fora da classe que o implementa

interface Cachorro{
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroLeitura = {
    readonly[k in keyof Cachorro]: Cachorro[k]; //Definindo cada item da interface cachorro como somente leitura
}

class MeuCachorro implements CachorroLeitura {
    idade: number;
    nome: string;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade
    }
}

const cao = new MeuCachorro('Thor', 4);

console.log(cao);