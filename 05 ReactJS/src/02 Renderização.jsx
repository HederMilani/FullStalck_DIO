import React from "react";  
import reactDom from "react-dom";
import "./style.css";
import Button from "./02 Button";

const element = <div><h1>Heder Milani</h1></div>; 

function soma(a, b) {
    alert(a + b);
}

const App = () => {
    return (
        <div>
            {element}
            <Button onClick = {() => soma(10, 20)} name="Soma" />
        </div>
    )
}

const rootElement = document.getElementById("root")
reactDom.render(<App />, rootElement)
