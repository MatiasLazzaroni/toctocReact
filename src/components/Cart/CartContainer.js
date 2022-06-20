import React from 'react'
import { useContext } from 'react'
import Context from '../../context/Context'
import ItemCart from './ItemCart'
import './CartContainer.css'
import { Link } from 'react-router-dom';

const CartContainer = () => {

  const {carro, eliminarItem, borrarTodo, resultadoTotal, acumularCarro} = useContext(Context)

  const acumulador = acumularCarro ()
  
  return (
    <div>
      
    { acumulador === 0 
      ? <div className='carroVacioContenedor'>
                 
          <img className= "imgCarroVacio"  src={require('../../images/carroVacio.png')} alt='carro vacio'></img>
          <h1 className='tituloCarroVacio'>¡Ay no!</h1>
          <p className='textoCarroVacio'>¿Aún no te has decidido?</p> 
          <p className='textoCarroVacio'>Revisa nuestro menú o visita nuestros productos <Link to='/productos'><span className='color'>aquí mismo.</span></Link></p>
        </div>
    
    : <div className='carroContainer'>
      
      <img className='imgLogo' src={require('../../images/logoToc.png')} alt='Icono'></img>
      <div className='tituloLineaCarro'>
        <div className='linea'></div>
          <div className='tituloToc'><h2 className='titulo'>CarroToc</h2></div>
        <div className='linea'></div>
      </div>

      { carro.map ( prod => <ItemCart {...prod} borrar = {eliminarItem} key= {prod.id} />)}
      
      <div className='barraTotal'>        
        <div className='barraFlex'>
          <p className='textoTotal'>Total: ${resultadoTotal()} </p>
          <div className='btnLimpiar'>
            <img src={require('../../images/iconoBorrar.png')} alt="iconoBorrar" className="btnBorrar" onClick={borrarTodo}></img>
          </div>
        </div>
      </div>

      <section className='contenedorBtnCarro'>
        <Link to='/productos'>
          <div className='btnSeguir'> 
            <p className='textoVolver'>Volver</p>
          </div>
        </Link>
        <Link to='/formulario'>
          <div className='btnSeguir'>
            <p className='textoVolver' >Generar Orden</p>
          </div>
        </Link>
      </section>
    </div>
  }
  </div>
  )
}

export default CartContainer