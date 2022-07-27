import React from 'react'
import Slider from '../SliderComentarios/Slider'
import './Inicio.css'
import { ImUserTie, ImCoinDollar, ImLocation, ImHammer } from "react-icons/im";

const Inicio = () => {
  return (
    <div className='contenedorInicio'>
            <h1 className='titulo1'>¿Renovación o mejorar tu hogar?</h1>
            <h3 className='titulo2'>Expertos en carpinteria, <br></br>ambientaciones comerciales, <br></br>industriales y más.</h3>
            <h4 className='titulo3'> Brindamos una gama de servicios de construcción de alta <br></br>calidad, desde cubiertas de madera y renovaciones hasta pisos <br></br> de madera y carpintería. Nuestros constructores de TocToc son <br></br> confiables y asequibles, ¡así que llámenos hoy!</h4>
        <section className='box1'>            
            <h2 className='textoCentrado'>Te ayudamos a darle vida a tus ideas</h2>           
            <img className='imgLogo' src={require('../../images/ambientacion1.jpg')} alt='Icono'></img>
        </section>

        <article className='contenedorInfo'>
            
            <h2 className='subtitulo1'>POR QUÉ ELEGIR TOCTOC CARPINTERIA</h2>
            <p className='textoInfo'>Ya sea que esté planeando la cocina de sus sueños, construyendo un espacio al aire libre, renovando el baño o agregando una nueva mano de pintura a su hogar; tenemos el equipo adecuado para el trabajo y al precio adecuado.</p>
            <section className='contenedorCuadrados'>
                <div className='cuadrados'>
                    <ImUserTie style={{fontSize:'60px', color: '#f7333f'}}/>
                    <p>Confianza</p>
                </div>
                <div className='cuadrados'>
                    <ImCoinDollar style={{fontSize:'60px', color: '#f7333f'}}/>
                    <p>Precios accesibles</p>
                </div>
                <div className='cuadrados'>
                    <ImLocation style={{fontSize:'60px', color: '#f7333f'}}/>
                    <p>Local comercial</p>
                </div>
                <div className='cuadrados'>
                    <ImHammer style={{fontSize:'60px', color: '#f7333f'}}/>
                    <p>Calidad y garantia</p>
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

        <Slider/>

        <section className='contenedorPerfil'>
            <div className='contenedorFoto'>
                <img className='fotoPerfil'src="" alt=''></img>
            </div>
            <div className='textoPerfil'>           
                <h2>HISTORIA DE TOCTOC CARPINTERIA</h2>
                <p>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso de producción más libertad.
                Se cree ampliamente que la historia de Lorem Ipsum se origina con Cicerón en el siglo I aC y su texto De Finibus bonorum et malorum. Esta obra filosófica, también conocida como En los extremos del bien y del mal, se dividió en cinco libros. El Lorem Ipsum que conocemos hoy se deriva de partes del primer libro Liber Primus y su discusión sobre el hedonismo, cuyas palabras habían sido alteradas, añadidas y eliminadas para convertirlas en un latín sin sentido e impropio. No se sabe exactamente cuándo el texto recibió su forma tradicional actual. Sin embargo, las referencias a la frase "Lorem Ipsum" se pueden encontrar en la Edición de la Biblioteca Clásica Loeb de 1914 del De Finibus en las secciones 32 y 33. Fue en esta edición del De Finibus en la que H. Rackman tradujo el texto. El siguiente fragmento se selecciona de la sección 32:</p>
            </div> 
        </section>          
    </div>
  )
}

export default Inicio