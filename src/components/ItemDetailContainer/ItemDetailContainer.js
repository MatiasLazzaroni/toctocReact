import React from 'react'
import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import productoId from '../../herramientas/asyncMock2'

const ItemDetailContainer = () => {
    const[products, setProducts] = useState ()
    const {pId} = useParams ()
    const[cargando, setCargando] = useState(true)
    
    useEffect (()=>{
        productoId(pId).then(resultado => {setProducts(resultado)}).catch(error => {
          alert (error)
         }).finally(() => {setCargando(false)})
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
       <div className='contenedor'> 
            <h1>Detalle del producto</h1>
            <ItemDetail {...products}/>
            
        </div>
  )
}

export default ItemDetailContainer