import React from 'react'
import './Inicio.css'
const Inicio = () => {
  return (
    <div className='contenedorInicio'>
            <h1 className='titulo1'>¿Renovación o mejorar tu hogar?</h1>
            <h3 className='titulo2'>Expertos en renovación  en <br></br>habitaciones, cocinas, <br></br>gimnasios y más.</h3>
            <h4 className='titulo3'> Brindamos una gama de servicios de construcción de alta <br></br>calidad, desde cubiertas de madera y renovaciones hasta pisos <br></br> de madera y carpintería. Nuestros constructores de TocToc son <br></br> confiables y asequibles, ¡así que llámenos hoy!</h4>
        <section className='box1'>            
            <h2 className='textoCentrado'>Te ayudamos a darle vida a tus ideas</h2>           
            <img className='imgLogo' src={require('../../images/ambientacion1.jpg')} alt='Icono'></img>
        </section>

        <article className='contenedorInfo'>
            <h2 className='subtitulo1'>MADERA AQUÍ, MADERA ALLÁ, MADERA POR TODAS PARTES.</h2>
            <p className='textoInfo'>Ya sea que esté planeando la cocina de sus sueños, construyendo un espacio al aire libre, renovando el baño o agregando una nueva mano de pintura a su hogar; tenemos el equipo adecuado para el trabajo, al precio adecuado.</p>
            <section className='contenedorCuadrados'>
                <div className='cuadrados'>

                </div>
                <div className='cuadrados'>
                
                </div>
                <div className='cuadrados'>
                
                </div>
                <div className='cuadrados'>
                
                </div>
            </section>
            
        </article>

        <article className='imagenes'>
            <div className='textosImg'>
                <h2 className='texto1'>CALIDAD EN TODO LO QUE HACEMOS.</h2>
                <p className='texto2'>Ya sea que esté planeando la cocina de sus sueños, construyendo un espacio al aire libre, renovando el baño, modernizando la lavandería o reparando su techo con goteras; tenemos el equipo adecuado para el trabajo, al precio adecuado. <br></br><br></br>Nuestro equipo de carpinteros calificados y profesionales cuenta con una amplia gama de experiencia en construcción, lo que significa que está en buenas manos, sin importar cuáles sean las necesidades de mejora de su hogar.</p>
            </div>
            <section>
                <div className='contenedorGrupo'>
                    <div className='grupo1'>
                        <img className='img1' src={require('../../images/1.jpg')} alt='Icono'></img>
                        <p className='tituloImg'>Titulo descriptivo</p>
                        <p className='descripcionImg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. </p>
                    </div>
                    <div className='grupo1'>            
                        <img  className='img1'src={require('../../images/2.jpg')} alt='Icono'></img>                                  
                        <p className='tituloImg'>Titulo descriptivo</p>
                        <p className='descripcionImg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. </p>
                    </div>
                    <div className='grupo1'>            
                        <img  className='img1'src={require('../../images/3.jpg')} alt='Icono'></img>                                  
                        <p className='tituloImg'>Titulo descriptivo</p>
                        <p className='descripcionImg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. </p>
                    </div>
                </div>

                <div className='contenedorGrupo2'>
                    <div className='grupo2'>            
                        <img  className='img2'src={require('../../images/4.jpg')} alt='Icono'></img>                                  
                        <p className='tituloImg2'>Titulo descriptivo</p>
                        <p className='descripcionImg2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. </p>
                    </div>
                    <div className='grupo2'>                    
                        <p className='tituloImg2'>Titulo descriptivo</p>
                        <p className='descripcionImg2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. </p>
                        <img className='img2' src={require('../../images/5.jpg')} alt='Icono'></img>
                    </div>    
                    <div className='grupo2'>                    
                        <p className='tituloImg2'>Titulo descriptivo</p>
                        <p className='descripcionImg2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. </p>
                        <img className='img2' src={require('../../images/6.jpg')} alt='Icono'></img>
                    </div>
                </div>
            </section>              
        </article>
        

            
    </div>
  )
}

export default Inicio