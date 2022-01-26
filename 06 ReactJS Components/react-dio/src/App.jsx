import Item from "./Components/Item";

const App = () => {
  return (
    <div>
      <h1>Minha primeira aplicação em React</h1>
      <ul>
        {Item('Item 10')}
        {Item('Item 20')}
        {Item('Item 30')} 
      </ul> 
    </div>
  )
}

export default App;