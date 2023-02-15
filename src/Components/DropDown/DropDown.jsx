import './DropDown.css'
import arrowIMG from '../../assets/img/flecha.png'
import ArrowLink from '../ArrowLink/ArrowLink'
import { useState } from 'react'

const DropDown = (props) => {

    const [dropDown1, setDropDown1] = useState(false)
    const [dropDown2, setDropDown2] = useState(false)
    const [dropDown3, setDropDown3] = useState(false)


    return (
        <div className='DropDown'>
            <h2>Preguntas frecuentes</h2>

            <article>
                <h3>¿Cómo hago el pedido? <span><img src={arrowIMG} alt="arrow"
                    id='dropDown1Btn' onClick={() => {
                        let dropDown1Btn = document.getElementById('dropDown1Btn')

                        dropDown1 ? (
                            dropDown1Btn.style.transform = "rotate(-360deg)"
                        ) : (
                            dropDown1Btn.style.transform = "rotate(-180deg)"
                        )

                        setDropDown1(!dropDown1)
                    }} /></span></h3>
                {dropDown1 &&
                    <p>Selecciona el café que desees probar y completa el proceso de compra. Si lo
                        prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así
                        nunca te quedarás sin café.</p>}
            </article>

            <article>
                <h3>¿Por qué los precios son tan bajos? <span><img src={arrowIMG} alt="arrow"
                    id='dropDown2Btn' onClick={() => {                        
                        let dropDown2Btn = document.getElementById('dropDown2Btn')

                        dropDown2 ? (
                            dropDown2Btn.style.transform = "rotate(-360deg)"
                            ) : (
                                dropDown2Btn.style.transform = "rotate(-180deg)"
                        )

                        setDropDown2(!dropDown2)
                    }} /></span></h3>
                {dropDown2 &&
                    <p>Viajamos constantemente para encontrar los mejores granos y a los agricultores más
                        exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con
                        los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti
                        y la persona que está detrás de los granos de café recibe el mayor beneficio posible.</p>}

            </article>

            <article>
                <h3>¿Es posible enviar café a mi oficina? <span><img src={arrowIMG} alt="arrow"
                    id='dropDown3Btn' onClick={() => {
                        let dropDown3Btn = document.getElementById('dropDown3Btn')

                        dropDown3 ? (
                            dropDown3Btn.style.transform = "rotate(-360deg)"
                            ) : (
                                dropDown3Btn.style.transform = "rotate(-180deg)"
                        )
                        setDropDown3(!dropDown3)}} /></span></h3>
                {dropDown3 &&
                    <p>Enviamos nuestro café a cualquier punto de la geografía española, ya sea una oficina o un hogar.</p>}

            </article>

            <ArrowLink text="Resolvemos tus dudas" nameClass="arrowLinkWhite" />
        </div>
    )
}

export default DropDown