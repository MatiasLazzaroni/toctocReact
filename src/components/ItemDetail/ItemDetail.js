import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import Context from '../../context/Context';


const ItemDetail = ({stock, imagen, descripcion, precio, subtitulo, nombre, id}) => {
    const[quantity, setQuantity] = useState (0)
   
    const {agregarProd} = useContext(Context)
   
    function onAdd (quantity) {
       console.log("quantity ItemDetail "+ quantity)
        setQuantity(quantity)
        agregarProd({id, nombre, precio, quantity, stock})      
            
    }

  return (   
    <div className="tarjetaDetalle">
            <div className='detalleContenedor'>
                <div className='imagenProd'>
                    <img src={imagen} alt="imagenes de productos"></img>
                </div>
        
               <div className='textoDetalle'>                   
                    <p> {subtitulo}</p>
                    <h2 className='tituloDescrip'>{nombre}</h2>   
                    <p className='descripcion'>{descripcion} </p>
                    
                    <div className='textoEnvio'>
                        <h4 className='envio'><b>ENVÍO GRATIS</b></h4>
                        <h5 >Solo en Bahia Blanca y Punta Alta</h5>
                    </div>                     
                    <p className='precio'>${precio}</p>
                    <div className='logosTarjetas'>
                    <img className='tarjetas' src={require('../../images/VISA.png')} alt='Icono'></img>
                    <img className='tarjetas' src={require('../../images/MasterCard.png')} alt='Icono'></img>
                    <img className='tarjetas' src={require('../../images/naranja.png')} alt='Icono'></img>
                    <img className='tarjetas' src={require('../../images/American.png')} alt='Icono'></img>
                    </div>
                </div>
                <div className='contador'>
                    { quantity > 0 
                    ? <div>
                        <Link to='/carro'> <div className='contenedorFinalizar'>
                                                <div className='contenedorBtn'>
                                                    <p className='finalizar1'>Finalizar</p>
                                                </div>                                            
                                            </div> 
                        </Link>                         
                    </div>
                    : <ItemCount stock={stock} initial={1} agregar={onAdd}/>
                    }
                                    
                </div>              
            </div>
    </div>
    )
    
}

export default ItemDetail