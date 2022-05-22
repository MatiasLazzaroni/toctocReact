import Item from '../Item/item'

function ItemList ({productos}){

    return(
        productos.map( prod => ( 
        <Item
        id={prod.id}
        imagen={prod.imagen}
        nombre={prod.nombre}
        subtitulo={prod.subtitulo}
        descripcion={prod.descripcion}
        precio={prod.precio}
        stock={prod.stock}
        />        
        ))
    )
}

export default ItemList