// Dados opcional em uma interface

interface IUsuario2 {
    id: string;
    email: string;
    cargo?: 'Gerente' | 'Coordenador' | 'Supervisor' | 'Funcionário';
}

function redirecionar(usuario: IUsuario2) {
    if (usuario.cargo) {
        // Direfionar conforme usuario.cargo
    } else {
        // Direcionar para area do usuario
    }
}