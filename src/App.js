import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; 
import CartContainer from './components/Cart/CartContainer';
import { ContextToc } from './context/Context';
import FormularioCompra from './components/FormularioCompra/Formulario';
import Footer from './components/Footer/Footer'
import Inicio from './components/SeccionInicio/Inicio'

function App() {
  return (
    <div className="contenedorToc">
       <ContextToc>
          <BrowserRouter>
           <header>
          <NavBar/>
          </header>
          <main className='contenido'>
            <Routes>
              <Route path='/' element={<Inicio/>}/>
              <Route path='/productos' element={<ItemListContainer/>}/>
              <Route path='/categoria/:cId' element={<ItemListContainer/>}/>
              <Route path='/detalles/:pId' element={<ItemDetailContainer/>}/>
              <Route path='/carro' element={<CartContainer/>}/>
              <Route path='*' element={<h1 className='ups'>¡Ups! Página no encontrada.</h1> }/>
              <Route path='/formulario' element={<FormularioCompra/>}></Route>
            </Routes>
          </main>
          <Footer/>
          </BrowserRouter>
       </ContextToc>
      
    </div>
  );
}

export default App;