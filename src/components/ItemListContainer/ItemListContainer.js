import {useEffect, useState} from 'react'
//import promesa from '../../herramientas/asyncMock'
//import productos from '../Productos/productos'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {getDocs, collection, query, where, limit} from 'firebase/firestore'
import { toc } from '../../service/firebase'


function ItemListContainer () {
    const[item, setItem] = useState ([])
    const[cargando, setCargando] = useState(true)
    const {cId} = useParams ()

   
    useEffect (()=>{
        setCargando(true)

        const collectionRef = cId
        ? query( collection(toc, 'productos'), where ('categoria', '==', cId), limit(1))
        : collection(toc, 'productos')

        getDocs(collectionRef).then(respuesta => {
            console.log (respuesta)
            const item = respuesta.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setItem (item)
        }).catch(error => {
            alert (error)
           }).finally(() => {
            setCargando(false)
        })

        /*if(!cId){
           promesa(2000, productos)
            .then(resultado => setItem(resultado)).catch(error => {
            alert (error)
            })
            .finally(() => {setCargando(false)})   
        }
        else{
            promesa(2000, productos)
            .then(resultado => setItem(resultado.filter (prod => prod.categoria === cId)))
            .catch(error => {
             alert (error)
            })
            .finally(() => {
                setCargando(false)
            })
        }*/
 

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
            <img className='imgLogo' src={require('../../images/logoToc.png')} alt='Icono'></img>
            <div className='tituloLinea'>
                <div className='linea'></div>
                    <div className='tituloToc'><h2 className='titulo'>TocProductos</h2></div>
                <div className='linea'></div>
            </div>
            
             <h4>Antes de planificar la decoracion de tu espacio, comienza por establecer el caracter de tu casa, proporciones, tamaños, luz y podras comenzar a disfrutar de tu ambiente con tus muebles nuevos.
                Las casas deben ser tan personales, eclécticas y llenas de caracter como nosotros mismos y reflejar nuestro estilo de vida. Los muebles y los complementos pueden a ayudar a dar un aire nuevo a tu casa.
            </h4>
            
            <div className='contenedorCategoria'>
            
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
           
            <div className='listaDeProductos'>
                <ItemList productos={item}/>
            </div>            
        </div>
    )
}

export default ItemListContainer