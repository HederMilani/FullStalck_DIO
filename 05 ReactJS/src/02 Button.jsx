import react from "react";

function Button(props) {

    const { name, onClick } = props;         // Realizandeo a descontrução do parametro para pegar o nome

    return(
        <button onClick={onClick}>
            {name}
        </button>
    )
}

export default Button