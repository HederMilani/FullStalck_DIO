import React, {Component} from "react";     //Obrigatório realizar esta importação caso esteja trabalhando com classe
import ReactDom from "react-dom";
import "./style.css";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clock: 1000,
            cup: 'agua'
        }
    }
    alterarCopo = () => {
        this.setState({
            cup: 'Refrigerante'
        })
    }
    render() {                  // Função obrigatoria em classe para realizar algum, retorno em jsx
        const {clock, cup} = this.state;
        return (
            <div>
                <h1>
                    {clock}
                </h1>
                <button onClick={() => this.alterarCopo()}>
                    <h2>
                        {cup}
                    </h2>
                </button>
            </div>
        )
    }
}

const rootElement = document.getElementById("root")
ReactDom.render(<App />, rootElement)