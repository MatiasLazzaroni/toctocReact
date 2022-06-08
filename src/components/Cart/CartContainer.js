import React from 'react'
import { useContext } from 'react'
import Context from '../../context/Context'
import ItemCart from './ItemCart'
import './CartContainer.css'

const CartContainer = () => {

  const {carro, eliminarItem, borrarTodo} = useContext(Context)
  
  return (

    <div className='carroContainer'>
      <div className="btnLimpiar" onClick={borrarTodo}> <p className='limpiar'>Limpiar</p></div>
      <h1>Productos seleccionados</h1>

      { carro.map ( prod => <ItemCart {...prod} borrar = {eliminarItem} key= {prod.id} />)}

      
    </div>
    
  )
}

export default CartContainer