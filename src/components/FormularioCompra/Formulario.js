import {React, useState, useContext} from 'react'
import './Formulario.css'
import Context from '../../context/Context'
import { addDoc, collection } from 'firebase/firestore'
import { toc } from '../../service/firebase'

const Formulario = () => {
    const {carro, resultadoTotal} = useContext(Context)
    const [comprador, setComprador] = useState({
        nombre:'',
        celular:'',
        correo:'',
        notas:''
    })

     const crearOrden = ()=> {
         const objOrden = {
            comprador,
            items: carro,
            total: resultadoTotal()
         }

        addDoc(collection(toc, 'pedidos'), objOrden).then(({id})=>{
            console.log (`Se agrega el pedido numero: ${id}`)
        })
    }


  return (
    <section className='contenedorForm'>
        
        <form className='cuerpoForm'>
            <h1 className='tituloForm'>Orden de Compra</h1>
            <div className='cuerpoInput'>
                <label for="usuario" className="nombreInput">Nombre y apellido: </label>
                <input type="text" name="usuario" className="inputForm" required value={comprador.nombre} onChange={(e)=> setComprador({...comprador, nombre: e.target.value})}></input>
            </div>
            <div className='cuerpoInput'>
                <label for="usuario" className="nombreInput">Celular: </label>
                <input type="number" name="usuario" className="inputForm" required></input>
            </div>
            <div className='cuerpoInput'>
                <label for="usuario" className="nombreInput">Correo: </label>
                <input type="email" name="usuario" className="inputForm" required></input>
            </div>
            <div className='cuerpoInput'>
                <label for="usuario" className="nombreInput">Notas: </label>
                <textarea name="textarea" rows="10" cols="20" className="inputForm" placeholder='Comentario sobre el producto...' required></textarea>
            </div>
            <div className='btnSeguir'> 
                <p className='textoVolver' onClick={crearOrden()}>Enviar</p>
            </div>
        </form>

    </section>
  )
}

export default Formulario