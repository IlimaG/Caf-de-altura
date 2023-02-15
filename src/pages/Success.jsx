import Buttons from "../Components/Buttons/Buttons"
import Copyright from "../Components/Copyright/Copyright"
import NumberOrders from "../Components/NumberOrders/NumberOrders"
import OrderSummary from "../Components/OrderSummary/OrderSummary"
import '../styles/Success.css'
import { Link } from 'react-router-dom'


const Success = () => {

    return (
        <>
            <div id="Success">
            <NumberOrders />
            <div id="success">
                <OrderSummary />
                <Buttons nameClass='btnGreen' text={<Link to={`/shop`}>Volver a la tienda</Link>} />
            </div>

            <Copyright />
            </div>
        </>
    )
}

export default Success