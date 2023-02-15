import ButtonIcon from '../ButtonIcon/ButtonIcon'
import LogoCoffee from '../LogoCoffee/LogoCoffee'
import whiteTelephon from '../../assets/img/Icon.png'
import whiteMail from '../../assets/img/mail.png'
import Copyright from '../Copyright/Copyright'
import './Footer.css'


const Footer = () => {

    return (
        <footer>

            <div className='footer'>
                <div className='footerContact'>
                    <LogoCoffee />
                    <h5>Te ayudamos en</h5>
                    <ButtonIcon imgURL={whiteTelephon} nameClass="btnIconGray" text="+34 919 49 05 18" />
                    <ButtonIcon imgURL={whiteMail} nameClass="btnIconGray" text="hola@cafedealtura.com" />

                    <div >


                    </div>
                </div>

                <ul >
                    <li><a href="">Tienda</a></li>
                    <li><a href="">Suscripción</a></li>
                    <li><a href="">Para empresas</a></li>
                    <li><a href="">Sobre nosotros</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>

                <ul>
                    <li><a href="">Política de privacidad</a></li>
                    <li><a href="">Política de cookies</a></li>
                    <li><a href="">Términos y condiciones</a></li>
                </ul>
            </div>
            <Copyright />
        </footer>
    )
}

export default Footer