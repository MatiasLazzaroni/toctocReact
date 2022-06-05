import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import {Link} from 'react-router-dom'


const NavBar = () => {

    return (
        <div className='menu'>
            <div className='logoToc'>
                <img src= './images/logoToctocNavBar.svg' alt='logoTocNavBar'></img>
            </div>
                
            <nav>      
                <ul>                
                    <Link to='/'><li>INICIO</li></Link>
                    <li>NOSOTROS</li>
                    <Link to='/productos'><li>PRODUCTOS</li></Link>
                </ul>
            </nav>
            <Link to='/carro'><CartWidget/></Link>
        </div>

    )
}

export default NavBar