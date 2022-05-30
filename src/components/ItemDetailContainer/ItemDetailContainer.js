import React from 'react'
import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import productoId from '../../herramientas/asyncMock2'

const ItemDetailContainer = () => {
    const[products, setProducts] = useState ()
    const {pId} = useParams ()
    
    useEffect (()=>{
        productoId(pId).then(resultado => {setProducts(resultado)})
    }, [])

    console.log(pId)
    console.log(products)
  return (
       <div> 
            <h1>Detalle del producto</h1>
            <ItemDetail {...products}/>
        
        </div>
  )
}

export default ItemDetailContainer