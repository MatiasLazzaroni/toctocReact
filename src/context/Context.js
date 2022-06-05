import { createContext, useState } from "react";

const Context = createContext()

export const ContextToc = ({children}) => {
    const [carro, setCarro] = useState([])

    const agregarProd = (prodAgregar) => {
      setCarro ([...carro, prodAgregar])
    }
    const acumularCarro = () => {
     let acumulador = 0 
     carro.forEach(prod => { acumulador += prod.quantity})
     return acumulador
    }

    const eliminarItem = (id) => {
      const nuevoCarro = carro.filter (prod => prod.id !== id)
      setCarro (nuevoCarro)
    }

    const borrarTodo = ()=> {
      setCarro([])
    }

    return (
        <Context.Provider value={{carro, agregarProd, acumularCarro, eliminarItem, borrarTodo }}>
            {children}
        </Context.Provider>

    )
}

export default Context