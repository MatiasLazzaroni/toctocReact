import {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {getDocs, collection, query, where} from 'firebase/firestore'
import { toc } from '../../service/firebase'


function ItemListContainer () {
    const[item, setItem] = useState ([])
    const[cargando, setCargando] = useState(true)
    const {cId} = useParams ()

   
    useEffect (()=>{
        setCargando(true)

        const collectionRef = cId
        ? query( collection(toc, 'productos'), where ('categoria', '==', cId))
        : collection(toc, 'productos')

        getDocs(collectionRef).then(respuesta => {
            const item = respuesta.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setItem (item)
        }).catch(error => {
            alert (error)
           }).finally(() => {
            setCargando(false)
        })
        
    }, [cId])

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
            <div className='portadaProductos'>
                <div className='centrarImg'>
                    <img className='imgLogo' src={require('../../images/logoToc.png')} alt='Icono'></img>
                </div>
                
                <div className='tituloLinea'>
                    
                        <div className='tituloToc'><h2 className='titulo'>TocProductos</h2></div>
                    
                </div>

            </div>
            
            
             <h4 className='textoProd'>Antes de planificar la decoracion de tu espacio, comienza por establecer el caracter de tu casa, proporciones, tamaños, luz y podras comenzar a disfrutar de tu ambiente con tus muebles nuevos.
                Las casas deben ser tan personales, eclécticas y llenas de caracter como nosotros mismos y reflejar nuestro estilo de vida. Los muebles y los complementos pueden a ayudar a dar un aire nuevo a tu casa.</h4>
            
            <div className='contenedorCategoria'>
            <div className='linea'></div>
            <div className='contenedorIconos'>            
                <Link to={`/categoria/habitacion`}>
                    <div className='iconoCategoria'>
                        <img className='icono' src={require('../../images/iconoHabitacion.png')} alt='Icono'></img>
                    </div>
                </Link>
                <Link to={`/categoria/living`}>
                    <div className='iconoCategoria'>
                        <img className='icono' src={require('../../images/IconoLiving.png')} alt='Icono'></img>
                    </div>
                </Link>
                <Link to={`/categoria/cocina`}>
                    <div className='iconoCategoria'>
                        <img className='icono' src={require('../../images/iconoCocina.png')} alt='Icono'></img>
                    </div>
                </Link>
                <Link to={`/categoria/oficina`}>
                    <div className='iconoCategoria'>
                        <img className='icono' src={require('../../images/iconoOficina.png')} alt='Icono'></img>
                    </div>
                </Link>
            </div>
            <div className='linea'></div>

            </div>
           
            <div className='listaDeProductos'>
                <ItemList productos={item}/>
            </div>            
        </div>
    )
}

export default ItemListContainer