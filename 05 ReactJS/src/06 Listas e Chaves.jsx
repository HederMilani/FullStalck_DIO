import react from "react";

const listCustomer = [
    {
        id: 1,
        name: 'Heder Milani'
    },
    {
        id: 2,
        name: 'Joao Carlos'
    },
    {
        id: 3,
        name: 'Maria Clara'
    },
    {
        id: 4,
        name: 'Bruno Carneiro'
    }
]

const App = () => {
    const renderCustomers = (customer, index) => {
        return (
            <li key={`customer - ${customer.id}`}>
                {customer.name}
            </li>
        )
    }
    return (
        <div>
            <h1>Hello Word</h1>
            <div>
                <ul>
                    {listCustomer.map(renderCustomers)}
                </ul>
            </div>
        </div>
    )
}

export default App;