
interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo: 'Gerente' | 'Coordenador' | 'Supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) { // Pode verificar desta forma por não estar especificado um tipo unico de interface para o usuario
        //Direcionar para area de Administração
    } else {
        //Direcionar para area de usuario
    }
}