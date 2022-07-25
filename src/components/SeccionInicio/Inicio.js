import React from 'react'
import './Inicio.css'
const Inicio = () => {
  return (
    <div className='contenedorInicio'>
        <section className='tituloPortada'>
            <h1>Crea el mueble perfecto</h1>
            <h3>en ese espacio tan especial</h3>
        </section>
        <section className='box1'>
            <h2 className='textoCentrado'>Te ayudamos a darle vida a tus ideas</h2>           
            <img className='imgLogo' src={require('../../images/ambientacion1.jpg')} alt='Icono'></img>
        </section>
        <h2 className='subtitulo1'>¿Como podemos dar vida a tu idea?</h2>
        <section className='box2'>
            <div className='contenidoBox2'> 
                <img className='imgLogo' src={require('../../images/planificacion.jpg')} alt='Icono'></img>
            </div>
            <div className='texto2'>
                <h4 >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros auctor sed vestibulum tellus consequat. Pellentesque tincidunt hendrerit neque, tincidunt tempus mauris consequat non.</h4> 
            </div>                      
        </section>
        <section className='box3'>            
            <div className='texto3'>
                <h4 >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros auctor sed vestibulum tellus consequat. Pellentesque tincidunt hendrerit neque, tincidunt tempus mauris consequat non.</h4> 
            </div>
            <div className='contenidoBox2'> 
                <img className='imgLogo' src={require('../../images/planificacion.jpg')} alt='Icono'></img>
            </div>                      
        </section>
        <section className='box4'>
            <div className='contenidoBox2'> 
                <img className='imgLogo' src={require('../../images/planificacion.jpg')} alt='Icono'></img>
            </div>
            <div className='texto4'>
                <h4 >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros auctor sed vestibulum tellus consequat. Pellentesque tincidunt hendrerit neque, tincidunt tempus mauris consequat non.</h4> 
            </div>                      
        </section>

        <article className='imagenes'>
            <div className='grupo1'>
                <img className='img1' src={require('../../images/a.jfif')} alt='Icono'></img>
                <p className='tituloImg'>Titulo descriptivo</p>
                <p className='descripcionImg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. </p>
            </div>
            <div className='contenedorGrupo'>
                <div className='grupo2'>            
                    <img  className='img2'src={require('../../images/carrusel/a.jpg')} alt='Icono'></img>                                  
                    <p className='tituloImg2'>Titulo descriptivo</p>
                    <p className='descripcionImg2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. </p>
                </div>
                <div className='grupo2'>            
                    <img  className='img2'src={require('../../images/carrusel/b.jpg')} alt='Icono'></img>                                  
                    <p className='tituloImg2'>Titulo descriptivo</p>
                    <p className='descripcionImg2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. </p>
                </div>
            </div>
            
            <div className='grupo3'>            
                <img  className='img3'src={require('../../images/carrusel/c.jpg')} alt='Icono'></img>                                  
                <p className='tituloImg3'>Titulo descriptivo</p>
                <p className='descripcionImg3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. </p>
            </div>
         </article>    
                          
                <img className='img5' src={require('../../images/carrusel/d.jpg')} alt='Icono'></img>                
            
            <div className='grupo3'>
                <img className='img5' src={require('../../images/carrusel/e.jpg')} alt='Icono'></img>
                <img className='img5' src={require('../../images/carrusel/f.jpg')} alt='Icono'></img>
                <img className='img5' src={require('../../images/carrusel/g.jpg')} alt='Icono'></img>
            </div>    
                
            
           
        
        
        
       

       
    </div>
  )
}

export default Inicio