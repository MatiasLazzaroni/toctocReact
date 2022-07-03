import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
    <div className='contenedorFooter'>
       
            <div className='seccionUno'>            
                <ul className='contenedorMenuFooter'>                
                    <Link to='/'><li className='menuFooter'>INICIO</li></Link>
                    <li className='menuFooter'>NOSOTROS</li>
                    <Link to='/productos'><li className='menuFooter'>PRODUCTOS</li></Link>
                </ul>
            </div>

            <div className='seccionDos'>
                <img  src={require('../../images/tocFooter.png')} alt='footer TocToc'></img>
                <div className='redesFooter'>
                    <img  src={require('../../images/iconoFaceFooter.png')} alt='footer TocToc' className='redesFooter'></img>
                    <img  src={require('../../images/iconoInstaFooter.png')} alt='footer TocToc' className='redesFooter'></img>
                    <img  src={require('../../images/iconoWhatsappFooter.png')} alt='footer TocToc' className='redesFooter'></img>
                </div>
            </div>

            <div className='seccionTres'>
                <p>Estamos en:</p>
                <p> Lavalle 222, CP 8000 </p>
                <p>Bahía Blanca, Provincia de Buenos Aires</p>
            </div>

            
            
    </div>
    <div className='autor'>
        <p className='textoAutor'> &copy;{new Date().getFullYear()} Developer Frontend Matias Lazzaroni | Diseño realizado para TocToc Carpinteria </p>
    </div>
    </div>
  )
}

export default Footer