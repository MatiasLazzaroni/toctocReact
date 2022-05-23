import {useEffect, useState} from 'react'
import promesa from '../../herramientas/asyncMock'
import productos from '../Productos/productos'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'


function ItemListContainer () {
    const[item, setItem] = useState ([])

    useEffect (()=>{
        promesa(2000, productos)
        .then(resultado => setItem(resultado))
    }, [item])

    return(
        
        <div>
            <h2 className='titulo'>Productos</h2>
            <h4>Antes de planificar la decoracion de tu espacio, comienza por establecer el caracter de tu casa, proporciones, tamaños, luz y podras comenzar a disfrutar de tu ambiente con tus muebles nuevos.
                Las casas deben ser tan personales, eclécticas y llenas de caracter como nosotros mismos y reflejar nuestro estilo de vida. Los muebles y los complementos pueden a ayudar a dar un aire nuevo a tu casa.
            </h4>
            <div className='listaDeProductos'><ItemList productos={item}/></div>
            
        </div>
    )
}

export default ItemListContainer