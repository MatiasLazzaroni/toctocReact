import productos from '../components/Productos/productos'

const productoId = (id) => {
    return new Promise (resultado =>{
        setTimeout (()=>{
            resultado(productos.find(prod => prod.id === id))
        }, 2000)
    })
}

export default productoId