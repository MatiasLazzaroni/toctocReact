import {React, useContext, useState} from 'react'
import './Formulario.css'
import Context from '../../context/Context'
import { addDoc, collection } from 'firebase/firestore'
import { toc } from '../../service/firebase/index'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'





const Formulario = () => {
    const {cargarDatos,  carro, resultadoTotal, borrarTodo, comprador} = useContext(Context)
    const[final, setFinal] = useState(false)
    const[cargando, setCargando] = useState(false)
    const productoSeleccionado = carro.map(prod => prod.nombre)
    const imagenSeleccionado = carro.map(prod=> prod.descripcion)
    const totalCarro = resultadoTotal()
    const {handleSubmit} = useForm();
    
  
   
     const onSubmit = (data) => {
            console.log(data)
           
        }

    const subirDatos = (e)=>{ 
         e.preventDefault(); 
        const objOrden = {
              comprador,
              items: carro,
              total: resultadoTotal()
          }
         
          addDoc(collection(toc, 'pedidos'), objOrden).then(({id})=>{     
              Swal.fire({          
                icon:"success",
                title: "Hemos recibido su pedido",
                text: `Su pedido numero: ${id} se ha cargado correctamente.`,
                footer: "<b>¡Muchas gracias por confiar en TocToc Carpinteria!</b>",
                confirmButtonColor:"#f7333f"
              })
          
              console.log( "datos suministrados por el usuario: ",{objOrden} )
          }).finally(() => {
            setFinal(true)            
            borrarTodo()
        })
        
        setCargando(true)
      }

      if (final) {
        return (
        <div className='mensajeFinal'>
            <img className= "imgCarroVacio"  src={require('../../images/carroLleno.png')} alt='carro lleno'></img>                    
            <p className='textoFinal'>¡Gracias por su pedido!</p>
        </div>
        )
    }
      if (cargando) {
            return (
              <div className='tresPuntosFinal'>
                <section className='contenedor1'>
                    <p className='generandoOrden'>Generando orden</p>
                </section>
                <section className='contenedor2'>
                    <div className='puntoFinal'></div>
                    <div className='puntoFinal'></div>  
                    <div className='puntoFinal'></div>  
                </section>                
              </div>
            )    
        }   

return (
    <section className='contenedorForm'>
        
        <form className='gridForm' onSubmit={handleSubmit(onSubmit)}>
                
                <article className='pedidoSeleccionado'>
                    <img  src={require('../../images/LogoTocCarrito.png')} alt='logo Toc Carrito'></img>
                    <h3>TocProducto seleccionado:</h3>
                    {imagenSeleccionado}
                    <p className='nombrePedido'>{productoSeleccionado}</p>
                    <p className='precioPedido'>Total: ${totalCarro}</p>
                </article>
                

            <div className='cuerpoForm'>
                <h1 className='tituloForm'>Orden de Compra</h1>                 
                <div className='cuerpoInput'>
                    <label for="cliente" className="nombreInput">Nombre y apellido: </label>
                    <input  type="text" 
                            name="cliente" 
                            className="inputForm" 
                            onChange={cargarDatos} 
                                                       
                    ></input>

                </div>
                <div className='cuerpoInput'>
                    <label for="celular" className="nombreInput">Celular: </label>
                    <input  type="text" 
                            name="celular" 
                            className="inputForm" 
                            onChange={cargarDatos}                         
                    ></input>
                    
                </div>
                <div className='cuerpoInput'>
                    <label for="correo" className="nombreInput">Correo: </label>
                    <input  type="email" 
                            name="correo" 
                            className="inputForm"                             
                            onChange={cargarDatos}                            
                    ></input>
                   
                   
                </div>
                <div className='cuerpoInput'>
                    <label for="notas" className="nombreInput">Notas: </label>
                    <textarea   name="notas" 
                                rows="10" 
                                cols="20" 
                                className="inputForm" 
                                placeholder='Comentario sobre el producto...' 
                                onChange={cargarDatos}></textarea>
                </div>
                <div className='btnSeguir'> 
                    <buttom type='submit' className='textoVolver' onClick={subirDatos}>Enviar</buttom>
                </div>
            </div>
        </form>
    </section>
  )
}

export default Formulario