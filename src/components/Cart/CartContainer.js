import React from 'react'
import { useContext } from 'react'
import Context from '../../context/Context'
import ItemCart from './ItemCart'
import './CartContainer.css'

const CartContainer = () => {

  const {carro, eliminarItem, borrarTodo} = useContext(Context)
  
  return (

    <div className='carroContainer'>
      <h1>Productos seleccionados</h1>
      <ItemCart carro= {carro} borrar = {eliminarItem} />
      <div className="btnBorrar" onClick={borrarTodo}> Limpiar</div>
    </div>
    
  )
}

export default CartContainer