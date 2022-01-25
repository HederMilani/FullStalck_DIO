import react from "react";

// Pegando eventos de botões
const showEvent = (e) => {
    console.log(e);
    alert('You Click');
}
const Button = <button onClick={showEvent}>Evento</button>

//Pegando eventos de entrada de dados (instantaneo)
const handleChange = (e) => {
    const {value} = e.target
    console.log(value)
}

const App = () => {
    return (
        <div>
            Hello Word
            <br />
            {Button}
            <br />
            <input onChange={handleChange} />
        </div>
    )
}

export default App;