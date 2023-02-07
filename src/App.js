import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket'
import './index.css';

function App() {
  return (
    <div className='row'>
      <Header />
      <div>
        <Main />
        <Basket />
      </div>

    </div>
  );
}

export default App;
