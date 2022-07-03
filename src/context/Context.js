import { createContext, useState} from "react";
//import { addDoc, collection } from 'firebase/firestore'
//import { toc } from '../service/firebase/index'
//import Swal from 'sweetalert2'


const Context = createContext()

export const ContextToc = ({children}) => {
    const [carro, setCarro] = useState([])
    const [comprador, setComprador] = useState({
      nombre:'',
      celular:'',
      correo:'',
      notas:''
  })
    
    
    const agregarProd = (prodAgregar) => {

      if (!verificarCarro(prodAgregar.id)){
       
        setCarro ([...carro, prodAgregar])
      }else {
        
        const nuevoCarro = carro.map(prod => {
          if(prod.id === prodAgregar.id){
            const copiaProductoAgregado = {
              ...prod,
              quantity: prodAgregar.quantity          
            } 
       
            return copiaProductoAgregado
          }else {
            return prod
          }
        })
       
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

    const resultadoTotal = () => {
      let total = 0
      carro.forEach(prod => {
          total += prod.quantity * prod.precio
      })
      
      return total
  }

  //funciones de firebase

 const cargarDatos = (e)=> {
     setComprador({
        ...comprador,
        [e.target.name]:[e.target.value]

     })
}



    return (
        <Context.Provider value={{carro, agregarProd, acumularCarro, eliminarItem, borrarTodo, verificarCarro, resultadoTotal, cargarDatos, comprador }}>
            {children}
        </Context.Provider>

    )
}

export default Context