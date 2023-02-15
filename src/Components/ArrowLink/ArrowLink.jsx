import { Link } from 'react-router-dom'
import './ArrowLink.css'

const ArrowLink = (props) => {

    const { url, text, nameClass } = props
    return (        
            <Link to={`${url}`} className={nameClass}>{text}<span className="arrow">→</span></Link> 
    )
}

export default ArrowLink 