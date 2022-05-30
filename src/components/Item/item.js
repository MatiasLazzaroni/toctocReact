import './item.css'

import {Link} from 'react-router-dom'

function Item ({imagen, subtitulo, nombre, id}) {

    return(
        <div className="tarjeta" >
            <div className='cardContenedor'>
                <div>
                    <img src={imagen} alt="imagenes de productos"></img>
                </div>
                <div className='cardTexto'>
                    <p key={id}></p>
                    <p> {subtitulo}</p>
                    <h2>{nombre}</h2>
                                                  
                </div>
                <Link to={`/detalles/${id}`}>
                    <div className='btnDetalle'>
                        <div>DETALLES</div>
                    </div>
                </Link>          
            </div>
        </div>
    )
}

export default Item