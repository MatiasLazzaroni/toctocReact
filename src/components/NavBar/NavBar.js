import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


const NavBar = () => {

    return (
        <div className='menu'>
            <div className='logoToc'>
                <img src= './images/logoToctocNavBar.svg' alt='logoTocNavBar'></img>
            </div>
                
            <nav>      
                <ul>                
                    <li>INICIO</li>
                    <li>NOSOTROS</li>
                    <li>PRODUCTOS</li>
                </ul>
            </nav>
            <CartWidget/>
        </div>

    )
}

export default NavBar