import React from 'react'
import './Slider.css'

const Slider = () => {

   /* let slider = document.querySelector(".contenedorOpiniones")
    let sliderInd = document.querySelectorAll(".opiniones")
    let contador= 1
    let tamañoWidth= sliderInd[0].clientWidth
    let intervalo = 3000

    

    function slides (){
        slider.style.transform = 'translate('+(-tamañoWidth * contador) + 'px)'
        slider.style.transition= 'transform 1s'
        contador++

        if(contador === sliderInd.length){
            contador=0
            setTimeout(function(){
                slider.style.transform = 'translate(0px)'
                slider.style.transition= 'transform 0s'
            }, intervalo)
        }
    }
    setInterval( function tiempo (){
          slides()
    }, intervalo)*/

    
  return (
    <section className='seccionOpiniones'>
        <div className='tituloTestimonios'>
            <h3>Testimonios</h3>
            <h2>GENTE REAL, PALABRAS REALES</h2>
        </div>

        <article className='contenedorOpiniones'>
            <div className='opiniones'>
                <h3>Nombre y Apellido</h3>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna."</p>                
            </div>
            <div className='opiniones'>
                <h3>Nombre y Apellido</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna.</p>
            </div>
            <div className='opiniones'>
                <h3>Nombre y Apellido</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna.</p>
            </div>
            <div className='opiniones'>
                <h3>Nombre y Apellido</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna.</p>
            </div>            
        </article>
    </section>
  )
}

export default Slider