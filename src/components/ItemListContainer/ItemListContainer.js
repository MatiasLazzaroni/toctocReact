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
            <h1 className='titulo1'>TocProdcutos</h1>
            <h3 className='titulo2'>Elige entre todos <br></br> los productos que tenemos <br></br>preparado para usted.</h3>
            <h4 className='titulo3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br> Sed a felis non sem elementum tempor in at urna. Suspendisse <br></br>auctor libero ut nibh consequat sed sagittis dolor iaculis.</h4>
            <section className='box1'>            
                <h2 className='textoCentrado'>Te ayudamos a darle vida a tus ideas</h2>           
                <img className='imgLogo' src={require('../../images/portadaProductos.jpg')} alt='Icono'></img>
            </section>                     
            <div className='contenedorCategoria'>
                
                <h2>Categorias</h2> 
                <div className='contenedorIconos'>   
                            
                    <Link to={`/categoria/habitacion`}>
                        <div className='iconoCategoria'>
                        
                            <p>Habitaciones</p>
                        </div>
                    </Link>
                    <Link to={`/categoria/living`}>
                        <div className='iconoCategoria'>
                        
                            <p>Living</p>
                        </div>
                    </Link>
                    <Link to={`/categoria/cocina`}>
                        <div className='iconoCategoria'>
                        
                            <p>Cocinas</p>
                        </div>
                    </Link>
                    <Link to={`/categoria/oficina`}>
                        <div className='iconoCategoria'>
                            
                            <p>Oficinas</p>
                        </div>
                    </Link>
                </div>
                

            </div>
           
            <div className='listaDeProductos'>
                <ItemList productos={item}/>
            </div>            
        </div>
    )
}

export default ItemListContainer