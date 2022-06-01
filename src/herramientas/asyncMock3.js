import productos from '../components/Productos/productos'

const productoCategoria = (cId) => {
    return new Promise (resultado =>{
        setTimeout (()=>{
            resultado(productos.filter(prod => prod.categoria === cId))
        }, 2000)
    })
}

export default productoCategoria