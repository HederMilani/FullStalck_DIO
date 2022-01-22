import react from "react";

const buttonA = <button>Histórico</button>
const bottonB = <button>Cadsatro Cliente</button>
const hasCustomer = false

const Renderizacao = () => {
    // Reder completo (Não muito indicado a ser feito)
    const completeRender = () => {
        <div>
            { hasCustomer && (          //Realiza a verificação se verdadeiro procegue com o código entre parenteses
                <div>
                    Clique no botão para visualisar o Histórico
                    <br />
                    {buttonA}
                </div>
            )}
            {hasCustomer ? (            //Realiza a verificação se componente verdadeiro com a opção do falso
                <div>
                    Clique no botão para visualizar o Histórico
                    <br />
                    {buttonA}
                </div>
            ) : (                       //Apresentação do else caso a verificação seja falsa
                <div>
                    Clique no botão para incluir Cliente
                    <br />
                    {bottonB}
                </div>
            )}
        </div>
    }

    // Renders separados e organizados (forma mais indicada a ser realizado)
    const renderHistori = () => {
        <div>
            <br />
            Clique abaixo para apresentar o histórico 
            {buttonA}
        </div>
    };
    const renderCLient = () => {
        <div>
            <br />
            Clique abaixo para cadastrar um cliente 
            {buttonB}
        </div>
    }

    return (
        <div>
            <h1>Hello Word</h1>
            <p>
                {completeRender()}
            </p>
            <p>
                {hasCustomer ? renderHistori() : renderCLient()}
            </p>
        </div>
    )
}

export default Renderizacao;