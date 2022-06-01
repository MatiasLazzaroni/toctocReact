import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

 

  return (
    <div className="App">
      <header>
        
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<div className='logoToc'><img src={require('./images/logoToctoc.png')} alt="logo"></img></div>}/>
            <Route path='/productos' element={<ItemListContainer/>}/>
            <Route path='/categoria/:cId' element={<ItemListContainer/>}/>
            <Route path='/detalles/:pId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<h1 className='ups'>¡Ups! Página no encontrada.</h1> }/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
