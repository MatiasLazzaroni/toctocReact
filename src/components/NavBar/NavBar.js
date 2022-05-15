import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


const NavBar = () => {

    return (
        <div className='menu'>
            <div className='logoToc'>
                <img  src='./images/logoToctocNavBar.svg' alt='logoTocNavBar'></img>
            </div>
                
            <nav>      
                <ul>                
                    <li>Inicio</li>
                    <li>Nosotros</li>
                    <li>Productos</li>
                </ul>
            </nav>
            <CartWidget/>
        </div>

    )
}

export default NavBar