import { Link } from 'react-router-dom'
import errorImg from '../assets/img/404error.png'
import Buttons from '../Components/Buttons/Buttons'
import Copyright from '../Components/Copyright/Copyright'

import '../styles/ErrorPage.css'

const ErrorPage = () => {

    return (
        <>
            <div id='errorPage'>
                <img src={errorImg} alt='404 error' id='error404' />
                <br />
                <h2>Algo ha ido mal o esa página no existe.</h2>
                <Buttons text={<Link to={'/'}>Volver al Inicio</Link>} nameClass="btnGreen" />
            </div>
            <Copyright />
        </>
    )
}

export default ErrorPage