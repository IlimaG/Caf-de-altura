import './NumberOrders.css'
import icon from '../../assets/img/Icon.1.png'
import { useContext, useEffect } from "react"
import { ProductsContext } from '../../context/ProductsContext'

const NumberOrders = () => {
    const {totalOrders, setTotalOrders} = useContext(ProductsContext)
    
        useEffect(() => {
            setTotalOrders(totalOrders + 1)
        }, [])

    return (
        <div className='numberOrders'>
            <img src={icon} alt="icon" />
            <h3>El pedido ha sido realizado con éxito</h3>
            <p>El pedido #{totalOrders} se encuentra en preparación. <br />
                Lo recibirás dentro de las fechas acordadas en tu envío. <br />
                Hemos enviado un ticket a tu correo electrónico.</p> <br />
        </div>
    )
}

export default NumberOrders