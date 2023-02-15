import { Link } from 'react-router-dom'
import './LogoCoffee.css'
import logoIMG from '../../assets/img/Vector.png'


const LogoCoffee = () => {

    return (
       
            <Link to={"/"} className='logoCoffe'>
                <h3>cafedealtura.com</h3>
                <img src={logoIMG} alt="coffee" />
            </Link>
        
    )
}

export default LogoCoffee