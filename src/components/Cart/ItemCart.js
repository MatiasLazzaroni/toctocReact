import React from 'react'
import './ItemCart.css'


function ItemCart({borrar, nombre, quantity, precio, id}) {

   return(

    <div>
            <div className='contenedorCarro'>                
                    <div className="carroContenedor">
                        <div className='textoCarro'><p className='item'><b>{nombre}</b></p></div>
                        <div className='textoCarro'><p className='item'><b>Cantidad: {quantity}</b></p></div>
                        <div className='textoCarro'><p className='item'><b>Precio: ${precio}</b></p></div>
                        <div className='textoCarro'><p className='item'><b>Subtotal: ${precio * quantity}</b></p></div>
                        <div onClick={()=> borrar (id)} className="btnContenedor"> <img src={require('../../images/iconoBorrar.png')} alt="iconoBorrar" className="btnBorrar"></img> </div>
                    </div>                
            </div>         
    </div>
   )
    
}

export default ItemCart