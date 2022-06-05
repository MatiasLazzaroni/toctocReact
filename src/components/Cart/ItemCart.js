import React from 'react'
import './ItemCart.css'


function ItemCart({carro, borrar}) {

   return(

    <div>{carro.map(prod => {
                return(
                    <div className='contenedorCarro'>
                        <div className='gridCarro'>
                            <div key={prod.id} className="carroContenedor">
                                <div className='item'>{prod.nombre}</div>
                                <div className='item'>Cantidad: {prod.quantity}</div>
                                <div className='item'>Precio: ${prod.precio}</div>
                                <div className='item'>Subtotal: ${prod.precio * prod.quantity}</div>
                                <div onClick={()=> borrar (prod.id)} className="btnContenedor"> <p className="btnBorrar">Borrar</p> </div>
                            </div>
                        </div>
                    </div>
                    
                )})
            }
    </div>
   )
    
}

export default ItemCart