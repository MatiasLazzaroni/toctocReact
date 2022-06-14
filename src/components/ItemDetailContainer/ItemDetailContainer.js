import React from 'react'
import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
//import productoId from '../../herramientas/asyncMock2'
import {getDoc, doc} from 'firebase/firestore'
import { toc } from '../../service/firebase'

const ItemDetailContainer = () => {
    const[products, setProducts] = useState ()
    const {pId} = useParams ()
    const[cargando, setCargando] = useState(true)
    
    useEffect (()=>{

      getDoc(doc(toc, 'productos', pId)).then(resultado => {
        const products = {id: resultado.id, ...resultado.data() }
        setProducts(products)
      }).catch(error => {
        alert (error)
       }).finally(() => {setCargando(false)})

        /*productoId(pId).then(resultado => {setProducts(resultado)}).catch(error => {
          alert (error)
         }).finally(() => {setCargando(false)})*/
    }, )

    if (cargando) {
      return (
        <div className='tresPuntos'>
          <div className='punto'></div>
          <div className='punto'></div>  
          <div className='punto'></div>        
        </div>
      )    
  }

  return (
       <div className='contenedorDetalle'> 
            
            <ItemDetail {...products}/>
            
        </div>
  )
}

export default ItemDetailContainer