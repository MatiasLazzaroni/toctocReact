import {React, useContext} from 'react'
import './Formulario.css'
import Context from '../../context/Context'


const Formulario = () => {
    const {cargarDatos, enviarDatos, subirDatos} = useContext(Context)
   

  return (
    <section className='contenedorForm'>
        
        <form className='cuerpoForm' onSubmit={enviarDatos}>
            <h1 className='tituloForm'>Orden de Compra</h1>
            
            <div className='cuerpoInput'>
                <label for="cliente" className="nombreInput">Nombre y apellido: </label>
                <input  type="text" 
                        name="cliente" 
                        className="inputForm" 
                        required="required" 
                        
                        onChange={cargarDatos}></input>
            </div>
            <div className='cuerpoInput'>
                <label for="celular" className="nombreInput">Celular: </label>
                <input  type="text" 
                        name="celular" 
                        className="inputForm" 
                        required="required" 
                        
                        onChange={cargarDatos}></input>
            </div>
            <div className='cuerpoInput'>
                <label for="correo" className="nombreInput">Correo: </label>
                <input  type="email" 
                        name="correo" 
                        className="inputForm" 
                        required="required" 
                        
                        onChange={cargarDatos}></input>
            </div>
            <div className='cuerpoInput'>
                <label for="notas" className="nombreInput">Notas: </label>
                <textarea   name="notas" 
                            rows="10" 
                            cols="20" 
                            className="inputForm" 
                            placeholder='Comentario sobre el producto...' 
                            required="required" 
                            
                            onChange={cargarDatos}></textarea>
            </div>
            <div className='btnSeguir'> 
                <p type='submit' className='textoVolver' onClick={subirDatos}>Enviar</p>
            </div>
        </form>
    </section>
  )
}

export default Formulario