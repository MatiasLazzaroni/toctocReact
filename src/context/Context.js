import { createContext, useState} from "react";
import { addDoc, collection } from 'firebase/firestore'
import { toc } from '../service/firebase/index'
import Swal from 'sweetalert2'


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
              quantity: prodAgregar.quantity /* < prodAgregar.stock 
              ? prodAgregar.quantity + 1 : alert (" no hay stock")*/           
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

const enviarDatos = (e)=>{
    e.preventDefault();
    console.log('enviando datos...' + comprador.nombre + ' ' + comprador.apellido)
}

const subirDatos = ()=>{
    
  //const nombreProducto = carro.map(prod => prod.nombre)
  const objOrden = {
        comprador,
        items: carro,
        total: resultadoTotal()
    }

    addDoc(collection(toc, 'pedidos'), objOrden).then(()=>{
     
        Swal.fire({
          
          icon:"success",
          title: "Hemos recibido su pedido",
          text: "En breve nos pondremos en contacto para continuar trabjando con su pedido.",
          footer: "<b>¡Muchas gracias por confiar en TocToc Carpinteria!</b>",
          confirmButtonColor:"#f7333f"
        })
    
        console.log("pedido realizado")
    })
    
    borrarTodo()
  }




    return (
        <Context.Provider value={{carro, agregarProd, acumularCarro, eliminarItem, borrarTodo, verificarCarro, resultadoTotal, cargarDatos, enviarDatos, subirDatos }}>
            {children}
        </Context.Provider>

    )
}

export default Context