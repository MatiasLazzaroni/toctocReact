import React from 'react'
import './ItemCart.css'


function ItemCart({borrar, nombre, quantity, precio, id}) {

   return(

    <div>
            <div className='contenedorCarro'>                
                    <div className="carroContenedor">
                        <div className='item'>{nombre}</div>
                        <div className='item'>Cantidad: {quantity}</div>
                        <div className='item'>Precio: ${precio}</div>
                        <div className='item'>Subtotal: ${precio * quantity}</div>
                        <div onClick={()=> borrar (id)} className="btnContenedor"> <p className="btnBorrar">Borrar</p> </div>
                    </div>                
            </div>         
    </div>
   )
    
}

export default ItemCart