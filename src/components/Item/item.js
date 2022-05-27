import './item.css'
import ItemCount from '../ItemCount/ItemCount'

function Item ({imagen, subtitulo, nombre, descripcion, precio, id, stock}) {

    return(
        <div className="tarjeta">
            <div className='cardContenedor'>
                <div className='cardImg'><img src={imagen} alt="imagenes de productos"></img></div>
                <div className='cardTexto'>
                    <p>{id}</p>
                    <p> {subtitulo}</p>
                    <h2>{nombre}</h2>                                       
                </div>
                <p className='descripcion'>{descripcion} </p> 
                <p className='precio'>{precio}</p>
                <ItemCount stock={stock} initial={0}/>                
            </div>
        </div>
    )
}

export default Item