import { useState } from "react";
import Button from "../Button"

const Card = () => {

    const [value, setValue] = useState(0)

    function Sum() {
        setValue(value +1)
    }

    function Sub() {
        if(value > 0) {
            setValue(value - 1)
        } else {
            alert(`Valor em ${value}`)
        }
    }

    return (
        <div className="card">
        <div className="card-header">
            Featured
        </div>
        <div className="card-body">
            <Button 
                className="btn btn-success"
                onClick={Sum}
            >
                Sum
            </Button>
            <Button 
                className="btn btn-danger"
                onClick={Sub}
            >
                Sub
            </Button>
            <p><h1>{value}</h1></p>
        </div>
        </div>   
    )
}

export default Card;