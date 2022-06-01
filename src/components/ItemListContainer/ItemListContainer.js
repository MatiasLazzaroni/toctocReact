import {useEffect, useState} from 'react'
import promesa from '../../herramientas/asyncMock'
import productoCategoria from '../../herramientas/asyncMock3'
import productos from '../Productos/productos'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'


function ItemListContainer () {
    const[item, setItem] = useState ([])
    const[cargando, setCargando] = useState(true)
    const {cId} = useParams ()

    useEffect (()=>{
        setCargando(true)
        
        promesa(2000, productos)
        .then(resultado => setItem(resultado)).catch(error => {
         alert (error)
        }).finally(() => {setCargando(false)})    
 
        /*productoCategoria(cId).then(resultado => setItem(resultado)).catch(error => {
         alert (error)
        }).finally(() => {setCargando(false)})}*/

    }, [item])

    if (cargando) {
        return (
        <div className='tresPuntos'>
          <div className='punto'></div>
          <div className='punto'></div>  
          <div className='punto'></div>        
        </div>
        )
    }

    return(
        
        <div>
            
            <h2 className='titulo'>Productos</h2>
            <h4>Antes de planificar la decoracion de tu espacio, comienza por establecer el caracter de tu casa, proporciones, tamaños, luz y podras comenzar a disfrutar de tu ambiente con tus muebles nuevos.
                Las casas deben ser tan personales, eclécticas y llenas de caracter como nosotros mismos y reflejar nuestro estilo de vida. Los muebles y los complementos pueden a ayudar a dar un aire nuevo a tu casa.
            </h4>
            <div className='listaDeProductos'>
                <ItemList productos={item}/>
            </div>
            <h2 className='titulo'>Por categoria</h2>
            <div className='contenedorCategoria'>
            <Link to={`/categoria/${cId}`}><div className='iconoCategoria'><img className='icono' src={require('../../images/iconoHabitacion.png')} alt='Icono'></img></div></Link>
            <Link to={`/categoria/${cId}`}><div className='iconoCategoria'><img className='icono' src={require('../../images/IconoLiving.png')} alt='Icono'></img></div></Link>
            </div>
        </div>
    )
}

export default ItemListContainer