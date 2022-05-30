import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


const ItemDetail = ({stock, imagen, descripcion, precio, subtitulo, nombre}) => {
  return (   
    <div className="tarjetaDetalle">
            <div className='detalleContenedor'>
                <div>
                    <img src={imagen} alt="imagenes de productos"></img>
                </div>
        
               <div className='textoDetalle'>
                   
                   <p> {subtitulo}</p>
                    <h2>{nombre}</h2>     
                    <p className='descripcion'>{descripcion} </p>
                    <div className='textoEnvio'><h4 className='envio'>ENVIO GRATIS</h4>
                    <h5 >Solo en Bahia Blanca y Punta Alta</h5></div> 
                    
                    <p className='precio'>{precio}</p>
                    <div className='logosTarjetas'>
                    <img src='./images/visa.svg' alt='Icono Tarjeta'></img>
                    <img src='./images/Naranja.svg' alt='Icono Tarjeta'></img>
                    <img src='./images/American.svg' alt='Icono Tarjeta'></img>
                    <img src='./images/MasterCard.svg' alt='Icono Tarjeta'></img>

                    </div>
                </div>
                <div className='contador'>
                    <ItemCount stock={stock} initial={0}/>
                </div>
                
            </div>
    </div>
    )
    
}

export default ItemDetail