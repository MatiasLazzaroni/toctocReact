import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; 
import CartContainer from './components/Cart/CartContainer';
import { ContextToc } from './context/Context';
import FormularioCompra from './components/FormularioCompra/Formulario';


function App() {



  return (
    <div className="App">
      <header>
        <ContextToc>
          <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path='/' element={<div className='logoToc'><img src={require('./images/logoToctoc.png')} alt="logo"></img></div>}/>
              <Route path='/productos' element={<ItemListContainer/>}/>
              <Route path='/categoria/:cId' element={<ItemListContainer/>}/>
              <Route path='/detalles/:pId' element={<ItemDetailContainer/>}/>
              <Route path='/carro' element={<CartContainer/>}/>
              <Route path='*' element={<h1 className='ups'>¡Ups! Página no encontrada.</h1> }/>
              <Route path='/formulario' element={<FormularioCompra/>}></Route>
            </Routes>
          </BrowserRouter>
       </ContextToc>
      </header>
    </div>
  );
}

export default App;