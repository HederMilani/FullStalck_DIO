import Item from "./Components/Item";
import Card from "./Components/Card";

const App = () => {
  return (
    <div>
      <h1>Minha primeira aplicação em React</h1>
      <ul>
        <Item texto='Item 100' />
        <Item texto='Item 200' />
        <Item texto='Item 300' />
      </ul> 
      <Card/>
    </div>
  )
}

export default App;