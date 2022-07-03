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
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    function agregar2 () {
        agregar(quantity)
    }
    
    return(        
        <div className='cardBoton' >
            <div className="signo" onClick={restar}>-</div>
            <div className='agregarCarrito'>                
                <p className='contador'>{quantity}</p>
                <p className='texto' onClick={agregar2}>Agregar</p>                
            </div>
            <div className="signo2" onClick={sumar}>+</div>
        </div>
    )
}

export default ItemCount