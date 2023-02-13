import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket'
import './index.css';
import data from './Data';
import { useState } from 'react';

function App() {

  const [cartItem, setCardItem] = useState([])
  const {products} = data;
  const onAdd = (product) => 
  {
    const exist = cartItem.find((x) => x.id === product.id);

    if(exist)
    {
        const newCartItems = cartItem.map(() => 
          x.id === product.id ? {...exist, qty: exist.qty +1} : x
        );
      setCardItem(newCartItems)
    }
  }
  const onRemove = (product) =>
  {

  }
  return (
    <div>
      <Header countCartItem={cartItem.length} />
      <div className='row'>
        <Main onAdd={onAdd} onRemove={onRemove} products = {products}/>
        <Basket /> 
      </div>
    </div>
  );
}

export default App;
