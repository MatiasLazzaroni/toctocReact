import './ItemCount.css'
import {useState} from 'react'


function ItemCount ({stock, initial, agregar}) {
    
    const [quantity, setQuantity] = useState(initial)
  
     function sumar () {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    function restar () {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }
    }
    
    return(        
        <div className='cardBoton' >
            <div className="signo" onClick={restar}>-</div>
            <div className='agregarCarrito'>
                <div>
                    <p className='contador'>{quantity}</p>
                    <p className='texto' onClick={() => agregar(quantity)}>Agregar</p>
                </div>
            </div>
            <div className="signo2" onClick={sumar}>+</div>
        </div>
    )
}

export default ItemCount