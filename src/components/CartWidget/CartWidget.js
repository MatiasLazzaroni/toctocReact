import { useContext } from "react"
import Context from '../../context/Context'
import './CartWidget.css'

const CartWidget = () => {

const {acumularCarro} = useContext(Context)

const cantidad = acumularCarro()

return (
        <div className='iconoCarro'>
            { cantidad === 0 
            ? "" 
            : <div className="carroFlex">
                <img src={require('../../images/iconoCarro.png')} alt='iconoCarga'></img>
                <div className="circulo">{cantidad}</div>
              </div>}           
        </div>       
    )
}

export default CartWidget