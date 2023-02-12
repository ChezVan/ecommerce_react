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

  }
  const onRemove = (product) =>
  {
    
  }
  return (
    <div>
      <Header />
      <div className='row'>
        <Main products = {products}/>
        <Basket /> 
      </div>
    </div>
  );
}

export default App;
