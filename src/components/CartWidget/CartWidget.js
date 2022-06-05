import { useContext } from "react"
import Context from '../../context/Context'
import './CartWidget.css'

const CartWidget = () => {

const {acumularCarro} = useContext(Context)

const cantidad = acumularCarro()

return (
        <div className='iconoCarro'>
            <img src='./images/IconoCarga.svg' alt='iconoCarga'></img>
            <div className="circulo">{cantidad}</div>
            
        </div>       
    )
}

export default CartWidget