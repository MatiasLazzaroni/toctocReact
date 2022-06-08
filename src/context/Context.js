import { createContext, useState } from "react";

const Context = createContext()

export const ContextToc = ({children}) => {
    const [carro, setCarro] = useState([])

    
    const agregarProd = (prodAgregar) => {
      console.log(prodAgregar)
      if (!verificarCarro(prodAgregar.id)){
        console.log ("verificar "+ verificarCarro())
        setCarro ([...carro, prodAgregar])
      }else {
        console.log ("entre al else")
        const nuevoCarro = carro.map(prod => {
          if(prod.id === prodAgregar.id){
            const copiaProductoAgregado = {
              ...prod,
              quantity: prodAgregar.quantity /* < prodAgregar.stock 
              ? prodAgregar.quantity + 1 : alert (" no hay stock")*/           
            } 
        console.log("copia prodcuto" + copiaProductoAgregado)
            return copiaProductoAgregado
          }else {
            return prod
          }
        })
       console.log("nuevoCarro" + nuevoCarro )
        setCarro (nuevoCarro)
    }
    }
    
    const acumularCarro = () => {
     let acumulador = 0 
     carro.forEach(prod => acumulador += prod.quantity)
     return acumulador
    }

    const eliminarItem = (id) => {
      const nuevoCarro = carro.filter (prod => prod.id !== id)
      setCarro (nuevoCarro)
    }

    const borrarTodo = ()=> {
      setCarro([])
    }

    const verificarCarro = (id) => {
       return carro.some(prod => prod.id === id)
     
    }

    return (
        <Context.Provider value={{carro, agregarProd, acumularCarro, eliminarItem, borrarTodo, verificarCarro }}>
            {children}
        </Context.Provider>

    )
}

export default Context