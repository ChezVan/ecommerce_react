import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket'
import './index.css';
import data from './Data';

function App() {
  const {products} = data
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
