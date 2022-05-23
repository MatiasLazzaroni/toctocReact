import Item from '../Item/item'

function ItemList ({productos}){

    return(
        productos.map( prod => (<Item id={prod.id}{...prod}/>))
    )
}

export default ItemList