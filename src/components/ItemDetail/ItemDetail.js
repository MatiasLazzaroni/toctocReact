import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import Context from '../../context/Context';


const ItemDetail = ({stock, imagen, descripcion, precio, subtitulo, nombre, id}) => {
    const[quantity, setQuantity] = useState (0)
   
    const {agregarProd} = useContext(Context)

    function onAdd (quantity) {
        setQuantity(quantity)
        agregarProd({id, nombre, precio, quantity})
    }

   

  return (   
    <div className="tarjetaDetalle">
            <div className='detalleContenedor'>
                <div className='imagenProd'>
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
                    <img className='logosTC' src={require('../../images/VISA.png')} alt='Icono Tarjeta'></img>
                    <img className='logosTC'  src={require('../../images/naranja.png')} alt='Icono Tarjeta'></img>
                    <img className='logosTC'  src={require('../../images/MasterCard.png')} alt='Icono Tarjeta'></img>
                    <img className='logosTC'  src={require('../../images/American.png')} alt='Icono Tarjeta'></img>

                    </div>
                </div>
                <div className='contador'>
                    { quantity > 0 
                    ? <Link to='/carro'> <div className='contenedorFinalizar'>
                                            <div className='contenedorBtn'>
                                                <p className='finalizar1'>Finalizar</p>
                                            </div>
                                            <Link to='/productos' className='contenedorBtn'>
                                                <p className='finalizar2'>Seguir comprando</p>                                               
                                            </Link>
                                        </div> 
                    </Link> 
                    : <ItemCount stock={stock} initial={1} agregar={onAdd}/>}
                    
                </div>
                
            </div>
    </div>
    )
    
}

export default ItemDetail